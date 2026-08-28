import { tierList } from "./tier-list";

export interface DeckGuide {
  /** 對應 tierList 的 slug。 */
  slug: string;
  /** 牌組定位標籤，例如「快攻型」「控場型」。 */
  archetype: string;
  /** 一句話的牌組打法概述。 */
  summary: string;
  /** 致勝關鍵，條列 2–4 點。 */
  winConditions: string[];
  /** 有利對局的牌組 slug（吃得動的牌組）。 */
  favorableSlugs: string[];
  /** 不利對局的牌組 slug（容易被剋制的牌組）。 */
  unfavorableSlugs: string[];
}

// 攻略內容依 tierList 屬性分組排序，方便跟索引頁比對維護。
// 招式／特性中文名稱為依實際玩法翻譯／整理而成，非官方正式譯名逐字引用。
export const deckGuides: DeckGuide[] = [
  // 龍系
  {
    slug: "dragapult-ex",
    archetype: "組合技型",
    summary:
      "多龍系統的標準構築，靠多隆多的特性【偵察指令】確保抽牌不斷，再用多龍ex的招式【幻影俯衝】同時傷害對手主戰場與備戰區，是彈性最高、不特化副攻手的基礎版本。",
    winConditions: [
      "優先展開多隆多與多龍ex，靠【偵察指令】翻牌找齊起手需要的道具與能量",
      "用【幻影俯衝】同時對主戰場與備戰區放置傷害指示物，逐步逼近多隻寶可夢的擊倒線",
      "構築彈性高，可視對手環境自由加減副攻手或功能卡因應不同對局",
    ],
    favorableSlugs: ["bellibolt", "mega-manectric"],
    unfavorableSlugs: ["garchomp", "raging-bolt"],
  },
  {
    slug: "ground-dragapult",
    archetype: "穩定續航型",
    summary:
      "在多龍核心中加入土龍節節，靠特性【落跑抽牌】反覆抽三張牌並把自己與所附卡片洗回牌庫，換取多龍系統中最高的抽牌穩定度與抗手牌干擾能力。",
    winConditions: [
      "用【落跑抽牌】不斷抽三張並回收自己，越用越穩、幾乎不會頓牌",
      "面對強制棄牌等手牌干擾支援卡時仍能維持節奏，是抗干擾度最高的多龍變體",
      "搭配【幻影俯衝】持續鋪傷害指示物，特別適合對付以基礎ex鋪場的牌組",
    ],
    favorableSlugs: ["rayquaza", "mega-kangaskhan"],
    unfavorableSlugs: ["garchomp", "lucario"],
  },
  {
    slug: "blaziken-dragapult",
    archetype: "能量加速型",
    summary:
      "加入烈焰雞ex的特性【沸騰鬥志】把棄牌堆的基本能量重新貼回場上，解決多龍原本能量成型慢的痛點，讓核心攻擊條件更快到位，原本就是為了打多龍鏡像戰而設計的構築。",
    winConditions: [
      "用【沸騰鬥志】把棄牌堆的基本能量撿回貼場，加速湊齊【幻影俯衝】的攻擊條件",
      "能量成型速度優於一般多龍構築，能提早展開傷害鋪面搶占場面優勢",
      "構築初衷即針對多龍鏡像戰設計，對上其他多龍變體時往往能後手反超",
    ],
    favorableSlugs: ["dragapult-ex", "ghost-dragapult"],
    unfavorableSlugs: ["garchomp", "cryogonal"],
  },
  {
    slug: "ghost-dragapult",
    archetype: "控場放置型",
    summary:
      "搭配夜巴薩進化線的特性【詛咒炸彈】提前在對手全場灑傷害指示物，再靠多龍ex的【幻影俯衝】把疊了指示物的目標一次擊殺，是多龍體系中最主流也最具爆發力的變體。",
    winConditions: [
      "【詛咒炸彈】持續在對手備戰區灑傷害指示物，墊高後續一擊必殺的門檻",
      "【幻影俯衝】同時傷害主戰場與備戰區，配合疊好的指示物常能一回合處理多隻寶可夢",
      "屬於環境採用率最高的多龍構築，練度與對策資訊最完整，適合作為入門版本",
    ],
    favorableSlugs: ["bellibolt", "festival-dance"],
    unfavorableSlugs: ["garchomp", "raging-bolt"],
  },
  {
    slug: "dragonite",
    archetype: "重擊終結型",
    summary:
      "由迷你龍、哈克龍一路進化到超級快龍ex，搭配火伊布ex加速能量，靠特性【天空搬運】讓超級快龍ex能反覆回收再部署，打出最高330傷害的重拳收尾。",
    winConditions: [
      "用火伊布ex的能量加速手段，讓迷你龍進化線快速湊出超級快龍ex所需能量",
      "特性【天空搬運】可讓超級快龍ex回收再上場，反覆觸發進場相關效果",
      "單次攻擊最高可達330傷害，足以一擊擊倒大多數ex等級的對手主力",
    ],
    favorableSlugs: ["cinccino", "toucannon"],
    unfavorableSlugs: ["zoroark", "raging-bolt"],
  },
  {
    slug: "raging-bolt",
    archetype: "後排核心型",
    summary:
      "以「猛雷鼓ex」為主軸，靠特性【雷龍的怒吼】把手牌能量瞬間貼滿，一次打出高額傷害壓制對手。",
    winConditions: [
      "先手優先找齊起手能量地形卡，第二回合就讓猛雷鼓ex具備攻擊條件",
      "利用地形卡與拳擊手套持續補牌，維持攻擊節奏不斷電",
      "後排備用一隻猛雷鼓ex，避免對手針對單隻主攻手就打斷輸出",
    ],
    favorableSlugs: ["mega-metagross", "aegislash"],
    unfavorableSlugs: ["zoroark", "grimmsnarl"],
  },
  // 電系
  {
    slug: "zeraora",
    archetype: "後期爆發型",
    summary:
      "前期用密勒頓做能量與場面鋪墊，後期換上超級捷拉奧拉ex用重砲攻擊直接收下對手殘血或高HP的主力，屬於典型的後段爆發終結者。",
    winConditions: [
      "前期靠密勒頓打底盤，避免超級捷拉奧拉ex過早上場被對手針對擊倒",
      "後期用超級捷拉奧拉ex的高傷害招式終結對手殘血或難處理的高HP主力",
      "命中後可將自己換回備戰區，降低反擊被擊倒的風險，但弱點為鬥屬性",
    ],
    favorableSlugs: ["wailord", "dragonite"],
    unfavorableSlugs: ["lucario", "garchomp"],
  },
  {
    slug: "mega-manectric",
    archetype: "快攻型",
    summary:
      "前期靠伊布進化線打低能量高效率的速攻，換上一階進化、免逃走能量的超級雷電獸ex後，招式傷害會依對手已被擊倒的數量放大，兼具速攻與後期斬殺力。",
    winConditions: [
      "前期以伊布進化線用單一能量打出高效率速攻，搶先清掉對手血量較低的基礎寶可夢",
      "超級雷電獸ex免逃走能量，可隨時上場銜接輸出而不拖慢節奏",
      "後期招式傷害隨對手已被擊倒數量提升，戰局拖越久輸出越誇張",
    ],
    favorableSlugs: ["cinccino", "mega-kangaskhan"],
    unfavorableSlugs: ["garchomp", "lucario"],
  },
  {
    slug: "bellibolt",
    archetype: "能量疊加型",
    summary:
      "電肚蛙ex靠招式【回充替換】退場的同時一口氣貼好多張基本能量，再用能量堆疊型招式打出隨附著能量數增加的傷害，走的是穩定堆能、後期發力的路線。",
    winConditions: [
      "【回充替換】讓電肚蛙ex退回備戰區同時貼好多張基本能量，省下後續補能時間",
      "傷害隨自身附著能量數量增加而提升，能量貼越多輸出越誇張",
      "屬於一階進化寶可夢，構築成本低、上場速度快，適合搭配抽牌卡拉高穩定度",
    ],
    favorableSlugs: ["slowking", "alakazam"],
    unfavorableSlugs: ["lucario", "garchomp"],
  },
  // 鬥系
  {
    slug: "lucario",
    archetype: "重擊型",
    summary:
      "超級路卡利歐ex靠【波動拳】僅用一個鬥能量就能幫備戰區大量貼好基本鬥能量，之後用高傷害招式一口氣終結對手主力，是HP340、能撐又能打的鬥系王牌。",
    winConditions: [
      "用【波動拳】以低成本幫備戰區下一隻攻擊手貼好能量，加快連續進攻速度",
      "HP高達340，前期不易被搶先擊倒，能撐到能量到位再反擊",
      "招式最高可打出270傷害，足以一擊擊倒大部分ex等級的對手",
    ],
    favorableSlugs: ["zeraora", "mega-manectric"],
    unfavorableSlugs: ["alakazam", "mega-diancie"],
  },
  {
    slug: "garchomp",
    archetype: "狙擊控場型",
    summary:
      "以希羅娜的沙鮫進化線為核心，靠特性快速搜出整條希羅娜系列卡片鋪場，再用邊攻擊邊抽牌的【螺旋俯衝】維持手牌，最後用高傷害招式終結對手，是公認能剋制多龍系牌組的鬥系代表。",
    winConditions: [
      "沙鮫的搜尋特性可連鎖找出整條希羅娜系列進化與支援卡，展開速度快又穩",
      "【螺旋俯衝】攻擊同時抽牌，避免中後期手牌枯竭",
      "高傷害終結招式對付以基礎ex鋪場的多龍系牌組特別有利，是多龍系統公認的剋星",
    ],
    favorableSlugs: ["dragapult-ex", "ghost-dragapult"],
    unfavorableSlugs: ["alakazam", "mega-diancie"],
  },
  {
    slug: "zygarde",
    archetype: "坦克重擊型",
    summary:
      "超級基格爾德ex以高HP搭配性價比極高的【蓋亞波動】穩定輸出，必要時可額外加速能量打出需求更重的終結大招一口氣清場，走的是硬碰硬的重坦克路線。",
    winConditions: [
      "高HP讓超級基格爾德ex前期能扛住對手的試探攻擊，不容易被搶先擊倒",
      "【蓋亞波動】只需3個能量即可打出200傷害，性價比高又穩定",
      "搭配額外能量加速手段，可打出需求更重的終結招式，一口氣扭轉戰局",
    ],
    favorableSlugs: ["toucannon", "cinccino"],
    unfavorableSlugs: ["alakazam", "zeraora"],
  },
  {
    slug: "gou-zan-gou",
    archetype: "中毒爆發型",
    summary:
      "透過惡系能量回收與加速手段快速幫夠讚狗貼滿惡能量提升體質，再主動讓自己中毒觸發【瘋狂連鎖】打出最高260傷害，非ex版本被擊倒只損失1張獎賞卡，獎賞交換極為划算。",
    winConditions: [
      "用惡系能量加速手段快速貼滿夠讚狗身上的惡能量，補齊體質與傷害加成條件",
      "主動讓夠讚狗中毒後，【瘋狂連鎖】可打出最高260傷害的爆發輸出",
      "主力多為非ex的夠讚狗，被擊倒只損失1張獎賞卡，獎賞交換效率遠優於一般ex主力",
    ],
    favorableSlugs: ["rayquaza", "mega-kangaskhan"],
    unfavorableSlugs: ["alakazam", "zeraora"],
  },
  {
    slug: "greninja",
    archetype: "控場型",
    summary:
      "由變刃蛙一路進化到超級甲賀忍蛙ex，靠特性【必殺手裏劍】每回合固定在對手全場灑傷害指示物，再依對手血量彈性切換招式收尾，屬於技巧向的控場牌組。",
    winConditions: [
      "【必殺手裏劍】每回合穩定在對手備戰區疊加傷害指示物，壓縮對手容錯空間",
      "進化線提供多種招式選擇，可依對手殘血彈性切換終結手段",
      "需要完整鋪好進化線才能發揮全部潛力，前期布局越扎實、後期控場越穩",
    ],
    favorableSlugs: ["honey-serpent", "festival-dance"],
    unfavorableSlugs: ["zygarde", "dragonite"],
  },
  {
    slug: "fossil-box",
    archetype: "封鎖控制型",
    summary:
      "用基拉祈或百變怪負責搜尋鋪場，靠卡拉波斯的特性【化石記憶】封鎖對手使用支援卡、再用歐姆多留在備戰區牽制對手的道具卡，最後讓化石翼龍穩定輸出收尾，主打非ex牌組帶來的獎賞交換優勢。",
    winConditions: [
      "卡拉波斯在場時特性【化石記憶】直接禁止對手使用支援卡，卡死對手節奏",
      "歐姆多只要留在備戰區就能封鎖對手的道具卡使用，雙重鎖場效果疊加",
      "隊伍多為非ex寶可夢，被擊倒只損失1張獎賞卡，獎賞交換上長期佔優",
    ],
    favorableSlugs: ["dragapult-ex", "zeraora"],
    unfavorableSlugs: ["garchomp", "raging-bolt"],
  },
  // 草系
  {
    slug: "venusaur",
    archetype: "耐久控場型",
    summary:
      "超級妙蛙花ex憑藉380高額HP與能自我回血的招式【叢林傾倒】，搭配特性【太陽能轉換】自由調度草能量，打出對手打不穿也拖不死的持久戰。",
    winConditions: [
      "特性【太陽能轉換】可自由搬動場上基本草能量，彈性補強任何一隻寶可夢的能量需求",
      "主力招式【叢林傾倒】造成傷害同時自我回復，削弱對手的擊殺效率",
      "另備全回復類支援卡，在瀕死前將HP打回全滿，把比賽拖入資源戰",
    ],
    favorableSlugs: ["cinccino", "zoroark"],
    unfavorableSlugs: ["ceruledge", "blaziken-dragapult"],
  },
  {
    slug: "decidueye",
    archetype: "狙擊控場型",
    summary:
      "狙射樹梟ex的招式不受戰鬥位置限制，能直接點名攻擊對手任意一隻寶可夢，搭配道具與回復手段邊拖邊清後排。",
    winConditions: [
      "招式可無視對手戰鬥寶可夢，直接指定狙殺後排的能量加速或特性核心",
      "搭配道具與回復支援卡，拉長狙射樹梟ex的存活時間",
      "進化路線精簡、能量需求低，能提早啟動狙擊節奏壓制對手佈局",
    ],
    favorableSlugs: ["slowking", "alakazam"],
    unfavorableSlugs: ["lucario", "zoroark"],
  },
  {
    slug: "honey-serpent",
    archetype: "能量爆發型",
    summary:
      "蜜集大蛇ex靠特性【熟成充能】把手牌草能量直接貼上場上寶可夢並附帶回血，再以能量數放大傷害的招式【蜜糖風暴】一次打出頂尖火力。",
    winConditions: [
      "特性【熟成充能】把手牌基本草能量貼到自家寶可夢並回復30HP，能量與續戰力雙補",
      "搭配歐加彭（綠色面具）的能量加速特性與抽牌道具，加速場面能量堆疊速度",
      "招式【蜜糖風暴】傷害隨貼附能量數暴增，能量堆滿即可一擊斬殺大型ex",
    ],
    favorableSlugs: ["mega-metagross", "aegislash"],
    unfavorableSlugs: ["grimmsnarl", "dark-box"],
  },
  {
    slug: "crustle",
    archetype: "高耐久控場型",
    summary:
      "岩殿居蟹靠特性【神秘岩窩】完全封鎖對手ex寶可夢造成的傷害，搭配超級袋獸ex的抽牌特性加速湊齊防守拼圖，打造滴水不漏的盤面。",
    winConditions: [
      "特性【神秘岩窩】讓對手的ex寶可夢攻擊完全無法造成傷害，直接鎖死多數主流ex輸出手段",
      "招式無視對手戰鬥寶可夢身上的效果直接造成傷害，突破對方的防禦手段",
      "搭配超級袋獸ex特性持續抽兩張牌，一邊防守一邊穩定培養後排岩殿居蟹",
    ],
    favorableSlugs: ["mega-metagross", "dragonite"],
    unfavorableSlugs: ["zoroark", "gou-zan-gou"],
  },
  {
    slug: "festival-dance",
    archetype: "連續攻擊型",
    summary:
      "利用場地卡【慶典會場】啟動特性【慶典樂舞】，讓寶可夢的招式能連續使用兩次，搭配依後排數量放大傷害的招式達成大量一擊雙殺。",
    winConditions: [
      "場地卡【慶典會場】在場時，持有特性【慶典樂舞】的寶可夢可連續使用兩次招式",
      "招式傷害隨自家後排寶可夢數量疊加，後排排滿傷害就非常驚人",
      "牌組內建強力檢索手段，能穩定找齊場地卡與關鍵拼圖，一旦發動就很難被打斷",
    ],
    favorableSlugs: ["toucannon", "bellibolt"],
    unfavorableSlugs: ["dark-box", "grimmsnarl"],
  },
  {
    slug: "beedrill-arboliva",
    archetype: "展開火力型",
    summary:
      "大針蜂ex負責前期快速鋪場與過渡輸出，奧利瓦ex進化後用可自由分配傷害的招式清理對手前後排，是速度與打點兼具的組合技牌組。",
    winConditions: [
      "配合場地卡加速進化，第二回合就能讓奧利瓦ex開始攻擊",
      "招式的傷害可自由分配給對手場上任一寶可夢，能集火收頭也能全場削弱",
      "利用抽牌寶可夢維持鋪場節奏，持續補充大針蜂的數量撐住場面",
    ],
    favorableSlugs: ["mega-kangaskhan", "wailord"],
    unfavorableSlugs: ["dragapult-ex", "zoroark"],
  },
  {
    slug: "tera-box",
    archetype: "組合技型",
    summary:
      "太晶BOX集合多款不同面具的歐加彭ex作為多面向攻擊手，依對手屬性弱點與場面需求切換面具應戰，是彈性極高的組合技牌組。",
    winConditions: [
      "綠色面具歐加彭ex的特性邊加能量邊抽牌，加速整體展開速度",
      "岩石面具歐加彭ex的特性能擋下對手特性寶可夢造成的傷害",
      "利用道具切換不同屬性歐加彭應戰，針對對手弱點打出最佳一擊",
    ],
    favorableSlugs: ["archaludon", "garchomp"],
    unfavorableSlugs: ["fossil-box", "cinccino"],
  },
  {
    slug: "clefairy-grass-box",
    archetype: "雙核心穩定型",
    summary:
      "以莉莉艾的皮皮ex與綠色面具歐加彭ex兩大攻擊手互相支援，牌組結構穩定、事故率低，是新手也能安心上手的均衡型構築。",
    winConditions: [
      "莉莉艾的皮皮ex提供穩定的前期壓制與後援，分擔歐加彭ex尚未成型時的輸出空缺",
      "歐加彭ex靠特性加速能量，成型後接手打出主力傷害",
      "兩大攻擊手互相掩護，即使其中一隻被擊倒也能無縫接軌維持攻勢",
    ],
    favorableSlugs: ["zeraora", "honchkrow"],
    unfavorableSlugs: ["ceruledge", "malamar"],
  },
  {
    slug: "golisopod",
    archetype: "快攻控場型",
    summary:
      "超級具甲武者ex用一點能量就能打出220傷害的重拳，搭配能鎖住對手逃跑的招式，以低成本高效率的攻勢壓制對手。",
    winConditions: [
      "主力招式僅需1能量即可打出220傷害，能量效率在環境中數一數二",
      "另一招式造成傷害同時鎖住對手戰鬥寶可夢的撤退，打亂對手節奏",
      "HP高達340，面對多數中型攻擊手都能站穩腳步持續反擊",
    ],
    favorableSlugs: ["archaludon", "aegislash"],
    unfavorableSlugs: ["blaziken-dragapult", "ceruledge"],
  },
  // 水系
  {
    slug: "abomasnow",
    archetype: "一擊必殺型",
    summary:
      "超級暴雪王ex靠招式打出誇張爆發傷害，搭配水君的招式把用過的能量送回牌庫重複利用，是高風險高回報的浪漫火力牌組。",
    winConditions: [
      "主力招式傷害隨貼附能量數大幅提升，能一擊擊倒大型ex",
      "水君招式把棄牌堆的基本能量洗回牌庫，讓能量補給不中斷",
      "犧牲一定穩定性換取極高的天花板傷害，適合搶攻型玩家打出奇襲",
    ],
    favorableSlugs: ["fossil-box", "zamazenta-trevenant"],
    unfavorableSlugs: ["zoroark", "dragapult-ex"],
  },
  {
    slug: "cryogonal",
    archetype: "磨牌控場型",
    summary:
      "冰岩怪的招式會磨掉牌庫數張並依基本水能量張數造成傷害，搭配水君的招式回收能量，靠磨牌與回收循環穩定輸出。",
    winConditions: [
      "主力招式磨掉牌庫數張，依其中基本水能量數量造成對應傷害",
      "水君招式把棄牌堆能量洗回牌庫，維持磨牌傷害的穩定輸出",
      "構築簡單、目標明確，能快速搜出關鍵拼圖並提早啟動攻勢",
    ],
    favorableSlugs: ["dragonite", "mega-metagross"],
    unfavorableSlugs: ["grimmsnarl", "dark-box"],
  },
  {
    slug: "relicanth",
    archetype: "快攻爆發型",
    summary:
      "古空棘魚的特性讓所有進化寶可夢都能使用進化前的招式，搭配大量化石寶可夢鋪場，第一時間打出高額傷害。",
    winConditions: [
      "特性讓進化寶可夢能重新使用進化前招式，擴充攻擊選項",
      "主力招式能在極早期就打出160以上傷害，配合道具還能再往上疊加",
      "牌組結構單純、化石寶可夢鋪場迅速，能比多數牌組更早進入攻擊節奏",
    ],
    favorableSlugs: ["slowking", "alakazam"],
    unfavorableSlugs: ["lucario", "zeraora"],
  },
  {
    slug: "starmie-froslass",
    archetype: "持續傷害型",
    summary:
      "超級寶石海星ex本身沒有特性、不受自家效果影響，搭配雪妖女的特性讓雙方持有特性的寶可夢每回合自動疊加傷害計數器，慢慢磨死對手。",
    winConditions: [
      "雪妖女特性在每回合寶可夢檢查時，為雙方擁有特性的寶可夢疊加傷害計數器",
      "超級寶石海星ex本身無特性、不受此效果影響，可安心站上戰鬥場持續施壓",
      "靠寶石海星ex的招式清理已被磨到殘血的目標，完成低成本擊殺",
    ],
    favorableSlugs: ["mega-diancie", "aegislash"],
    unfavorableSlugs: ["fossil-box", "gou-zan-gou"],
  },
  {
    slug: "froslass-lopunny",
    archetype: "組合技型",
    summary:
      "雪妖女長耳兔以超級雪妖女ex的招式依對手手牌張數放大傷害，搭配超級長耳兔ex的高速換人打法夾擊，牽制對手手牌同時保持攻擊節奏。",
    winConditions: [
      "主力招式傷害等於對手手牌張數乘以固定倍率，手牌越多打點越誇張",
      "利用道具或效果限制對手棄牌或迫使其留手牌，主動放大該招式的威力",
      "超級長耳兔ex以高頻換人與招式銜接輸出，填補雪妖女尚未成型的空檔",
    ],
    favorableSlugs: ["rayquaza", "toucannon"],
    unfavorableSlugs: ["fossil-box", "garchomp"],
  },
  {
    slug: "wailord",
    archetype: "耐久型",
    summary:
      "吼鯨王ex以380高額HP搭配重擊招式硬扛消耗戰，只要配好基本水能量就能持續輸出。",
    winConditions: [
      "基礎招式穩定打出120傷害，配好基本水能量後更可打出270重擊",
      "380的超高HP讓多數牌組難以一次擊倒，能反覆承受攻擊打持久戰",
      "搭配抽牌型輔助寶可夢維持手牌資源，穩紮穩打耗盡對手的攻勢",
    ],
    favorableSlugs: ["zoroark", "cinccino"],
    unfavorableSlugs: ["mega-metagross", "archaludon"],
  },
  // 惡系
  {
    slug: "zoroark",
    archetype: "快攻型",
    summary:
      "索羅亞克利用特性【暗黑爪痕】依棄牌堆張數放大傷害，搭配惡系加速手段，第二回合就能打出關鍵擊殺。",
    winConditions: [
      "開局盡快啟動棄牌堆，堆疊【暗黑爪痕】的傷害加成",
      "抓準時機優先擊殺對手的能量加速或特性核心，拖慢對手節奏",
      "牌組速度快、能量需求低，適合搶攻型的先攻策略",
    ],
    favorableSlugs: ["raging-bolt", "dragonite"],
    unfavorableSlugs: ["mega-metagross", "fossil-box"],
  },
  {
    slug: "dark-box",
    archetype: "組合技型",
    summary:
      "以顫弦蠑螈的特性穩定搜能量、疊傷害指示物，再依對手陣容彈性換上不同的惡系終結技各個擊破。",
    winConditions: [
      "顫弦蠑螈每回合可從牌庫搜1張基本惡能量貼到備戰區惡系寶可夢身上並重洗牌庫，同時在該寶可夢身上放置2個傷害指示物，兼顧能量加速與傷害鋪墊",
      "依照對手主力隨時換上不同的惡系攻擊手，避免被針對單一核心",
      "利用累積的傷害指示物，讓後續攻擊更容易補刀擊倒殘血寶可夢",
    ],
    favorableSlugs: ["alakazam", "rocket-mewtwo", "slowking"],
    unfavorableSlugs: ["garchomp", "lucario", "gou-zan-gou"],
  },
  {
    slug: "grimmsnarl",
    archetype: "控場型",
    summary:
      "瑪俐的長毛巨魔ex進化當回合觸發特性一口氣搜出大量惡能量，再用低費用的招式同時打擊戰鬥場與備戰區。",
    winConditions: [
      "進化成長毛巨魔ex時觸發特性，從牌庫最多取出5張基本惡能量貼到瑪俐系寶可夢身上，瞬間補滿能量",
      "招式的傷害隨自身附著的惡能量張數增加，堆好能量後能用極低費用打出高輸出",
      "攻擊同時波及對手備戰區，提前鋪墊之後的補刀擊殺",
    ],
    favorableSlugs: ["alakazam", "hua-yin", "slowking"],
    unfavorableSlugs: ["garchomp", "zygarde", "greninja"],
  },
  {
    slug: "darkrai",
    archetype: "爆發型",
    summary:
      "超級達克萊伊ex先讓對手陷入混亂，再靠只需1點惡能量的招式打出130傷害，並可在對手戰鬥寶可夢有特殊狀態時無視剩餘HP直接讓其昏厥。",
    winConditions: [
      "優先讓對手戰鬥寶可夢陷入混亂，鋪墊強制擊倒的條件",
      "只要對手戰鬥場處於特殊狀態，超級達克萊伊ex便能不看HP直接令其昏厥，形成一擊逆轉",
      "主力招式僅需1點惡能量即可打出130傷害，能量門檻低、上場速度快",
    ],
    favorableSlugs: ["mega-diancie", "slowking", "rocket-mewtwo"],
    unfavorableSlugs: ["zoroark", "greninja", "hua-yin"],
  },
  {
    slug: "honchkrow",
    archetype: "快攻型",
    summary:
      "火箭隊的烏鴉頭頭以非ex身分棄掉手牌中的火箭隊支援者卡換取高額傷害，棄得越多打得越痛，且被擊倒只損失1張獎賞卡。",
    winConditions: [
      "手牌囤積多張火箭隊支援者卡，回合一到就一次棄掉全數換取對應加成傷害",
      "非ex身分讓對手擊倒烏鴉頭頭只能拿1張獎賞卡，交換比對自己有利",
      "搭配其他火箭隊角色卡補手牌、找能量，讓攻擊能持續打出高傷害",
    ],
    favorableSlugs: ["mega-diancie", "alakazam", "rocket-mewtwo"],
    unfavorableSlugs: ["garchomp", "lucario", "fossil-box"],
  },
  {
    slug: "malamar",
    archetype: "控場型",
    summary:
      "超級卡拉瑪內羅ex能把對手備戰區的寶可夢強行拉上戰鬥位置，藉此提高後續招式傷害，逼對手用還沒準備好的寶可夢應戰。",
    winConditions: [
      "主動把對手尚未進化或能量不足的備戰寶可夢拉到戰鬥位置，打亂對手佈局",
      "配合場地卡對被拉出的寶可夢造成額外傷害，強化控場效果",
      "傷害隨被拉出的寶可夢數量疊加，讓中後期攻擊威力持續攀升",
    ],
    favorableSlugs: ["mega-diancie", "alakazam", "slowking"],
    unfavorableSlugs: ["garchomp", "zygarde", "greninja"],
  },
  // 超系
  {
    slug: "mega-diancie",
    archetype: "坦克型",
    summary:
      "超級蒂安希ex靠特性把受到的傷害固定減免30點，撐住場面後再用招式棄能量打出最高240點的爆發傷害收尾。",
    winConditions: [
      "傷害減免特性讓對手多數招式都難以一擊擊倒，藉此拉長比賽節奏",
      "主力招式可棄掉身上最多2張能量，每張換算120傷害，最高可打出240點終結對手",
      "高HP搭配傷害減免，讓超級蒂安希ex能長時間坐鎮戰鬥場消耗對手資源",
    ],
    favorableSlugs: ["garchomp", "lucario", "gou-zan-gou"],
    unfavorableSlugs: ["darkrai", "malamar", "dark-box"],
  },
  {
    slug: "slowking",
    archetype: "應變型",
    summary:
      "呆呆王棄掉牌庫頂1張卡，若翻到非規則寶可夢就能直接借用其招式，靠牌庫內容隨機應變打出各種效果。",
    winConditions: [
      "牌組內塞入多種強力非ex寶可夢作為可借用的「素材」，提高借到好招式的機率",
      "依對手場面彈性選擇要複製的招式，兼具狀態、控場、大傷害等多種選項",
      "打法變化多端不易被針對，能依牌局狀況隨機應變扭轉劣勢",
    ],
    favorableSlugs: ["garchomp", "lucario", "fossil-box"],
    unfavorableSlugs: ["dark-box", "grimmsnarl", "malamar"],
  },
  {
    slug: "alakazam",
    archetype: "後排核心型",
    summary:
      "胡地ex的招式即使待在備戰區也能出手，配合依對手備戰寶可夢數量疊加傷害的另一招式，讓對手難以鎖定真正的主攻手。",
    winConditions: [
      "把胡地ex安全放在備戰區持續打出120點傷害，前排交由其他寶可夢頂著",
      "對手展開越多備戰寶可夢，另一招式的傷害就越高，特別剋制愛鋪場的牌組",
      "攻擊手藏在後排，降低被對手集火擊倒、損失獎賞卡的風險",
    ],
    favorableSlugs: ["garchomp", "lucario", "gou-zan-gou"],
    unfavorableSlugs: ["dark-box", "grimmsnarl", "honchkrow"],
  },
  {
    slug: "hua-yin",
    archetype: "資源循環型",
    summary:
      "讓擁有特性【化隱】（不受對手招式效果影響）的詛咒娃娃等寶可夢輪流上場消耗，再用破破舵輪依棄牌堆中化隱寶可夢數量打出最高170點傷害終結戰局。",
    winConditions: [
      "讓詛咒娃娃等擁有【化隱】特性的寶可夢輪流上場、進場即用即棄，累積棄牌堆中化隱寶可夢的數量",
      "棄牌堆內化隱寶可夢達4張以上時，破破舵輪的招式傷害從30暴增到170點",
      "【化隱】讓前排寶可夢不受對手招式的狀態或附加效果影響，能穩定卡住依賴混亂、中毒等特殊狀態取勝的牌組",
    ],
    favorableSlugs: ["darkrai", "garchomp", "lucario"],
    unfavorableSlugs: ["dark-box", "grimmsnarl", "malamar"],
  },
  {
    slug: "rocket-mewtwo",
    archetype: "組合技型",
    summary:
      "火箭隊的超夢ex需要場上有4隻以上火箭隊寶可夢才能使出主力招式，換來的是可犧牲備戰能量疊加、最高280點的恐怖輸出。",
    winConditions: [
      "優先展開至少4隻火箭隊寶可夢，滿足主力招式的出招條件",
      "主力招式可棄掉最多2張備戰寶可夢身上的能量，每張額外增加60點傷害，最高可達280",
      "牌組內火箭隊角色卡彼此支援抽牌、找卡，讓場面展開速度與攻擊力同步提升",
    ],
    favorableSlugs: ["garchomp", "lucario", "fossil-box"],
    unfavorableSlugs: ["zoroark", "dark-box", "honchkrow"],
  },
  // 一般系
  {
    slug: "cinccino",
    archetype: "耐久消耗型",
    summary:
      "奇諾栗鼠ex靠特性有機率完全打空對手攻擊，同時用美他鋼提供的鋼能量加速餵飽自身攻擊，讓傷害隨附著能量數持續攀升。",
    winConditions: [
      "先靠美他鋼的特性把大量鋼能量一次貼上奇諾栗鼠ex，讓主力招式提早進入高傷害區間",
      "利用擋傷特性的機率拖長對戰節奏，逼對手打不掉一隻低費用的攻擊手",
      "超級袋獸ex可作副攻擊手與抽牌引擎，避免奇諾栗鼠ex被針對時牌組直接停轉",
    ],
    favorableSlugs: ["mega-metagross", "fossil-box"],
    unfavorableSlugs: ["garchomp", "zoroark"],
  },
  {
    slug: "lopunny",
    archetype: "快攻游擊型",
    summary:
      "超級長耳兔ex憑藉極低撤退費用與從後排跳上戰鬥場即可加成的招式，打帶跑式地反覆進場爆發傷害。",
    winConditions: [
      "利用氣球等撤退道具讓長耳兔頻繁換位，觸發從後排換上戰鬥場的額外傷害加成一次性擊倒對手主力",
      "次要招式無視對手戰鬥寶可夢身上的異常狀態與能力效果，專門用來解決難纏的牆型寶可夢",
      "搭配路卡利歐等打點加成卡與抽牌手段，維持每回合都能穩定攻擊",
    ],
    favorableSlugs: ["slowking", "hua-yin"],
    unfavorableSlugs: ["dragapult-ex", "alakazam"],
  },
  {
    slug: "mega-kangaskhan",
    archetype: "雙擊爆發型",
    summary:
      "超級袋獸ex一回合可連續使用兩次招式，讓所有一次性的打點強化與支援卡效果等同翻倍發揮。",
    winConditions: [
      "先用能量加速手段搶在早期回合內讓超級袋獸ex具備攻擊資格",
      "配合強化道具，讓雙重攻擊的加成效果疊加到最大",
      "利用連續兩次攻擊的特性搶快擊倒對手的攻擊核心，掌握場面節奏",
    ],
    favorableSlugs: ["aegislash", "archaludon"],
    unfavorableSlugs: ["raging-bolt", "mega-metagross"],
  },
  {
    slug: "rayquaza",
    archetype: "爆發核心型",
    summary:
      "超級烈空坐ex靠棄掉自身附著的火與雷能量、依棄掉數量乘算傷害的招式，一口氣打出遠超一般攻擊上限的高額傷害。",
    winConditions: [
      "依組合方向持續在盤面堆疊火／雷能量，準備隨時引爆大招",
      "盤面能量鋪好後把超級烈空坐ex放上戰鬥場，一次棄光能量打出足以擊倒二階進化ex的傷害",
      "備用第二隻超級烈空坐ex分擔風險，避免主攻手一被擊倒就被對手拿走三張獎賞",
    ],
    favorableSlugs: ["fossil-box", "wailord"],
    unfavorableSlugs: ["zoroark", "honchkrow"],
  },
  {
    slug: "toucannon",
    archetype: "後排鋪牌型",
    summary:
      "銃嘴大鳥利用自身特性持續補充手牌，並靠招式傷害隨後排寶可夢數量增加，把場面鋪滿後打出穩定又不容小覷的輸出。",
    winConditions: [
      "優先鋪滿後排寶可夢，讓招式傷害隨場上寶可夢數量疊加",
      "利用自身的持續抽牌特性避免中後期手牌枯竭，維持攻擊節奏不間斷",
      "作為一階進化寶可夢只讓對手拿一張獎賞，能承受被擊倒也不至於一次崩盤",
    ],
    favorableSlugs: ["fossil-box", "tera-box"],
    unfavorableSlugs: ["raging-bolt", "mega-metagross"],
  },
  // 鋼系
  {
    slug: "archaludon",
    archetype: "高耐久控場型",
    summary:
      "鋁鋼橋龍ex擁有全環境數一數二的高HP，靠特性把基本鋼能量從棄牌堆直接加速貼上自身，用超高耐久拖垮對手的攻勢。",
    winConditions: [
      "利用特性從棄牌堆回收鋼能量加速貼上鋁鋼橋龍ex，快速達成攻擊條件",
      "靠超高HP正面扛下對手主力攻擊，再用清除傷害指示物的支援者卡把承受的傷害歸零",
      "承受一擊後換上副攻擊手用高倍率招式打出爆發傷害進行反擊",
    ],
    favorableSlugs: ["cinccino", "zoroark"],
    unfavorableSlugs: ["lucario", "garchomp"],
  },
  {
    slug: "dragon-diglett",
    archetype: "高火力主軸型",
    summary:
      "超級龍頭地鼠ex以340高額HP和330傷害的重拳招式，配合美他鋼的能量加速持續碾壓對手的二階進化ex。",
    winConditions: [
      "用美他鋼特性把鋼能量快速貼滿，提早讓超級龍頭地鼠ex具備攻擊資格",
      "靠超高HP與滿額輸出正面壓過大多數二階進化ex的攻防數值",
      "當牌庫鋼能量枯竭時，利用能量回收類卡片把棄牌堆能量撿回，維持加速循環不斷電",
    ],
    favorableSlugs: ["mega-metagross", "aegislash"],
    unfavorableSlugs: ["zoroark", "raging-bolt"],
  },
  {
    slug: "mega-metagross",
    archetype: "無上限打點型",
    summary:
      "超級巨金怪ex的招式傷害隨自身附著的鋼能量數量無上限增加，能量堆得越多，火力就越誇張。",
    winConditions: [
      "持續在超級巨金怪ex身上疊加鋼能量，讓招式基礎傷害加上能量加成後遠超一般上限",
      "搭配高耐久支援手段（如高抗性道具、清傷害卡）拉長對戰時間換取疊能空間",
      "多能量疊加後一擊可洞穿大部分二階進化ex，適合作為後期收尾王牌",
    ],
    favorableSlugs: ["cinccino", "zoroark"],
    unfavorableSlugs: ["ceruledge", "lucario"],
  },
  {
    slug: "aegislash",
    archetype: "團隊增傷核心型",
    summary:
      "雙劍鞘的特性讓場上所有超系與鋼系寶可夢的招式對戰鬥場多打30點傷害，連自己都能吃到加成，變身全隊的傷害放大器。",
    winConditions: [
      "維持雙劍鞘留在場上，讓隊上超系、鋼系攻擊手的傷害都額外加成30點",
      "雙劍鞘自身在加成生效下也能單獨打出接近百傷害的輸出，兼具核心與攻擊手雙重角色",
      "搭配主流攻擊手組隊，用增傷效果縮短擊倒對手所需的回合數",
    ],
    favorableSlugs: ["archaludon", "fossil-box"],
    unfavorableSlugs: ["zoroark", "honchkrow"],
  },
  {
    slug: "zamazenta-trevenant",
    archetype: "組合技鎖鏈型",
    summary:
      "朽木妖以特性鎖住雙方的道具卡使用，讓依賴道具運轉的對手動彈不得，蒼響則憑藉不吃道具、傷害反彈型的攻擊手扛住並反擊對方主攻手。",
    winConditions: [
      "盡快讓朽木妖站上場，啟動道具鎖效果，癱瘓依賴道具抽牌、加速的對手牌組",
      "蒼響用不需仰賴道具即可運作的攻擊手身份持續施壓，即使道具鎖同時限制自己也不受影響",
      "利用蒼響招式的傷害反彈效果，逼對手不敢貿然用大傷害招式強攻，拖慢對手的擊倒節奏",
    ],
    favorableSlugs: ["zoroark", "dark-box"],
    unfavorableSlugs: ["raging-bolt", "fossil-box"],
  },
  // 火系
  {
    slug: "ceruledge",
    archetype: "棄牌堆爆發型",
    summary:
      "蒼炎刃鬼ex只需一顆能量即可攻擊，傷害隨棄牌堆中能量張數增加，棄牌堆能量越多、後期一擊蓋牌的機率就越高。",
    winConditions: [
      "透過博士研究、道具卡等手段盡快把能量送入棄牌堆，堆到十餘張時招式傷害可突破300",
      "牌組運作單純、僅需一階進化與少量能量即可攻擊，適合搶快建立節奏",
      "配合道具鎖手段，防止對手用道具型手段干擾自己的棄牌堆堆疊",
    ],
    favorableSlugs: ["fossil-box", "archaludon"],
    unfavorableSlugs: ["zoroark", "honchkrow"],
  },
];

export function getDeckGuide(slug: string): DeckGuide | undefined {
  return deckGuides.find((g) => g.slug === slug);
}

/** 依 tierList 的順序回傳「已收錄攻略」的牌組清單，用於索引頁排序顯示。 */
export function guidedDecks() {
  return tierList.filter((d) => deckGuides.some((g) => g.slug === d.slug));
}
