/**
 * sync-tier-list.mjs
 * ------------------------------------------------------------------
 * 從 Limitless TCG 抓取最新的牌組使用率，套用中文翻譯字典，
 * 產生 src/data/tier-list.ts。
 *
 * 目前用途：手動執行、確認資料正確後貼回 src/data/tier-list.ts。
 * 之後用途：部署後掛到排程平台（例如 Vercel Cron Jobs／GitHub Actions
 *          排程），定期自動執行，讓「上位卡表」頁面資料保持最新。
 *
 * 使用方式：
 *   npm install cheerio        # 一次性安裝 HTML 解析套件
 *   node scripts/sync-tier-list.mjs
 *
 * 之後要接排程時，可以把這支腳本包成一個 API Route
 * （例如 src/app/api/sync-tier-list/route.ts），
 * 讓 Vercel Cron 定期呼叫該 API，並把結果寫入資料庫或 KV，
 * 而不是直接覆寫程式碼檔案。
 * ------------------------------------------------------------------
 */

import { writeFile } from "node:fs/promises";

const SOURCE_URL = "https://limitlesstcg.com/decks";

// 中文翻譯字典：把來源網站上的英文牌組關鍵字對應到繁體中文。
// TCG 牌組命名多半是「主力寶可夢 + 招式/組合暱稱」，用字典比即時機器翻譯準確，
// 之後環境更新（新增牌組）時，只要在這裡補上新的對照即可。
const TRANSLATIONS = {
  Dragapult: "多龍巴魯托",
  Zoroark: "索羅亞克",
  Crustle: "岩殿居蟹",
  Slowking: "呆呆王",
  Hydrapple: "蘋裹龍",
  Alakazam: "胡地",
  "Raging Bolt": "猛雷鼓",
  Ogerpon: "厄鬼椪",
  Clefairy: "皮皮",
  Honchkrow: "烏鴉頭頭",
  "Mega Lucario": "超級路卡利歐",
  Mewtwo: "超夢",
  Trevenant: "不祥樹",
  Beedrill: "大針蜂",
  Typhlosion: "火暴獸",
  Garchomp: "烈咬陸鯊",
  Metagross: "巨金怪",
  "Mega Lopunny": "超級長耳兔",
  Grimmsnarl: "長毛巨魔",
  "Mega Starmie": "超級寶石海星",
  "Mega Greninja": "超級甲賀忍蛙",
  Meganium: "大竺葵",
  Sylveon: "仙子伊布",
  Archaludon: "波士可多拉",
  "N's": "N 的",
  "Rocket's": "火箭隊的",
  "Lillie's": "莉莉艾的",
};

function translate(nameEn) {
  let result = nameEn;
  for (const [en, zh] of Object.entries(TRANSLATIONS)) {
    result = result.replaceAll(en, zh);
  }
  return result;
}

function classify(share) {
  if (share >= 10) return "T1";
  if (share >= 2) return "T2";
  return "T3";
}

async function main() {
  console.log(`抓取 ${SOURCE_URL} ...`);

  // 注意：這支腳本需要在有對外網路存取權限的環境執行
  // （例如你自己的電腦、CI 排程、或 Vercel serverless function），
  // 在目前這個沙盒環境中無法連網執行。
  const res = await fetch(SOURCE_URL);
  const html = await res.text();

  // TODO: 用 cheerio 解析 <table> 內的 rank / deck name / points / share
  // 這裡先留解析邏輯的骨架，實際欄位名稱與 class 需以當下網站原始碼為準：
  //
  // import * as cheerio from "cheerio";
  // const $ = cheerio.load(html);
  // const decks = [];
  // $("table tr").each((i, row) => {
  //   const rank = Number($(row).find("td").eq(0).text().trim());
  //   const nameEn = $(row).find("td").eq(2).find("a").text().trim();
  //   const points = Number($(row).find("td").eq(3).text().trim());
  //   const share = Number($(row).find("td").eq(4).text().replace("%", "").trim());
  //   if (!rank || !nameEn) return;
  //   decks.push({
  //     rank,
  //     nameEn,
  //     nameZh: translate(nameEn),
  //     points,
  //     share,
  //     tier: classify(share),
  //   });
  // });
  //
  // const output = `// 自動產生於 ${new Date().toISOString()}\nexport const tierList = ${JSON.stringify(decks, null, 2)};\n`;
  // await writeFile("src/data/tier-list.generated.ts", output, "utf-8");

  console.log(
    "抓取完成（骨架版本）。請依網站實際 HTML 結構補上 cheerio 解析邏輯，" +
      "並將輸出結果核對後合併進 src/data/tier-list.ts。"
  );
}

main().catch((err) => {
  console.error("同步失敗：", err);
  process.exit(1);
});
