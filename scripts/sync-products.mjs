/**
 * sync-products.mjs
 * ------------------------------------------------------------------
 * 從賣貨便賣場頁面同步商品資料到 src/data/products.ts。
 *
 * 賣貨便的商品列表頁其實是伺服器端渲染的靜態 HTML，每個商品卡片
 * （<div class="product" data-product="...">）的 data-product 屬性裡
 * 就包了一整包結構化 JSON（名稱／價格／庫存／圖片檔名），不用猜版面、
 * 不用 AI 辨識，直接解析這個屬性即可，非常穩定。
 *
 * 這支腳本會：
 *   1. 抓取 STORE_URL 這個賣場頁面
 *   2. 解析每個商品的 data-product JSON
 *   3. 把每個商品的圖片下載到 public/products/
 *   4. 重新產生 src/data/products.ts
 *
 * 行銷文案（tagline / description / 屬性核心）賣貨便不會提供，維護在下面
 * 的 COPY_OVERRIDES，用商品名稱對應。新上架但還沒寫文案的商品，會先套用
 * 通用預設文案，並在終端機印出提醒，之後手動幫它在 COPY_OVERRIDES 補一筆即可。
 *
 * 使用方式：
 *   node scripts/sync-products.mjs
 *
 * 什麼時候該執行：
 *   在賣貨便上新增、下架、改價、換圖之後，執行一次這支腳本，
 *   確認 git diff 看起來合理，就可以照平常流程部署。
 * ------------------------------------------------------------------
 */

import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const STORE_URL = "https://myship.7-11.com.tw/general/detail/GM2604248168251";
const IMAGE_BASE = "https://myship.7-11.com.tw/i/cgdm/GM2604248168251/";

// 商品名稱 -> 網址 slug。新商品若不在這裡，會 fallback 成 product-<編號>，
// 建議之後手動補一筆更好看的 slug。
const SLUG_OVERRIDES = {
  烈咬陸鯊牌組: "garchomp-deck",
  奇諾栗鼠牌組: "cinccino-deck",
  狙射樹梟牌組: "decidueye-deck",
  電肚蛙牌組: "bellibolt-deck",
  暴雪王牌組: "abomasnow-deck",
  魔靈多龍牌組: "noivern-deck",
};

// 商品名稱 -> 行銷文案。賣貨便沒有這些資料，純粹手寫維護。
const COPY_OVERRIDES = {
  烈咬陸鯊牌組: {
    tagline: "地面系一線構築，主打高傷害壓制與盤面清空。",
    description:
      "以烈咬陸鯊為核心的構築，訴求用高攻擊力快速清盤，操作直覺，適合喜歡正面對決的訓練家。",
    attribute: "地面 / 惡",
  },
  奇諾栗鼠牌組: {
    tagline: "高速鋪場、節奏明快，適合入門練習手感。",
    description:
      "奇諾栗鼠的招牌是快速展開場面、迅速累積優勢，操作邏輯單純，很適合剛接觸構築牌組的新手上手。",
    attribute: "無色",
  },
  狙射樹梟牌組: {
    tagline: "草屬性穩定輸出，節奏偏向中長期布局。",
    description:
      "以狙射樹梟為核心的草屬性構築，透過穩定的資源運用拉長對局，適合喜歡步步為營節奏的訓練家。",
    attribute: "草",
  },
  電肚蛙牌組: {
    tagline: "電屬性速攻取向，追求快速累積輸出。",
    description: "電肚蛙牌組主打快速進入輸出節奏，能量效率高，適合想體驗速攻打法的訓練家。",
    attribute: "電",
  },
  暴雪王牌組: {
    tagline: "價格最實惠的入門款，練習操作的首選。",
    description:
      "暴雪王牌組是目前價格最親民的一副，適合拿來練習基本操作、熟悉牌組運作邏輯後再挑戰其他構築。",
    attribute: "草 / 冰",
  },
  魔靈多龍牌組: {
    tagline: "飛行系構築，熱銷中，補貨後立即上架。",
    description:
      "魔靈多龍牌組主打飛行系的靈活調度，是店內詢問度最高的一副，如遇缺貨歡迎私訊預約下一批到貨通知。",
    attribute: "飛行 / 龍",
  },
};

