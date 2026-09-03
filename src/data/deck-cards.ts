/**
 * 完整 60 張構築卡表資料，用於牌組攻略頁的「可投入卡牌」逐卡展示區。
 *
 * 卡圖直接使用 Limitless TCG 的卡圖 CDN（與 tournament-results.ts 裡
 * decklistUrl 同一個資料來源站），不需要自行準備卡圖素材：
 *   https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/{SET}/{SET}_{NUMBER}_R_EN_{SIZE}.png
 * NUMBER 需補滿 3 碼（例如 16 -> 016），SIZE 可用 XS / SM / MD / LG。
 *
 * 目前僅收錄「魔靈多龍」作為範例，之後要擴充其他牌組時，比照同樣的
 * 陣列格式（依 Limitless TCG 賽事卡表 decklistUrl 轉錄）新增一筆即可。
 */

export type DeckCardCategory = "寶可夢" | "訓練家卡" | "能量卡";

export interface DeckCard {
  qty: number;
  nameEn: string;
  set: string;
  number: string;
  /**
   * 訓練家網站（asia.pokemon-card.com/tw）的卡片ID，若有填寫則卡圖優先
   * 顯示官方繁體中文版本；未填寫時 fallback 回 Limitless 的英文卡圖。
   */
  twId?: number;
}

export interface DeckCardGroup {
  category: DeckCardCategory;
  cards: DeckCard[];
}

