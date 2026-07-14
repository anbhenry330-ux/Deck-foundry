# 構築所（Kouchikusho）電商官網 — 初步架構

Next.js 14（App Router）+ TypeScript + Tailwind CSS 的網站骨架。網站本身只負責「型錄瀏
覽」，實際下單／付款（貨到付款）交給賣貨便處理：每個商品頁與商品卡片都有「前往賣貨便下
單」按鈕，點擊後開新分頁跳轉到該商品在賣貨便上的頁面完成下單。

## 目錄結構

```
src/
├─ app/
│  ├─ layout.tsx              根 layout：字型、Header／Footer
│  ├─ globals.css             Tailwind 進入點 + CSS 變數 + 無障礙focus樣式
│  ├─ page.tsx                首頁（Hero、評級總覽、分類、精選商品、理念）
│  ├─ about/page.tsx          關於構築所
│  ├─ order-guide/page.tsx    下單教學：會員註冊提醒、流程圖、防詐宣導
│  └─ products/
│     ├─ page.tsx             商品目錄（可用 ?category= 篩選）
│     └─ [slug]/page.tsx      商品詳情，含「前往賣貨便下單」CTA
├─ components/
│  ├─ Header.tsx / Footer.tsx Header 右上角也有「前往賣貨便下單」按鈕，導去賣場首頁
│  ├─ ProductCard.tsx         商品卡片：點圖片／名稱進商品詳情，卡片內另有賣貨便下單按鈕
│  ├─ ProductGlyph.tsx        商品視覺（鑑定書風格，目前無圖檔，用 icon 代替）
│  ├─ OrderCTA.tsx            商品詳情頁的下單按鈕區塊（連到賣貨便，並連結下單教學頁）
│  ├─ OrderFlow.tsx           下單教學頁用的流程圖（7 個步驟，含會員註冊提醒）
│  └─ FraudAwareness.tsx      下單教學頁用的防詐提醒區塊
├─ data/
│  └─ products.ts             商品資料（mock），每筆都有 orderUrl 欄位
└─ lib/
   └─ format.ts               金額格式化工具
```

> 這一版已經**移除**站內購物車／結帳流程，因為下單與貨到付款都交給賣貨便處理，站內只需
> 要做導購型錄即可，避免重複維護兩套訂單邏輯。

## 賣貨便串接說明

- `src/data/products.ts` **由 `scripts/sync-products.mjs` 自動產生**，不要手動改這個檔
  案（下次同步會被覆蓋）。
- 賣貨便上每個商品是用頁面內彈窗（`/CPF0102/PopupProduct`）呈現的，沒有各自獨立的網
  址，所以所有商品的 `orderUrl` 本來就會是同一個賣場總覽網址：
  ```
  https://myship.7-11.com.tw/general/detail/GM2604248168251
  ```
  這是刻意的行為，不是待補的佔位符——買家點「前往賣貨便下單」之後，在賣場頁面上點開對
  應商品即可下單。

### 商品同步（新增／下架／改價／換圖後要做的事）

在賣貨便上架、下架、改價或換圖之後，執行：

```bash
node scripts/sync-products.mjs
```

這支腳本會：

1. 抓取賣場頁面，解析每個商品卡片 `data-product` 屬性內的結構化 JSON（賣貨便原生資
   料，包含名稱／價格／即時庫存／圖片檔名，不是用 AI 猜版面）
2. 把每個商品的最新圖片下載到 `public/products/`（會自動判斷圖檔實際格式，賣貨便的圖
   網址雖然都是 `.jpg` 結尾，但實際內容有些其實是 PNG）
3. 重新產生 `src/data/products.ts`

跑完之後看一下 `git diff` 確認結果合理（價格、庫存、新增/消失的商品），再照平常流程部
署。

商品的行銷文案（tagline／description／規格裡的屬性核心）賣貨便不會提供，維護在
`scripts/sync-products.mjs` 檔案裡的 `COPY_OVERRIDES`，用商品名稱對應。新上架但還沒
寫文案的商品，跑同步時會先套用通用預設文案，並在終端機印出提醒，之後手動幫它在
`COPY_OVERRIDES` 補一筆即可。商品的網址 slug 同理維護在同一支腳本的 `SLUG_OVERRIDES`。

- `src/components/Header.tsx` 頂部也有一個全站共用的「前往下單」按鈕，導去賣場總覽頁。

## 近期上位戰績頁（/tournament-results）

