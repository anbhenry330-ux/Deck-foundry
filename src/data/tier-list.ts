export type Tier = "T1" | "T2" | "T3";

export interface TierDeck {
  rank: number;
  slug: string;
  nameEn: string;
  /** 中文名稱為盡力翻譯，人名部分若不確定官方譯名會保留原文，建議上線前人工核對一次。 */
  nameZh: string;
  points: number;
  share: number; // percentage, e.g. 49.22
  tier: Tier;
  sourceUrl: string;
}

export interface TierListMeta {
  format: string;
  formatLabel: string;
  source: string;
  sourceUrl: string;
  lastUpdated: string; // ISO date string
}

export const TIER_LABEL: Record<Tier, string> = {
  T1: "一線牌組",
  T2: "二線牌組",
  T3: "三線牌組",
};

export const TIER_DESC: Record<Tier, string> = {
  T1: "環境使用率 10% 以上，主流必備牌組",
  T2: "環境使用率 2%–10%，具備一定競爭力",
  T3: "環境使用率 2% 以下，較小眾或伺機而動的選擇",
};

function classify(share: number): Tier {
  if (share >= 10) return "T1";
  if (share >= 2) return "T2";
  return "T3";
}

export const tierListMeta: TierListMeta = {
  format: "TEF-CRI",
  formatLabel: "現行標準賽制（TEF–CRI）",
  source: "Limitless TCG",
  sourceUrl: "https://limitlesstcg.com/decks",
  lastUpdated: "2026-07-11",
};

interface RawDeck {
  rank: number;
  slug: string;
  nameEn: string;
  nameZh: string;
  points: number;
  share: number;
  sourceUrl: string;
}