export const deckCardLists: Record<string, DeckCardGroup[]> = {
  "ghost-dragapult": [
    {
      category: "寶可夢",
      cards: [
        { qty: 4, nameEn: "Dreepy", set: "TWM", number: "128", twId: 17017 },
        { qty: 4, nameEn: "Drakloak", set: "TWM", number: "129", twId: 17018 },
        { qty: 2, nameEn: "Dragapult ex", set: "TWM", number: "130", twId: 17019 },
        { qty: 2, nameEn: "Duskull", set: "PRE", number: "35", twId: 16779 },
        { qty: 2, nameEn: "Dusclops", set: "PRE", number: "36", twId: 16780 },
        { qty: 1, nameEn: "Dusknoir", set: "PRE", number: "37", twId: 16781 },
        { qty: 1, nameEn: "Budew", set: "ASC", number: "16", twId: 16254 },
        { qty: 1, nameEn: "Fezandipiti ex", set: "ASC", number: "142", twId: 19314 },
        { qty: 1, nameEn: "Meowth ex", set: "POR", number: "62", twId: 19362 },
        { qty: 1, nameEn: "Munkidori", set: "TWM", number: "95", twId: 19308 },
      ],
    },
    {
      category: "訓練家卡",
      cards: [
        { qty: 4, nameEn: "Lillie's Determination", set: "MEG", number: "119", twId: 19375 },
        { qty: 3, nameEn: "Crispin", set: "SCR", number: "133", twId: 17167 },
        { qty: 2, nameEn: "Boss's Orders", set: "MEG", number: "114", twId: 19630 },
        { qty: 1, nameEn: "Dawn", set: "PFL", number: "87", twId: 19303 },
        { qty: 4, nameEn: "Ultra Ball", set: "MEG", number: "131", twId: 19366 },
        { qty: 4, nameEn: "Poké Pad", set: "POR", number: "81", twId: 19548 },
        { qty: 4, nameEn: "Buddy-Buddy Poffin", set: "TEF", number: "144", twId: 19365 },
        { qty: 4, nameEn: "Crushing Hammer", set: "POR", number: "71", twId: 19269 },
        { qty: 2, nameEn: "Night Stretcher", set: "ASC", number: "196", twId: 19343 },
        { qty: 1, nameEn: "Unfair Stamp", set: "TWM", number: "165", twId: 17104 },
        { qty: 1, nameEn: "Special Red Card", set: "CRI", number: "82", twId: 19628 },
        { qty: 1, nameEn: "Handheld Fan", set: "TWM", number: "150", twId: 10509 },
        { qty: 1, nameEn: "Team Rocket's Watchtower", set: "DRI", number: "180", twId: 14849 },
        { qty: 1, nameEn: "Jamming Tower", set: "TWM", number: "153", twId: 10514 },
      ],
    },
    {
      category: "能量卡",
      cards: [
        { qty: 3, nameEn: "Psychic Energy", set: "MEE", number: "5", twId: 7819 },
        { qty: 3, nameEn: "Fire Energy", set: "MEE", number: "2", twId: 7816 },
        { qty: 2, nameEn: "Darkness Energy", set: "MEE", number: "7", twId: 7821 },
      ],
    },
  ],
  garchomp: [
    {
      category: "寶可夢",
      cards: [
        { qty: 4, nameEn: "Cynthia's Gible", set: "DRI", number: "102", twId: 14748 },
        { qty: 4, nameEn: "Cynthia's Gabite", set: "DRI", number: "103", twId: 14749 },
        { qty: 3, nameEn: "Cynthia's Garchomp ex", set: "DRI", number: "104", twId: 14750 },
        { qty: 4, nameEn: "Cynthia's Roselia", set: "DRI", number: "7", twId: 14669 },
        { qty: 4, nameEn: "Cynthia's Roserade", set: "DRI", number: "8", twId: 14670 },
        { qty: 1, nameEn: "Cynthia's Spiritomb", set: "DRI", number: "129", twId: 14768 },
      ],
    },
    {
      category: "訓練家卡",
      cards: [
        { qty: 4, nameEn: "Lillie's Determination", set: "MEG", number: "119", twId: 19375 },
        { qty: 4, nameEn: "Boss's Orders", set: "MEG", number: "114", twId: 19630 },
        { qty: 2, nameEn: "Colress's Tenacity", set: "SFA", number: "57", twId: 12620 },
        { qty: 2, nameEn: "Team Rocket's Petrel", set: "DRI", number: "176", twId: 14839 },
        { qty: 4, nameEn: "Poké Pad", set: "POR", number: "81", twId: 19548 },
        { qty: 4, nameEn: "Buddy-Buddy Poffin", set: "TEF", number: "144", twId: 19365 },
        { qty: 3, nameEn: "Fighting Gong", set: "MEG", number: "116", twId: 17125 },
        { qty: 2, nameEn: "Night Stretcher", set: "ASC", number: "196", twId: 19343 },
        { qty: 1, nameEn: "Switch", set: "MEG", number: "130", twId: 17134 },
        { qty: 1, nameEn: "Pokégear 3.0", set: "SVI", number: "186", twId: 17131 },
        { qty: 3, nameEn: "Cynthia's Power Weight", set: "DRI", number: "162", twId: 14822 },
        { qty: 1, nameEn: "Forest of Vitality", set: "MEG", number: "117", twId: 18412 },
        { qty: 1, nameEn: "Grand Tree", set: "SCR", number: "136", twId: 10996 },
      ],
    },
    {
      category: "能量卡",
      cards: [
        { qty: 4, nameEn: "Fighting Energy", set: "MEE", number: "6", twId: 7820 },
        { qty: 4, nameEn: "Rocky Fighting Energy", set: "POR", number: "87", twId: 18057 },
      ],
    },
  ],
  "raging-bolt": [
    {
      category: "寶可夢",
      cards: [
        { qty: 3, nameEn: "Mega Kangaskhan ex", set: "MEG", number: "104", twId: 19363 },
        { qty: 3, nameEn: "Meowth ex", set: "POR", number: "62", twId: 19362 },
        { qty: 3, nameEn: "Teal Mask Ogerpon ex", set: "TWM", number: "25", twId: 10430 },
        { qty: 2, nameEn: "Raging Bolt ex", set: "TEF", number: "123", twId: 17025 },
        { qty: 2, nameEn: "Latias ex", set: "SSP", number: "76", twId: 19333 },
        { qty: 1, nameEn: "Lillie's Clefairy ex", set: "JTG", number: "56", twId: 19329 },
        { qty: 1, nameEn: "Wellspring Mask Ogerpon ex", set: "TWM", number: "64", twId: 10452 },
        { qty: 1, nameEn: "Iron Leaves ex", set: "TEF", number: "25", twId: 18217 },
        { qty: 1, nameEn: "Fezandipiti ex", set: "ASC", number: "142", twId: 19314 },
        { qty: 1, nameEn: "Passimian", set: "SSP", number: "111", twId: 16878 },
        { qty: 1, nameEn: "Chien-Pao", set: "SSP", number: "56", twId: 14703 },
      ],
    },
    {
      category: "訓練家卡",
      cards: [
        { qty: 4, nameEn: "Crispin", set: "SCR", number: "133", twId: 17167 },
        { qty: 2, nameEn: "Boss's Orders", set: "MEG", number: "114", twId: 19630 },
        { qty: 2, nameEn: "Cyrano", set: "SSP", number: "170", twId: 11282 },
        { qty: 1, nameEn: "Ciphermaniac's Codebreaking", set: "TEF", number: "145", twId: 17169 },
        { qty: 1, nameEn: "Lillie's Determination", set: "MEG", number: "119", twId: 19375 },
        { qty: 4, nameEn: "Ultra Ball", set: "MEG", number: "131", twId: 19366 },
        { qty: 4, nameEn: "Energy Switch", set: "MEG", number: "115", twId: 17109 },
        { qty: 2, nameEn: "Night Stretcher", set: "ASC", number: "196", twId: 19343 },
        { qty: 2, nameEn: "Glass Trumpet", set: "SCR", number: "135", twId: 15963 },
        { qty: 1, nameEn: "Unfair Stamp", set: "TWM", number: "165", twId: 17104 },
        { qty: 4, nameEn: "Area Zero Underdepths", set: "SCR", number: "131", twId: 14844 },
      ],
    },
    {
      category: "能量卡",
      cards: [
        { qty: 7, nameEn: "Grass Energy", set: "MEE", number: "1", twId: 7815 },
        { qty: 2, nameEn: "Lightning Energy", set: "MEE", number: "4", twId: 7818 },
        { qty: 2, nameEn: "Fighting Energy", set: "MEE", number: "6", twId: 7820 },
        { qty: 2, nameEn: "Psychic Energy", set: "MEE", number: "5", twId: 7819 },
        { qty: 1, nameEn: "Water Energy", set: "MEE", number: "3", twId: 7817 },
      ],
    },
  ],
  "rocket-mewtwo": [
    {
      category: "寶可夢",
      cards: [
        { qty: 4, nameEn: "Team Rocket's Tarountula", set: "DRI", number: "19", twId: 14675 },
        { qty: 4, nameEn: "Team Rocket's Spidops", set: "DRI", number: "20", twId: 14676 },
        { qty: 2, nameEn: "Team Rocket's Mewtwo ex", set: "DRI", number: "81", twId: 14723 },
        { qty: 2, nameEn: "Team Rocket's Mimikyu", set: "DRI", number: "87", twId: 14739 },
        { qty: 2, nameEn: "Team Rocket's Articuno", set: "DRI", number: "51", twId: 14694 },
        { qty: 1, nameEn: "Lillie's Clefairy ex", set: "JTG", number: "56", twId: 19329 },
      ],
    },
    {
      category: "訓練家卡",
      cards: [
        { qty: 4, nameEn: "Lillie's Determination", set: "MEG", number: "119", twId: 19375 },
        { qty: 4, nameEn: "Team Rocket's Ariana", set: "DRI", number: "171", twId: 14836 },
        { qty: 3, nameEn: "Team Rocket's Giovanni", set: "DRI", number: "174", twId: 14838 },
        { qty: 2, nameEn: "Team Rocket's Proton", set: "DRI", number: "177", twId: 14840 },
        { qty: 1, nameEn: "Team Rocket's Petrel", set: "DRI", number: "176", twId: 14839 },
        { qty: 4, nameEn: "Team Rocket's Transceiver", set: "DRI", number: "178", twId: 14820 },
        { qty: 4, nameEn: "Ultra Ball", set: "MEG", number: "131", twId: 19366 },
        { qty: 3, nameEn: "Night Stretcher", set: "ASC", number: "196", twId: 19343 },
        { qty: 2, nameEn: "Bug Catching Set", set: "TWM", number: "143", twId: 10508 },
        { qty: 1, nameEn: "Energy Switch", set: "MEG", number: "115", twId: 17109 },
        { qty: 2, nameEn: "Lucky Helmet", set: "TWM", number: "158", twId: 10307 },
        { qty: 1, nameEn: "Maximum Belt", set: "TEF", number: "154", twId: 19370 },
        { qty: 2, nameEn: "Prism Tower", set: "CRI", number: "80", twId: 18500 },
        { qty: 1, nameEn: "Team Rocket's Factory", set: "DRI", number: "173", twId: 14850 },
      ],
    },
    {
      category: "能量卡",
      cards: [
        { qty: 6, nameEn: "Grass Energy", set: "MEE", number: "1", twId: 7815 },
        { qty: 4, nameEn: "Team Rocket's Energy", set: "DRI", number: "182", twId: 14853 },
        { qty: 1, nameEn: "Psychic Energy", set: "MEE", number: "5", twId: 7819 },
      ],
    },
  ],
  "starmie-froslass": [
    {
      category: "寶可夢",
      cards: [
        { qty: 3, nameEn: "Snorunt", set: "ASC", number: "46" },
        { qty: 2, nameEn: "Froslass", set: "TWM", number: "53" },
        { qty: 2, nameEn: "Mega Froslass ex", set: "ASC", number: "47" },
        { qty: 2, nameEn: "Staryu", set: "POR", number: "20" },
        { qty: 2, nameEn: "Mega Starmie ex", set: "POR", number: "21" },
        { qty: 3, nameEn: "Munkidori", set: "TWM", number: "95" },
        { qty: 2, nameEn: "Dunsparce", set: "JTG", number: "120" },
        { qty: 2, nameEn: "Dudunsparce", set: "TEF", number: "129" },
        { qty: 1, nameEn: "Dudunsparce ex", set: "JTG", number: "121" },
        { qty: 1, nameEn: "Budew", set: "ASC", number: "16" },
        { qty: 1, nameEn: "Meowth ex", set: "POR", number: "62" },
      ],
    },
    {
      category: "訓練家卡",
      cards: [
        { qty: 4, nameEn: "Lillie's Determination", set: "MEG", number: "119" },
        { qty: 2, nameEn: "Hilda", set: "WHT", number: "84" },
        { qty: 2, nameEn: "Boss's Orders", set: "MEG", number: "114" },
        { qty: 1, nameEn: "Crispin", set: "SCR", number: "133" },
        { qty: 1, nameEn: "Judge", set: "POR", number: "76" },
        { qty: 1, nameEn: "Wally's Compassion", set: "MEG", number: "132" },
        { qty: 1, nameEn: "Larry's Skill", set: "PRE", number: "115" },
        { qty: 4, nameEn: "Buddy-Buddy Poffin", set: "TEF", number: "144" },
        { qty: 4, nameEn: "Poké Pad", set: "POR", number: "81" },
        { qty: 3, nameEn: "Ultra Ball", set: "MEG", number: "131" },
        { qty: 2, nameEn: "Night Stretcher", set: "ASC", number: "196" },
        { qty: 1, nameEn: "Pokégear 3.0", set: "SVI", number: "186" },
        { qty: 1, nameEn: "Lucky Helmet", set: "TWM", number: "158" },
        { qty: 3, nameEn: "Risky Ruins", set: "MEG", number: "127" },
      ],
    },
    {
      category: "能量卡",
      cards: [
        { qty: 4, nameEn: "Water Energy", set: "MEE", number: "3" },
        { qty: 4, nameEn: "Darkness Energy", set: "MEE", number: "7" },
        { qty: 1, nameEn: "Legacy Energy", set: "TWM", number: "167" },
      ],
    },
  ],
  "gou-zan-gou": [
    {
      category: "寶可夢",
      cards: [
        { qty: 3, nameEn: "Okidogi", set: "TWM", number: "111" },
        { qty: 3, nameEn: "Solrock", set: "MEG", number: "75" },
        { qty: 2, nameEn: "Binacle", set: "POR", number: "42" },
        { qty: 2, nameEn: "Barbaracle", set: "POR", number: "43" },
        { qty: 2, nameEn: "Lunatone", set: "MEG", number: "74" },
        { qty: 1, nameEn: "Munkidori", set: "TWM", number: "95" },
        { qty: 1, nameEn: "Bloodmoon Ursaluna", set: "PRE", number: "54" },
        { qty: 1, nameEn: "Moltres", set: "PFL", number: "14" },
        { qty: 1, nameEn: "Cornerstone Mask Ogerpon ex", set: "TWM", number: "112" },
      ],
    },
    {
      category: "訓練家卡",
      cards: [
        { qty: 4, nameEn: "Lillie's Determination", set: "MEG", number: "119" },
        { qty: 3, nameEn: "Boss's Orders", set: "MEG", number: "114" },
        { qty: 3, nameEn: "Morty's Conviction", set: "TEF", number: "155" },
        { qty: 2, nameEn: "Tarragon", set: "POR", number: "85" },
        { qty: 4, nameEn: "Fighting Gong", set: "MEG", number: "116" },
        { qty: 4, nameEn: "Poké Pad", set: "POR", number: "81" },
        { qty: 2, nameEn: "Night Stretcher", set: "ASC", number: "196" },
        { qty: 2, nameEn: "Special Red Card", set: "CRI", number: "82" },
        { qty: 1, nameEn: "Energy Retrieval", set: "SVI", number: "171" },
        { qty: 1, nameEn: "Pokégear 3.0", set: "SVI", number: "186" },
        { qty: 2, nameEn: "Air Balloon", set: "ASC", number: "181" },
        { qty: 2, nameEn: "Battle Cage", set: "PFL", number: "85" },
      ],
    },
    {
      category: "能量卡",
      cards: [
        { qty: 9, nameEn: "Fighting Energy", set: "MEE", number: "6" },
        { qty: 4, nameEn: "Prism Energy", set: "ASC", number: "216" },
        { qty: 1, nameEn: "Legacy Energy", set: "TWM", number: "167" },
      ],
    },
  ],
};

export function getDeckCardList(slug: string): DeckCardGroup[] | undefined {
  return deckCardLists[slug];
}

export function cardImageUrl(
  card: DeckCard,
  size: "XS" | "SM" | "MD" | "LG" = "MD"
) {
  if (card.twId) {
    const twPadded = String(card.twId).padStart(8, "0");
    return `https://asia.pokemon-card.com/tw/card-img/tw${twPadded}.png`;
  }
  const padded = card.number.padStart(3, "0");
  return `https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/${card.set}/${card.set}_${padded}_R_EN_${size}.png`;
}

export function deckCardGroupTotal(group: DeckCardGroup) {
  return group.cards.reduce((sum, c) => sum + c.qty, 0);
}
