export interface TournamentResult {
  /** 對應 tier-list.ts 裡的 deck slug；官方尚未公開卡表、無法確認牌組時留 null。 */
  deckSlug: string | null;
  date: string; // ISO, e.g. "2026-05-09"
  tournamentNameZh: string;
  tournamentNameEn: string;
  region: string; // 中文地區名稱，例如「美國・洛杉磯」
  player: string; // 選手名字維持原文，不翻譯
  placement: number; // 29 → 顯示為「第 29 名」
  /** 官方賽事頁面連結，可查詢最新戰績。 */
  standingsUrl: string;
  /** 若官方有公開完整卡表圖片／頁面，放連結；沒有則為 null。 */
  decklistUrl: string | null;
}

// 目前的資料已核對過 Limitless TCG／Limitless Labs 的官方紀錄：
// Justin Templer 在 09 May 2026 洛杉磯地區賽打的是 Dragapult ex，
// 卡表連結為官方公開頁面 https://limitlesstcg.com/decks/list/26507
// （這份卡表也是當屆冠軍 Andrew Hedrick 的同一份清單）。
// 之後新增資料時，照同樣的欄位格式加進陣列即可，頁面會自動依日期新→舊、
// 同日期依名次排序。
export const tournamentResults: TournamentResult[] = [
  {
    deckSlug: "dragapult-ex",
    date: "2026-06-10",
    tournamentNameZh: "北美國際錦標賽（紐奧良）",
    tournamentNameEn: "NAIC 2026, New Orleans",
    region: "美國・紐奧良",
    player: "Justin Templer",
    placement: 94,
    standingsUrl: "https://limitlesstcg.com/tournaments/518",
    decklistUrl: "https://limitlesstcg.com/decks/list/28250",
  },
  {
    deckSlug: "dragapult-ex",
    date: "2026-05-30",
    tournamentNameZh: "美國印第安納波利斯地區錦標賽",
    tournamentNameEn: "Regional Championship Indianapolis, IN",
    region: "美國・印第安納波利斯",
    player: "Justin Templer",
    placement: 49,
    standingsUrl: "https://limitlesstcg.com/tournaments/559",
    decklistUrl: "https://limitlesstcg.com/decks/list/27612",
  },
  {
    deckSlug: "dragapult-ex",
    date: "2026-05-09",
    tournamentNameZh: "美國洛杉磯地區錦標賽",
    tournamentNameEn: "Regional Championship Los Angeles, CA",
    region: "美國・洛杉磯",
    player: "Justin Templer",
    placement: 29,
    standingsUrl: "https://limitlesstcg.com/tournaments/558",
    decklistUrl: "https://limitlesstcg.com/decks/list/26507",
  },
  {
    // Grimmsnarl／Froslass 目前不在我們 tier-list 的牌組清單裡，先不掛 deckSlug，
    // 避免掛錯牌組分類；卡表連結一樣是官方核對過的真實連結。
    deckSlug: null,
    date: "2026-04-04",
    tournamentNameZh: "美國奧蘭多地區錦標賽",
    tournamentNameEn: "Regional Championship Orlando, FL",
    region: "美國・奧蘭多",
    player: "Justin Templer",
    placement: 45,
    standingsUrl: "https://limitlesstcg.com/tournaments/552",
    decklistUrl: "https://limitlesstcg.com/decks/list/25060",
  },
];

export function sortedResults(results: TournamentResult[] = tournamentResults) {
  return [...results].sort((a, b) => {
    const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
    if (dateDiff !== 0) return dateDiff;
    return a.placement - b.placement;
  });
}

export function resultsForDeck(slug: string) {
  return sortedResults(tournamentResults.filter((r) => r.deckSlug === slug));
}