const RAW_DECKS: RawDeck[] = [
  { rank: 1, slug: "dragapult-ex", nameEn: "Dragapult ex", nameZh: "多龍巴魯托 ex", points: 2227, share: 49.22, sourceUrl: "https://limitlesstcg.com/decks/284" },
  { rank: 2, slug: "n-zoroark-ex", nameEn: "N's Zoroark ex", nameZh: "N 的索羅亞克 ex", points: 363, share: 8.02, sourceUrl: "https://limitlesstcg.com/decks/320" },
  { rank: 3, slug: "crustle-rock-inn", nameEn: "Crustle Mysterious Rock Inn", nameZh: "岩殿居蟹・神秘岩石客棧", points: 278, share: 6.14, sourceUrl: "https://limitlesstcg.com/decks/341" },
  { rank: 4, slug: "slowking-seek-inspiration", nameEn: "Slowking Seek Inspiration", nameZh: "呆呆王・尋求靈感", points: 253, share: 5.59, sourceUrl: "https://limitlesstcg.com/decks/322" },
  { rank: 5, slug: "hydrapple-ex", nameEn: "Hydrapple ex", nameZh: "蘋裹龍 ex", points: 219, share: 4.84, sourceUrl: "https://limitlesstcg.com/decks/352" },
  { rank: 6, slug: "alakazam-powerful-hand", nameEn: "Alakazam Powerful Hand", nameZh: "胡地・強力手牌", points: 215, share: 4.75, sourceUrl: "https://limitlesstcg.com/decks/350" },
  { rank: 7, slug: "raging-bolt-ex", nameEn: "Raging Bolt ex", nameZh: "猛雷鼓 ex", points: 159, share: 3.51, sourceUrl: "https://limitlesstcg.com/decks/280" },
  { rank: 8, slug: "ogerpon-box", nameEn: "Ogerpon Box", nameZh: "厄鬼椪 Box", points: 144, share: 3.18, sourceUrl: "https://limitlesstcg.com/decks/339" },
  { rank: 9, slug: "lillie-clefairy-ex", nameEn: "Lillie's Clefairy ex", nameZh: "莉莉艾的皮皮 ex", points: 99, share: 2.19, sourceUrl: "https://limitlesstcg.com/decks/326" },
  { rank: 10, slug: "rocket-honchkrow", nameEn: "Rocket's Honchkrow", nameZh: "火箭隊的烏鴉頭頭", points: 97, share: 2.14, sourceUrl: "https://limitlesstcg.com/decks/356" },
  { rank: 11, slug: "festival-lead", nameEn: "Festival Lead", nameZh: "Dipplin／擊音猴・慶典先攻", points: 73, share: 1.61, sourceUrl: "https://limitlesstcg.com/decks/336" },
  { rank: 12, slug: "mega-lucario-ex", nameEn: "Mega Lucario ex", nameZh: "超級路卡利歐 ex", points: 66, share: 1.46, sourceUrl: "https://limitlesstcg.com/decks/345" },
  { rank: 13, slug: "rocket-mewtwo-ex", nameEn: "Rocket's Mewtwo ex", nameZh: "火箭隊的超夢 ex", points: 47, share: 1.04, sourceUrl: "https://limitlesstcg.com/decks/337" },
  { rank: 14, slug: "hop-trevenant", nameEn: "Hop's Trevenant", nameZh: "Hop 的不祥樹", points: 36, share: 0.80, sourceUrl: "https://limitlesstcg.com/decks/363" },
  { rank: 15, slug: "beedrill-ex", nameEn: "Beedrill ex", nameZh: "大針蜂 ex", points: 34, share: 0.75, sourceUrl: "https://limitlesstcg.com/decks/371" },
  { rank: 16, slug: "ethan-typhlosion", nameEn: "Ethan's Typhlosion", nameZh: "Ethan 的火暴獸", points: 28, share: 0.62, sourceUrl: "https://limitlesstcg.com/decks/333" },
  { rank: 17, slug: "cynthia-garchomp-ex", nameEn: "Cynthia's Garchomp ex", nameZh: "Cynthia 的烈咬陸鯊 ex", points: 25, share: 0.55, sourceUrl: "https://limitlesstcg.com/decks/332" },
  { rank: 18, slug: "metagross-metal-maker", nameEn: "Metagross Metal Maker", nameZh: "巨金怪・鋼鐵製造者", points: 21, share: 0.46, sourceUrl: "https://limitlesstcg.com/decks/361" },
  { rank: 19, slug: "mega-lopunny-ex", nameEn: "Mega Lopunny ex", nameZh: "超級長耳兔 ex", points: 19, share: 0.42, sourceUrl: "https://limitlesstcg.com/decks/353" },
  { rank: 20, slug: "marnie-grimmsnarl-ex", nameEn: "Marnie's Grimmsnarl ex", nameZh: "Marnie 的長毛巨魔 ex", points: 16, share: 0.35, sourceUrl: "https://limitlesstcg.com/decks/329" },
  { rank: 21, slug: "mega-starmie-ex", nameEn: "Mega Starmie ex", nameZh: "超級寶石海星 ex", points: 16, share: 0.35, sourceUrl: "https://limitlesstcg.com/decks/362" },
  { rank: 22, slug: "mega-greninja-ex", nameEn: "Mega Greninja ex", nameZh: "超級甲賀忍蛙 ex", points: 16, share: 0.35, sourceUrl: "https://limitlesstcg.com/decks/370" },
  { rank: 23, slug: "ogerpon-meganium", nameEn: "Ogerpon Meganium", nameZh: "厄鬼椪／大竺葵", points: 14, share: 0.31, sourceUrl: "https://limitlesstcg.com/decks/351" },
  { rank: 24, slug: "sylveon-safeguard", nameEn: "Sylveon Safeguard", nameZh: "仙子伊布・護盾", points: 11, share: 0.24, sourceUrl: "https://limitlesstcg.com/decks/373" },
  { rank: 25, slug: "archaludon-ex", nameEn: "Archaludon ex", nameZh: "波士可多拉 ex", points: 10, share: 0.22, sourceUrl: "https://limitlesstcg.com/decks/315" },
];

export const tierList: TierDeck[] = RAW_DECKS.map((d) => ({
  ...d,
  tier: classify(d.share),
}));

export function decksByTier(tier: Tier) {
  return tierList.filter((d) => d.tier === tier);
}
