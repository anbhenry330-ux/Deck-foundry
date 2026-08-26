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
        { qty: 4, nameEn: "Dreepy", set: "TWM", number: "128" },
        { qty: 4, nameEn: "Drakloak", set: "TWM", number: "129" },
        { qty: 2, nameEn: "Dragapult ex", set: "TWM", number: "130" },
        { qty: 2, nameEn: "Duskull", set: "PRE", number: "35" },
        { qty: 2, nameEn: "Dusclops", set: "PRE", number: "36" },
        { qty: 1, nameEn: "Dusknoir", set: "PRE", number: "37" },
        { qty: 1, nameEn: "Budew", set: "ASC", number: "16" },
        { qty: 1, nameEn: "Fezandipiti ex", set: "ASC", number: "142" },
        { qty: 1, nameEn: "Meowth ex", set: "POR", number: "62" },
        { qty: 1, nameEn: "Munkidori", set: "TWM", number: "95" },
      ],
    },
    {
      category: "訓練家卡",
      cards: [
        { qty: 4, nameEn: "Lillie's Determination", set: "MEG", number: "119" },
        { qty: 3, nameEn: "Crispin", set: "SCR", number: "133" },
        { qty: 2, nameEn: "Boss's Orders", set: "MEG", number: "114" },
        { qty: 1, nameEn: "Dawn", set: "PFL", number: "87" },
        { qty: 4, nameEn: "Ultra Ball", set: "MEG", number: "131" },
        { qty: 4, nameEn: "Poké Pad", set: "POR", number: "81" },
        { qty: 4, nameEn: "Buddy-Buddy Poffin", set: "TEF", number: "144" },
        { qty: 4, nameEn: "Crushing Hammer", set: "POR", number: "71" },
        { qty: 2, nameEn: "Night Stretcher", set: "ASC", number: "196" },
        { qty: 1, nameEn: "Unfair Stamp", set: "TWM", number: "165" },
        { qty: 1, nameEn: "Special Red Card", set: "CRI", number: "82" },
        { qty: 1, nameEn: "Handheld Fan", set: "TWM", number: "150" },
        { qty: 1, nameEn: "Team Rocket's Watchtower", set: "DRI", number: "180" },
        { qty: 1, nameEn: "Jamming Tower", set: "TWM", number: "153" },
      ],
    },
    {
      category: "能量卡",
      cards: [
        { qty: 3, nameEn: "Psychic Energy", set: "MEE", number: "5" },
        { qty: 3, nameEn: "Fire Energy", set: "MEE", number: "2" },
        { qty: 2, nameEn: "Darkness Energy", set: "MEE", number: "7" },
      ],
    },
  ],
  garchomp: [
    {
      category: "寶可夢",
      cards: [
        { qty: 4, nameEn: "Cynthia's Gible", set: "DRI", number: "102" },
        { qty: 4, nameEn: "Cynthia's Gabite", set: "DRI", number: "103" },
        { qty: 3, nameEn: "Cynthia's Garchomp ex", set: "DRI", number: "104" },
        { qty: 4, nameEn: "Cynthia's Roselia", set: "DRI", number: "7" },
        { qty: 4, nameEn: "Cynthia's Roserade", set: "DRI", number: "8" },
        { qty: 1, nameEn: "Cynthia's Spiritomb", set: "DRI", number: "129" },
      ],
    },
    {
      category: "訓練家卡",
      cards: [
        { qty: 4, nameEn: "Lillie's Determination", set: "MEG", number: "119" },
        { qty: 4, nameEn: "Boss's Orders", set: "MEG", number: "114" },
        { qty: 2, nameEn: "Colress's Tenacity", set: "SFA", number: "57" },
        { qty: 2, nameEn: "Team Rocket's Petrel", set: "DRI", number: "176" },
        { qty: 4, nameEn: "Poké Pad", set: "POR", number: "81" },
        { qty: 4, nameEn: "Buddy-Buddy Poffin", set: "TEF", number: "144" },
        { qty: 3, nameEn: "Fighting Gong", set: "MEG", number: "116" },
        { qty: 2, nameEn: "Night Stretcher", set: "ASC", number: "196" },
        { qty: 1, nameEn: "Switch", set: "MEG", number: "130" },
        { qty: 1, nameEn: "Pokégear 3.0", set: "SVI", number: "186" },
        { qty: 3, nameEn: "Cynthia's Power Weight", set: "DRI", number: "162" },
        { qty: 1, nameEn: "Forest of Vitality", set: "MEG", number: "117" },
        { qty: 1, nameEn: "Grand Tree", set: "SCR", number: "136" },
      ],
    },
    {
      category: "能量卡",
      cards: [
        { qty: 4, nameEn: "Fighting Energy", set: "MEE", number: "6" },
        { qty: 4, nameEn: "Rocky Fighting Energy", set: "POR", number: "87" },
      ],
    },
  ],
  "raging-bolt": [
    {
      category: "寶可夢",
      cards: [
        { qty: 3, nameEn: "Mega Kangaskhan ex", set: "MEG", number: "104" },
        { qty: 3, nameEn: "Meowth ex", set: "POR", number: "62" },
        { qty: 3, nameEn: "Teal Mask Ogerpon ex", set: "TWM", number: "25" },
        { qty: 2, nameEn: "Raging Bolt ex", set: "TEF", number: "123" },
        { qty: 2, nameEn: "Latias ex", set: "SSP", number: "76" },
        { qty: 1, nameEn: "Lillie's Clefairy ex", set: "JTG", number: "56" },
        { qty: 1, nameEn: "Wellspring Mask Ogerpon ex", set: "TWM", number: "64" },
        { qty: 1, nameEn: "Iron Leaves ex", set: "TEF", number: "25" },
        { qty: 1, nameEn: "Fezandipiti ex", set: "ASC", number: "142" },
        { qty: 1, nameEn: "Passimian", set: "SSP", number: "111" },
        { qty: 1, nameEn: "Chien-Pao", set: "SSP", number: "56" },
      ],
    },
    {
      category: "訓練家卡",
      cards: [
        { qty: 4, nameEn: "Crispin", set: "SCR", number: "133" },
        { qty: 2, nameEn: "Boss's Orders", set: "MEG", number: "114" },
        { qty: 2, nameEn: "Cyrano", set: "SSP", number: "170" },
        { qty: 1, nameEn: "Ciphermaniac's Codebreaking", set: "TEF", number: "145" },
        { qty: 1, nameEn: "Lillie's Determination", set: "MEG", number: "119" },
        { qty: 4, nameEn: "Ultra Ball", set: "MEG", number: "131" },
        { qty: 4, nameEn: "Energy Switch", set: "MEG", number: "115" },
        { qty: 2, nameEn: "Night Stretcher", set: "ASC", number: "196" },
        { qty: 2, nameEn: "Glass Trumpet", set: "SCR", number: "135" },
        { qty: 1, nameEn: "Unfair Stamp", set: "TWM", number: "165" },
        { qty: 4, nameEn: "Area Zero Underdepths", set: "SCR", number: "131" },
      ],
    },
    {
      category: "能量卡",
      cards: [
        { qty: 7, nameEn: "Grass Energy", set: "MEE", number: "1" },
        { qty: 2, nameEn: "Lightning Energy", set: "MEE", number: "4" },
        { qty: 2, nameEn: "Fighting Energy", set: "MEE", number: "6" },
        { qty: 2, nameEn: "Psychic Energy", set: "MEE", number: "5" },
        { qty: 1, nameEn: "Water Energy", set: "MEE", number: "3" },
      ],
    },
  ],
  "rocket-mewtwo": [
    {
      category: "寶可夢",
      cards: [
        { qty: 4, nameEn: "Team Rocket's Tarountula", set: "DRI", number: "19" },
        { qty: 4, nameEn: "Team Rocket's Spidops", set: "DRI", number: "20" },
        { qty: 2, nameEn: "Team Rocket's Mewtwo ex", set: "DRI", number: "81" },
        { qty: 2, nameEn: "Team Rocket's Mimikyu", set: "DRI", number: "87" },
        { qty: 2, nameEn: "Team Rocket's Articuno", set: "DRI", number: "51" },
        { qty: 1, nameEn: "Lillie's Clefairy ex", set: "JTG", number: "56" },
      ],
    },
    {
      category: "訓練家卡",
      cards: [
        { qty: 4, nameEn: "Lillie's Determination", set: "MEG", number: "119" },
        { qty: 4, nameEn: "Team Rocket's Ariana", set: "DRI", number: "171" },
        { qty: 3, nameEn: "Team Rocket's Giovanni", set: "DRI", number: "174" },
        { qty: 2, nameEn: "Team Rocket's Proton", set: "DRI", number: "177" },
        { qty: 1, nameEn: "Team Rocket's Petrel", set: "DRI", number: "176" },
        { qty: 4, nameEn: "Team Rocket's Transceiver", set: "DRI", number: "178" },
        { qty: 4, nameEn: "Ultra Ball", set: "MEG", number: "131" },
        { qty: 3, nameEn: "Night Stretcher", set: "ASC", number: "196" },
        { qty: 2, nameEn: "Bug Catching Set", set: "TWM", number: "143" },
        { qty: 1, nameEn: "Energy Switch", set: "MEG", number: "115" },
        { qty: 2, nameEn: "Lucky Helmet", set: "TWM", number: "158" },
        { qty: 1, nameEn: "Maximum Belt", set: "TEF", number: "154" },
        { qty: 2, nameEn: "Prism Tower", set: "CRI", number: "80" },
        { qty: 1, nameEn: "Team Rocket's Factory", set: "DRI", number: "173" },
      ],
    },
    {
      category: "能量卡",
      cards: [
        { qty: 6, nameEn: "Grass Energy", set: "MEE", number: "1" },
        { qty: 4, nameEn: "Team Rocket's Energy", set: "DRI", number: "182" },
        { qty: 1, nameEn: "Psychic Energy", set: "MEE", number: "5" },
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
  set: string,
  number: string,
  size: "XS" | "SM" | "MD" | "LG" = "MD"
) {
  const padded = number.padStart(3, "0");
  return `https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/${set}/${set}_${padded}_R_EN_${size}.png`;
}

export function deckCardGroupTotal(group: DeckCardGroup) {
  return group.cards.reduce((sum, c) => sum + c.qty, 0);
}