function slugify(name, id) {
  if (SLUG_OVERRIDES[name]) return SLUG_OVERRIDES[name];
  return `product-${id}`;
}

function inferCategory(name) {
  if (name.endsWith("牌組")) return "牌組";
  if (/配件|套組|收納|對局墊|卡冊|牌套/.test(name)) return "配件";
  return "單卡";
}

// 賣貨便上的圖檔網址雖然都用 .jpg 結尾，但實際內容有些其實是 PNG
// （多半是用去背/文字排版工具匯出的卡表圖），所以要先看檔頭 magic bytes
// 判斷真正格式，而不是相信副檔名。

function detectImageFormat(buffer) {
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return "jpeg";
  if (
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47
  ) {
    return "png";
  }
  return null;
}

// 手動解析 JPEG 的 SOF 區塊拿寬高，不特地為這件小事多加一個 npm 套件。
function getJpegSize(buffer) {
  let offset = 2;
  while (offset + 4 <= buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset++;
      continue;
    }
    const marker = buffer[offset + 1];
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      offset += 2;
      continue;
    }
    const length = buffer.readUInt16BE(offset + 2);
    const isSOF =
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf);
    if (isSOF) {
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    offset += 2 + length;
  }
  return null;
}

// PNG 尺寸固定放在 IHDR chunk：簽章(8 bytes) + 長度(4) + "IHDR"(4) 之後，
// 接著就是 4-byte width + 4-byte height。
function getPngSize(buffer) {
  if (buffer.length < 24) return null;
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

function getImageSize(buffer, format) {
  if (format === "jpeg") return getJpegSize(buffer);
  if (format === "png") return getPngSize(buffer);
  return null;
}

function parseStorePage(html) {
  const $ = cheerio.load(html);
  const seen = new Set();
  const items = [];

  $("div.product[data-product]").each((_, el) => {
    const raw = $(el).attr("data-product");
    if (!raw) return;

    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      console.warn("跳過一筆無法解析的商品 JSON");
      return;
    }

    // 每個商品在頁面上會出現兩次（圖片區塊 + 標題區塊各有一個 data-product）
    if (seen.has(data.Cgdd_Id)) return;
    seen.add(data.Cgdd_Id);

    const spec = data.Spec?.[0];
    const imageFilename = data.Images?.[0]?.Cgim_Image_Path ?? data.GoodsFirstImg;
    if (!spec || !imageFilename) {
      console.warn(`商品「${data.Cgdd_Product_Name}」缺少規格或圖片資料，已跳過`);
      return;
    }

    items.push({
      id: data.Cgdd_Id,
      name: data.Cgdd_Product_Name,
      price: spec.Cgds_SPrice > 0 ? spec.Cgds_SPrice : spec.Cgds_Price,
      inStock: (spec.Inventory ?? 0) > 0,
      minQty: data.Cgdd_Product_MinOrder ?? 1,
      imageFilename,
    });
  });

  return items;
}

function tsString(value) {
  return JSON.stringify(value);
}

function renderProductsFile(products) {
  const entries = products
    .map((p) => {
      const specsLines = p.specs
        .map((s) => `      { label: ${tsString(s.label)}, value: ${tsString(s.value)} },`)
        .join("\n");

      return `  {
    id: ${tsString(p.id)},
    slug: ${tsString(p.slug)},
    name: ${tsString(p.name)},
    category: ${tsString(p.category)},
    price: ${p.price},
    lot: ${tsString(p.lot)},
    image: ${tsString(p.image)},
    imageWidth: ${p.imageWidth},
    imageHeight: ${p.imageHeight},
    inStock: ${p.inStock},
    minQty: ${p.minQty},
    tagline: ${tsString(p.tagline)},
    description: ${tsString(p.description)},
    specs: [
${specsLines}
    ],
    orderUrl: STORE_URL,
  },`;
    })
    .join("\n");

  return `// 此檔案由 scripts/sync-products.mjs 自動產生，最後同步時間：${new Date().toISOString()}
// 商品的行銷文案維護在該腳本的 COPY_OVERRIDES 裡，不要直接改這裡的文案，
// 下次執行 sync 會被覆蓋。要調整版面／欄位型別可以直接改這個檔案。

export type ProductCategory = "牌組" | "單卡" | "配件";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  /** 內部批次編號，純粹是品牌視覺用的「批次章」，不代表任何戰績數據 */
  lot: string;
  /** public/products 底下的圖片路徑，直接取自賣貨便賣場的商品照片 */
  image: string;
  /** 圖片原始尺寸，用來在商品詳情頁以原始比例完整顯示卡表，不裁切 */
  imageWidth: number;
  imageHeight: number;
  inStock: boolean;
  minQty: number;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  /**
   * 賣貨便賣場網址。這裡所有商品共用同一個網址是刻意的，不是待補的佔位符：
   * 賣貨便上每個商品是用頁面內彈窗（/CPF0102/PopupProduct）展示，沒有各自獨立的網址，
   * 所以只能導去賣場總覽頁，讓買家在頁面上點開對應商品。
   */
  orderUrl: string;
}

const STORE_URL = ${tsString(STORE_URL)};

export const products: Product[] = [
${entries}
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
`;
}

