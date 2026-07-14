// 此檔案由 scripts/sync-products.mjs 自動產生，最後同步時間：2026-07-14T08:53:03.677Z
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

const STORE_URL = "https://myship.7-11.com.tw/general/detail/GM2604248168251";

export const products: Product[] = [
  {
    id: "p1",
    slug: "garchomp-deck",
    name: "烈咬陸鯊牌組",
    category: "牌組",
    price: 500,
    lot: "NO. 001",
    image: "/products/garchomp-deck.png",
    imageWidth: 3000,
    imageHeight: 924,
    inStock: true,
    minQty: 1,
    tagline: "地面系一線構築，主打高傷害壓制與盤面清空。",
    description: "以烈咬陸鯊為核心的構築，訴求用高攻擊力快速清盤，操作直覺，適合喜歡正面對決的訓練家。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
      { label: "屬性核心", value: "地面 / 惡" },
    ],
    orderUrl: STORE_URL,
  },
  {
    id: "p2",
    slug: "cinccino-deck",
    name: "奇諾栗鼠牌組",
    category: "牌組",
    price: 400,
    lot: "NO. 002",
    image: "/products/cinccino-deck.png",
    imageWidth: 3000,
    imageHeight: 1344,
    inStock: true,
    minQty: 1,
    tagline: "高速鋪場、節奏明快，適合入門練習手感。",
    description: "奇諾栗鼠的招牌是快速展開場面、迅速累積優勢，操作邏輯單純，很適合剛接觸構築牌組的新手上手。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
      { label: "屬性核心", value: "無色" },
    ],
    orderUrl: STORE_URL,
  },
  {
    id: "p3",
    slug: "decidueye-deck",
    name: "狙射樹梟牌組",
    category: "牌組",
    price: 400,
    lot: "NO. 003",
    image: "/products/decidueye-deck.png",
    imageWidth: 3000,
    imageHeight: 924,
    inStock: true,
    minQty: 1,
    tagline: "草屬性穩定輸出，節奏偏向中長期布局。",
    description: "以狙射樹梟為核心的草屬性構築，透過穩定的資源運用拉長對局，適合喜歡步步為營節奏的訓練家。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
      { label: "屬性核心", value: "草" },
    ],
    orderUrl: STORE_URL,
  },
  {
    id: "p4",
    slug: "bellibolt-deck",
    name: "電肚蛙牌組",
    category: "牌組",
    price: 400,
    lot: "NO. 004",
    image: "/products/bellibolt-deck.png",
    imageWidth: 3000,
    imageHeight: 924,
    inStock: true,
    minQty: 1,
    tagline: "電屬性速攻取向，追求快速累積輸出。",
    description: "電肚蛙牌組主打快速進入輸出節奏，能量效率高，適合想體驗速攻打法的訓練家。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
      { label: "屬性核心", value: "電" },
    ],
    orderUrl: STORE_URL,
  },
  {
    id: "p5",
    slug: "abomasnow-deck",
    name: "暴雪王牌組",
    category: "牌組",
    price: 200,
    lot: "NO. 005",
    image: "/products/abomasnow-deck.jpg",
    imageWidth: 2400,
    imageHeight: 504,
    inStock: true,
    minQty: 1,
    tagline: "價格最實惠的入門款，練習操作的首選。",
    description: "暴雪王牌組是目前價格最親民的一副，適合拿來練習基本操作、熟悉牌組運作邏輯後再挑戰其他構築。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
      { label: "屬性核心", value: "草 / 冰" },
    ],
    orderUrl: STORE_URL,
  },
  {
    id: "p6",
    slug: "noivern-deck",
    name: "魔靈多龍牌組",
    category: "牌組",
    price: 600,
    lot: "NO. 006",
    image: "/products/noivern-deck.jpg",
    imageWidth: 1080,
    imageHeight: 488,
    inStock: false,
    minQty: 1,
    tagline: "飛行系構築，熱銷中，補貨後立即上架。",
    description: "魔靈多龍牌組主打飛行系的靈活調度，是店內詢問度最高的一副，如遇缺貨歡迎私訊預約下一批到貨通知。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
      { label: "屬性核心", value: "飛行 / 龍" },
    ],
    orderUrl: STORE_URL,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
