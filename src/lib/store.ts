/**
 * store.ts
 * ------------------------------------------------------------------
 * 商品資料不再是建置時寫死的檔案，而是每次頁面重新驗證（ISR）時，
 * 直接向賣貨便賣場頁面即時抓取、解析。賣貨便在賣場上新增、下架、
 * 改價、換圖後，網站會在 REVALIDATE_SECONDS 秒內自動反映，不需要
 * 手動跑腳本或重新部署。
 *
 * 解析邏輯：賣貨便的商品列表頁是伺服器端渲染的靜態 HTML，每個商品卡片
 * （<div class="product" data-product="...">）的 data-product 屬性裡就包了
 * 一整包結構化 JSON（名稱／價格／庫存／圖片檔名），直接解析這個屬性即可。
 *
 * 行銷文案（tagline / description / 屬性核心）賣貨便不會提供，維護在下面
 * 的 COPY_OVERRIDES，用商品名稱對應。新上架但還沒寫文案的商品，會先套用
 * 通用預設文案，之後可以直接在這裡補一筆。
 * ------------------------------------------------------------------
 */

import * as cheerio from "cheerio";

export type ProductCategory = "牌組" | "單卡" | "卡套";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  /** 內部批次編號，純粹是品牌視覺用的「批次章」，不代表任何戰績數據 */
  lot: string;
  /** 直接指向賣貨便賣場的商品照片網址 */
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

const STORE_URL = "https://myship.7-11.com.tw/general/detail/GM2604248168251";
const IMAGE_BASE = "https://myship.7-11.com.tw/i/cgdm/GM2604248168251/";

/** 資料重新驗證間隔（秒）。賣貨便更新商品後，最慢這麼多秒網站就會同步。 */
const REVALIDATE_SECONDS = 300;

// 商品名稱 -> 網址 slug。新商品若不在這裡，會 fallback 成 product-<編號>，
// 建議之後手動補一筆更好看的 slug。
const SLUG_OVERRIDES: Record<string, string> = {
  烈咬陸鯊牌組: "garchomp-deck",
  奇諾栗鼠牌組: "cinccino-deck",
  狙射樹梟牌組: "decidueye-deck",
  電肚蛙牌組: "bellibolt-deck",
  暴雪王牌組: "abomasnow-deck",
  魔靈多龍牌組: "noivern-deck",
};

// 商品名稱 -> 行銷文案。賣貨便沒有這些資料，純粹手寫維護。
const COPY_OVERRIDES: Record<
  string,
  { tagline: string; description?: string; attribute?: string }
> = {
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
  猛雷鼓牌組: {
    tagline: "龍系上位環境構築，完整卡表現貨供應。",
    description:
      "以猛雷鼓為核心的龍系牌組，跟隨日本賽事上位環境調整卡表，適合想嘗試主流強勢構築的訓練家。",
    attribute: "龍",
  },
  夠讚狗牌組: {
    tagline: "鬥系上位環境構築，完整卡表現貨供應。",
    description:
      "以夠讚狗為核心的鬥系牌組，跟隨日本賽事上位環境調整卡表，適合想嘗試主流強勢構築的訓練家。",
    attribute: "鬥",
  },
  火箭隊超夢牌組: {
    tagline: "超系上位環境構築，完整卡表現貨供應。",
    description:
      "以火箭隊超夢為核心的超系牌組，跟隨日本賽事上位環境調整卡表，適合想嘗試主流強勢構築的訓練家。",
    attribute: "超",
  },
  鋁鋼橋龍牌組: {
    tagline: "鋼系上位環境構築，完整卡表現貨供應。",
    description:
      "以鋁鋼橋龍為核心的鋼系牌組，跟隨日本賽事上位環境調整卡表，適合想嘗試主流強勢構築的訓練家。",
    attribute: "鋼",
  },
  大針蜂牌組: { tagline: "" },
  寶石海星牌組: { tagline: "" },
  寶石海星卡套: { tagline: "" },
  卡比獸卡套: { tagline: "" },
};

function slugify(name: string, id: string) {
  if (SLUG_OVERRIDES[name]) return SLUG_OVERRIDES[name];
  return `product-${id}`;
}

function inferCategory(name: string): ProductCategory {
  if (name.endsWith("牌組")) return "牌組";
  if (/卡套|牌套|套組|收納|對局墊|卡冊/.test(name)) return "卡套";
  return "單卡";
}