async function main() {
  console.log(`抓取賣貨便賣場：${STORE_URL}`);
  const res = await fetch(STORE_URL);
  if (!res.ok) {
    throw new Error(`抓取賣場頁面失敗：HTTP ${res.status}`);
  }
  const html = await res.text();

  const items = parseStorePage(html);
  if (items.length === 0) {
    throw new Error(
      "沒有解析到任何商品，賣貨便頁面結構可能已變更，請打開頁面原始碼確認 div.product 的 data-product 屬性是否還在。"
    );
  }
  console.log(`解析到 ${items.length} 項商品`);

  const productsDir = path.join(ROOT, "public", "products");
  await mkdir(productsDir, { recursive: true });

  const products = [];
  let lotNo = 1;

  for (const item of items) {
    const slug = slugify(item.name, item.id);

    console.log(`- ${item.name}（NT$${item.price}，${item.inStock ? "有庫存" : "已售罄"}）`);

    let width = 1200;
    let height = 400;
    let imagePath = `/products/${slug}.jpg`;

    try {
      const imgRes = await fetch(IMAGE_BASE + item.imageFilename);
      if (!imgRes.ok) throw new Error(`HTTP ${imgRes.status}`);
      const buf = Buffer.from(await imgRes.arrayBuffer());

      const format = detectImageFormat(buf);
      const ext = format === "png" ? "png" : "jpg";
      imagePath = `/products/${slug}.${ext}`;
      await writeFile(path.join(productsDir, `${slug}.${ext}`), buf);

      const size = getImageSize(buf, format);
      if (size) {
        ({ width, height } = size);
      } else {
        console.warn(`  無法判斷圖片實際尺寸（格式：${format ?? "未知"}），暫用預設比例 ${width}x${height}`);
      }
    } catch (err) {
      console.warn(`  圖片下載失敗（${err.message}），沿用預設比例，圖片請手動確認`);
    }

    const copy = COPY_OVERRIDES[item.name];
    if (!copy) {
      console.warn(
        `  「${item.name}」還沒有對應的行銷文案，先套用預設文案。建議到 scripts/sync-products.mjs 的 COPY_OVERRIDES 補上。`
      );
    }

    const lot = `NO. ${String(lotNo).padStart(3, "0")}`;
    products.push({
      id: `p${lotNo}`,
      slug,
      name: item.name,
      category: inferCategory(item.name),
      price: item.price,
      lot,
      image: imagePath,
      imageWidth: width,
      imageHeight: height,
      inStock: item.inStock,
      minQty: item.minQty,
      tagline: copy?.tagline ?? `${item.name}，詳細介紹更新中。`,
      description: copy?.description ?? `${item.name}的完整介紹尚待補充，歡迎私訊詢問構築細節。`,
      specs: [
        { label: "規格", value: "1 副" },
        { label: "最低購買數量", value: `${item.minQty} 副` },
        ...(copy?.attribute ? [{ label: "屬性核心", value: copy.attribute }] : []),
      ],
    });
    lotNo++;
  }

  const fileContent = renderProductsFile(products);
  await writeFile(path.join(ROOT, "src", "data", "products.ts"), fileContent, "utf8");
  console.log(`\n已更新 src/data/products.ts（共 ${products.length} 項商品）`);
}

main().catch((err) => {
  console.error("同步失敗：", err);
  process.exitCode = 1;
});
