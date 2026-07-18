export interface TierDeck {
  slug: string;
  nameZh: string;
  /** 牌組主要角色圖片，放在 public/decks 底下。 */
  image: string;
}

// 依屬性排列（由上而下）：龍系／電系／鬥系／草系／水系／惡系／超系／一般系／鋼系／火系
export const tierList: TierDeck[] = [
  // 龍系
  { slug: "dragapult-ex", nameZh: "其他多龍", image: "/decks/dragapult-ex.png" },
  { slug: "ground-dragapult", nameZh: "土龍多龍", image: "/decks/ground-dragapult.png" },
  { slug: "dragonite", nameZh: "快龍", image: "/decks/dragonite.png" },
  { slug: "blaziken-dragapult", nameZh: "火焰雞多龍", image: "/decks/blaziken-dragapult.png" },
  { slug: "raging-bolt", nameZh: "猛雷鼓", image: "/decks/raging-bolt.png" },
  { slug: "ghost-dragapult", nameZh: "魔靈多龍", image: "/decks/ghost-dragapult.png" },
  // 電系
  { slug: "zeraora", nameZh: "捷拉奧拉", image: "/decks/zeraora.png" },
  { slug: "mega-manectric", nameZh: "超級雷電獸", image: "/decks/mega-manectric.png" },
  { slug: "bellibolt", nameZh: "電肚蛙", image: "/decks/bellibolt.png" },
  // 鬥系
  { slug: "gou-zan-gou", nameZh: "夠讚狗", image: "/decks/gou-zan-gou.png" },
  { slug: "greninja", nameZh: "甲賀忍蛙", image: "/decks/greninja.png" },
  { slug: "lucario", nameZh: "路卡利歐", image: "/decks/lucario.png" },
  { slug: "garchomp", nameZh: "烈咬陸鯊", image: "/decks/garchomp.png" },
  { slug: "zygarde", nameZh: "基格爾德", image: "/decks/zygarde.png" },
  { slug: "fossil-box", nameZh: "化石", image: "/decks/fossil-box.png" },
  // 草系
  { slug: "beedrill-arboliva", nameZh: "大針鋒奧利瓦", image: "/decks/beedrill-arboliva.png" },
  { slug: "tera-box", nameZh: "太晶BOX", image: "/decks/tera-box.png" },
  { slug: "venusaur", nameZh: "妙蛙花", image: "/decks/venusaur.png" },
  { slug: "crustle", nameZh: "岩殿居蟹", image: "/decks/crustle.png" },
  { slug: "decidueye", nameZh: "狙射樹梟", image: "/decks/decidueye.png" },
  { slug: "clefairy-grass-box", nameZh: "皮皮草碰BOX", image: "/decks/clefairy-grass-box.png" },
  { slug: "festival-dance", nameZh: "祭典樂舞", image: "/decks/festival-dance.png" },
  { slug: "honey-serpent", nameZh: "蜜集大蛇", image: "/decks/honey-serpent.png" },
  // 水系
  { slug: "starmie-froslass", nameZh: "寶石海星雪妖女", image: "/decks/starmie-froslass.png" },
  { slug: "abomasnow", nameZh: "暴雪王", image: "/decks/abomasnow.png" },
  { slug: "froslass-lopunny", nameZh: "雪妖女長耳兔", image: "/decks/froslass-lopunny.png" },
  { slug: "cryogonal", nameZh: "冰岩怪", image: "/decks/cryogonal.png" },
  { slug: "relicanth", nameZh: "古空棘魚", image: "/decks/relicanth.png" },
  // 惡系
  { slug: "zoroark", nameZh: "索羅亞克", image: "/decks/zoroark.png" },
  { slug: "dark-box", nameZh: "惡BOX", image: "/decks/dark-box.png" },
  { slug: "grimmsnarl", nameZh: "長毛巨魔", image: "/decks/grimmsnarl.png" },
  { slug: "honchkrow", nameZh: "烏鴉頭頭", image: "/decks/honchkrow.png" },
  { slug: "darkrai", nameZh: "達克萊伊", image: "/decks/darkrai.png" },
  // 超系
  { slug: "hua-yin", nameZh: "化隱", image: "/decks/hua-yin.png" },
  { slug: "rocket-mewtwo", nameZh: "火箭隊超夢", image: "/decks/rocket-mewtwo.png" },
  { slug: "slowking", nameZh: "呆呆王", image: "/decks/slowking.png" },
  { slug: "alakazam", nameZh: "胡地", image: "/decks/alakazam.png" },
  { slug: "mega-diancie", nameZh: "超級蒂安西", image: "/decks/mega-diancie.png" },
  // 一般系
  { slug: "cinccino", nameZh: "奇諾栗鼠", image: "/decks/cinccino.png" },
  { slug: "lopunny", nameZh: "長耳兔", image: "/decks/lopunny.png" },
  // 鋼系
  { slug: "archaludon", nameZh: "鋁鋼橋龍", image: "/decks/archaludon.png" },
  { slug: "dragon-diglett", nameZh: "龍頭地鼠", image: "/decks/dragon-diglett.jpg" },
  { slug: "mega-metagross", nameZh: "超級巨金怪", image: "/decks/mega-metagross.png" },
  { slug: "zamazenta-trevenant", nameZh: "蒼響朽木妖", image: "/decks/zamazenta-trevenant.png" },
  { slug: "aegislash", nameZh: "雙劍鞘", image: "/decks/aegislash.png" },
  // 火系
  { slug: "ceruledge", nameZh: "蒼炎刃鬼", image: "/decks/ceruledge.png" },
];