// 賣貨便上的圖檔網址雖然都用 .jpg 結尾，但實際內容有些其實是 PNG
// （多半是用去背/文字排版工具匯出的卡表圖），所以要先看檔頭 magic bytes
// 判斷真正格式，而不是相信副檔名。
function detectImageFormat(buffer: Buffer): "jpeg" | "png" | null {
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
function getJpegSize(buffer: Buffer): { width: number; height: number } | null {
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
function getPngSize(buffer: Buffer): { width: number; height: number } | null {
  if (buffer.length < 24) return null;
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

function getImageSize(buffer: Buffer, format: "jpeg" | "png" | null) {
  if (format === "jpeg") return getJpegSize(buffer);
  if (format === "png") return getPngSize(buffer);
  return null;
}

interface RawItem {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
  minQty: number;
  imageFilename: string;
}

function parseStorePage(html: string): RawItem[] {
  const $ = cheerio.load(html);
  const seen = new Set<string>();
  const items: RawItem[] = [];

  $("div.product[data-product]").each((_, el) => {
    const raw = $(el).attr("data-product");
    if (!raw) return;

    let data: any;
    try {
      data = JSON.parse(raw);
    } catch {
      return;
    }

    // 每個商品在頁面上會出現兩次（圖片區塊 + 標題區塊各有一個 data-product）
    if (seen.has(data.Cgdd_Id)) return;
    seen.add(data.Cgdd_Id);

    const spec = data.Spec?.[0];
    const imageFilename = data.Images?.[0]?.Cgim_Image_Path ?? data.GoodsFirstImg;
    if (!spec || !imageFilename) return;

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

const DEFAULT_IMAGE_SIZE = { width: 1200, height: 400 };

// 我們只需要檔頭幾個 byte 就能算出圖片尺寸（PNG 24 bytes、JPEG 的 SOF 區塊
// 通常也在檔案前段），沒必要把整張圖（可能好幾 MB）都抓下來，也能避開
// Next.js Data Cache 對單一快取項目 2MB 的上限。
const HEADER_BYTES = 262_144; // 256KB，足夠涵蓋絕大多數 JPEG 的 SOF 區塊

async function fetchImageSize(url: string): Promise<{ width: number; height: number }> {
  try {
    const res = await fetch(url, {
      headers: { Range: `bytes=0-${HEADER_BYTES - 1}` },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok && res.status !== 206) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const format = detectImageFormat(buf);
    const size = getImageSize(buf, format);
    if (size) return size;

    // 伺服器可能忽略了 Range、或 SOF 區塊剛好落在 256KB 之外：退回抓整張圖，
    // 但不寫入 Data Cache（大檔案寫入本來就會被拒絕，乾脆直接跳過快取）。
    const fullRes = await fetch(url, { cache: "no-store" });
    if (!fullRes.ok) throw new Error(`HTTP ${fullRes.status}`);
    const fullBuf = Buffer.from(await fullRes.arrayBuffer());
    const fullFormat = detectImageFormat(fullBuf);
    return getImageSize(fullBuf, fullFormat) ?? DEFAULT_IMAGE_SIZE;
  } catch {
    return DEFAULT_IMAGE_SIZE;
  }
}

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(STORE_URL, { next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) {
    throw new Error(`抓取賣貨便賣場頁面失敗：HTTP ${res.status}`);
  }
  const html = await res.text();
  const items = parseStorePage(html);

  let lotNo = 1;
  const products = await Promise.all(
    items.map(async (item) => {
      const slug = slugify(item.name, item.id);
      const imageUrl = IMAGE_BASE + item.imageFilename;
      const { width, height } = await fetchImageSize(imageUrl);
      const copy = COPY_OVERRIDES[item.name];
      const currentLotNo = lotNo++;
      const lot = `NO. ${String(currentLotNo).padStart(3, "0")}`;

      const product: Product = {
        id: `p${currentLotNo}`,
        slug,
        name: item.name,
        category: inferCategory(item.name),
        price: item.price,
        lot,
        image: imageUrl,
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
        orderUrl: STORE_URL,
      };
      return product;
    })
  );

  return products;
}

export async function getProducts(): Promise<Product[]> {
  return fetchProducts();
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug);
}
