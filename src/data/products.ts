// 此檔案由 scripts/sync-products.mjs 自動產生，最後同步時間：2026-07-24T06:55:14.339Z
// 商品的行銷文案維護在該腳本的 COPY_OVERRIDES 裡，不要直接改這裡的文案，
// 下次執行 sync 會被覆蓋。要調整版面／欄位型別可以直接改這個檔案。

export type ProductCategory = "牌組" | "單卡" | "卡套";

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
    slug: "product-2607241274134875",
    name: "大針蜂牌組",
    category: "牌組",
    price: 750,
    lot: "NO. 001",
    image: "/products/product-2607241274134875.png",
    imageWidth: 3000,
    imageHeight: 1344,
    inStock: true,
    minQty: 1,
    tagline: "大針蜂牌組，詳細介紹更新中。",
    description: "大針蜂牌組的完整介紹尚待補充，歡迎私訊詢問構築細節。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
    ],
    orderUrl: STORE_URL,
  },
  {
    id: "p2",
    slug: "product-2607241274134163",
    name: "猛雷鼓牌組",
    category: "牌組",
    price: 550,
    lot: "NO. 002",
    image: "/products/product-2607241274134163.jpg",
    imageWidth: 1079,
    imageHeight: 495,
    inStock: true,
    minQty: 1,
    tagline: "猛雷鼓牌組，詳細介紹更新中。",
    description: "猛雷鼓牌組的完整介紹尚待補充，歡迎私訊詢問構築細節。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
    ],
    orderUrl: STORE_URL,
  },
  {
    id: "p3",
    slug: "product-2607241274132949",
    name: "夠讚狗牌組",
    category: "牌組",
    price: 450,
    lot: "NO. 003",
    image: "/products/product-2607241274132949.jpg",
    imageWidth: 1911,
    imageHeight: 856,
    inStock: true,
    minQty: 1,
    tagline: "夠讚狗牌組，詳細介紹更新中。",
    description: "夠讚狗牌組的完整介紹尚待補充，歡迎私訊詢問構築細節。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
    ],
    orderUrl: STORE_URL,
  },
  {
    id: "p4",
    slug: "product-2607241274132168",
    name: "寶石海星牌組",
    category: "牌組",
    price: 450,
    lot: "NO. 004",
    image: "/products/product-2607241274132168.png",
    imageWidth: 3000,
    imageHeight: 1344,
    inStock: true,
    minQty: 1,
    tagline: "寶石海星牌組，詳細介紹更新中。",
    description: "寶石海星牌組的完整介紹尚待補充，歡迎私訊詢問構築細節。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
    ],
    orderUrl: STORE_URL,
  },
  {
    id: "p5",
    slug: "product-2607241274131516",
    name: "火箭隊超夢牌組",
    category: "牌組",
    price: 450,
    lot: "NO. 005",
    image: "/products/product-2607241274131516.jpg",
    imageWidth: 1080,
    imageHeight: 497,
    inStock: true,
    minQty: 1,
    tagline: "火箭隊超夢牌組，詳細介紹更新中。",
    description: "火箭隊超夢牌組的完整介紹尚待補充，歡迎私訊詢問構築細節。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
    ],
    orderUrl: STORE_URL,
  },
  {
    id: "p6",
    slug: "product-2607241274129895",
    name: "鋁鋼橋龍牌組",
    category: "牌組",
    price: 400,
    lot: "NO. 006",
    image: "/products/product-2607241274129895.png",
    imageWidth: 3000,
    imageHeight: 924,
    inStock: true,
    minQty: 1,
    tagline: "鋁鋼橋龍牌組，詳細介紹更新中。",
    description: "鋁鋼橋龍牌組的完整介紹尚待補充，歡迎私訊詢問構築細節。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
    ],
    orderUrl: STORE_URL,
  },
  {
    id: "p7",
    slug: "product-2607241274128475",
    name: "寶石海星卡套",
    category: "卡套",
    price: 200,
    lot: "NO. 007",
    image: "/products/product-2607241274128475.jpg",
    imageWidth: 500,
    imageHeight: 500,
    inStock: true,
    minQty: 1,
    tagline: "寶石海星卡套，詳細介紹更新中。",
    description: "寶石海星卡套的完整介紹尚待補充，歡迎私訊詢問構築細節。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
    ],
    orderUrl: STORE_URL,
  },
  {
    id: "p8",
    slug: "product-2607191267014676",
    name: "卡比獸卡套",
    category: "卡套",
    price: 200,
    lot: "NO. 008",
    image: "/products/product-2607191267014676.png",
    imageWidth: 600,
    imageHeight: 600,
    inStock: true,
    minQty: 1,
    tagline: "卡比獸卡套，詳細介紹更新中。",
    description: "卡比獸卡套的完整介紹尚待補充，歡迎私訊詢問構築細節。",
    specs: [
      { label: "規格", value: "1 副" },
      { label: "最低購買數量", value: "1 副" },
    ],
    orderUrl: STORE_URL,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
