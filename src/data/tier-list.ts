export interface TierDeck {
  slug: string;
  nameZh: string;
  /** 牌組主要角色圖片，放在 public/decks 底下。 */
  image: string;
}

export const tierList: TierDeck[] = [
  { slug: "dragapult-ex", nameZh: "其他多龍", image: "/decks/dragapult-ex.png" },
  { slug: "hua-yin", nameZh: "化隱", image: "/decks/hua-yin.png" },
  { slug: "zoroark", nameZh: "索羅亞克", image: "/decks/zoroark.png" },
  { slug: "ground-dragapult", nameZh: "土龍多龍", image: "/decks/ground-dragapult.png" },
  { slug: "gou-zan-gou", nameZh: "夠讚狗", image: "/decks/gou-zan-gou.png" },
  { slug: "beedrill-arboliva", nameZh: "大針鋒奧利瓦", image: "/decks/beedrill-arboliva.png" },
  { slug: "tera-box", nameZh: "太晶BOX", image: "/decks/tera-box.png" },
  { slug: "cinccino", nameZh: "奇諾栗鼠", image: "/decks/cinccino.png" },
  { slug: "venusaur", nameZh: "妙蛙花", image: "/decks/venusaur.png" },
  { slug: "starmie-froslass", nameZh: "寶石海星雪妖女", image: "/decks/starmie-froslass.png" },
  { slug: "crustle", nameZh: "岩殿居蟹", image: "/decks/crustle.png" },
  { slug: "dragonite", nameZh: "快龍", image: "/decks/dragonite.png" },
  { slug: "dark-box", nameZh: "惡BOX", image: "/decks/dark-box.png" },
  { slug: "abomasnow", nameZh: "暴雪王", image: "/decks/abomasnow.png" },
  { slug: "blaziken-dragapult", nameZh: "火焰雞多龍", image: "/decks/blaziken-dragapult.png" },
  { slug: "rocket-mewtwo", nameZh: "火箭隊超夢", image: "/decks/rocket-mewtwo.png" },
  { slug: "decidueye", nameZh: "狙射樹梟", image: "/decks/decidueye.png" },
  { slug: "raging-bolt", nameZh: "猛雷鼓", image: "/decks/raging-bolt.png" },
  { slug: "greninja", nameZh: "甲賀忍蛙", image: "/decks/greninja.png" },
  { slug: "clefairy-grass-box", nameZh: "皮皮草碰BOX", image: "/decks/clefairy-grass-box.png" },
  { slug: "festival-dance", nameZh: "祭典樂舞", image: "/decks/festival-dance.png" },
  { slug: "slowking", nameZh: "呆呆王", image: "/decks/slowking.png" },
  { slug: "alakazam", nameZh: "胡地", image: "/decks/alakazam.png" },
  { slug: "honey-serpent", nameZh: "蜜集大蛇", image: "/decks/honey-serpent.png" },
  { slug: "lucario", nameZh: "路卡利歐", image: "/decks/lucario.png" },
  { slug: "archaludon", nameZh: "鋁鋼橋龍", image: "/decks/archaludon.png" },
  { slug: "grimmsnarl", nameZh: "長毛巨魔", image: "/decks/grimmsnarl.png" },
  { slug: "ghost-dragapult", nameZh: "魔靈多龍", image: "/decks/ghost-dragapult.png" },
  { slug: "dragon-diglett", nameZh: "龍頭地鼠", image: "/decks/dragon-diglett.jpg" },
];