- 資料檔：`src/data/tournament-results.ts`，每一筆包含大賽時間、賽事名稱、選手、名次、
  （若有）對應牌組與官方卡表連結
- 顯示格式完全依你要求的欄位：大賽時間／賽事名稱／選手／名次／卡表，選手名字維持原文，
  其餘欄位中文化
- 自動排序：日期新到舊，同一天則依名次由前到後
- 目前放的是 4 筆已核對過的真實資料，來自 Justin Templer 的個人賽事紀錄（在 Limitless TCG／
  Limitless Labs 查證），每筆都附上官方公開的卡表連結（例如
  `https://limitlesstcg.com/decks/list/26507`），包含你提到的 2026/5/9 洛杉磯地區賽第 29 名
  那筆，牌組已確認為 Dragapult ex
- 「卡表」欄位刻意不把卡圖嵌進自己的網站：寶可夢卡牌圖像屬於任天堂／The Pokémon Company
  版權內容，改用「查看完整卡表」外部連結導去官方頁面，尊重原始來源與版權
- `/tier-list` 頁面上每個牌組名稱可以點擊，連到 `/tournament-results?deck=<slug>`，只顯示
  該牌組的戰績
- 之後要新增資料，就照 `TournamentResult` 的欄位格式，在陣列裡加一筆即可，不用改頁面程式碼

## 上位卡表頁（/tier-list）

- 資料來源：[Limitless TCG](https://limitlesstcg.com/decks)（國外主流 Pokémon TCG 賽事統
  計網站），目前放的是一份手動擷取、翻譯好的**快照**（`src/data/tier-list.ts`）
- 依環境使用率自動分類：一線（≥10%）／二線（2%–10%）／三線（<2%），對應
  `TIER_LABEL` / `TIER_DESC`
- 牌組名稱皆已中文化；人物名字（如 N、Hop、Ethan、Cynthia、Marnie）若尚未確認官方繁中
  譯名會保留原文，避免翻錯專有名詞——建議上線前找熟悉官方翻譯的人核對一次
- `scripts/sync-tier-list.mjs`：之後要做「自動同步」的起點腳本，目前是骨架版本（含中文
  翻譯字典與分級邏輯，解析 HTML 的部分留了 TODO），因為這個沙盒環境無法連網，所以還沒
  真的抓過資料。等你把網站部署上線後：
  1. `npm install cheerio`
  2. 把腳本裡的 cheerio 解析邏輯依網站當下的 HTML 結構補上
  3. 本機執行 `node scripts/sync-tier-list.mjs` 測試
  4. 之後可以包成一支 API Route，掛到 Vercel Cron Jobs 之類的排程服務，達到你要的「自動
     定期更新」

## 下單教學頁（/order-guide）

- 提醒第一次購買的訓練家先完成 7-11 OPEN POINT 會員註冊，按鈕連到
  `https://myship.7-11.com.tw/Member/Register`
- 完整 7 步驟下單流程圖（瀏覽商品 → 前往賣貨便 → 會員註冊／登入 → 選門市與付款方式 →
  等待通知 → 取貨付款 → 完成）
- 防詐提醒區塊：官方不會電話要求 ATM 操作、不會索取密碼／OTP、務必認明
  `myship.7-11.com.tw` 網域，並附上 165 反詐騙專線
- Header 導覽列、商品詳情頁下單按鈕下方、Footer 都有連到這頁的入口

## 設計系統

- 底色 `#FDFBF7`、主文字 `#5D4037`、邊框 `#C4A484`（沿用你原本 about 頁的配色）
- 強調色：`#2F4538`（帳房綠，用於下單按鈕／CTA）、`#A6791F`（金，用於指標數值）
- 字體：標題 Noto Serif TC、內文 Noto Sans TC、數字／代號用等寬字體（JetBrains Mono），
  呼應「鑑定書 / 帳冊」的品牌調性
- 簽名視覺元素：`ProductGlyph` 的鑑定編號角標，讓每個商品都像一張鑑定證書

## 本機啟動

```bash
npm install
npm run dev
```

接著開啟 http://localhost:3000

## 建議下一步

1. 把 `products.ts` 裡每個商品的 `orderUrl` 換成賣貨便上對應的個別連結
2. 商品圖片：`ProductGlyph` 目前用 icon 佔位，有實拍圖後可換成 `next/image`
3. 若之後想把賣貨便賣場「嵌入」在站內某一頁（iframe），也可以再加，但賣貨便平台是否允
   許被嵌入需另外確認
4. 加上商品搜尋／排序、SEO metadata、Open Graph 圖片

