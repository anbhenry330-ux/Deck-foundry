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
// 招式／特性中文名稱、傷害數值等具體遊戲機制皆逐一比對官方卡表（asia.pokemon-card.com／
// pokemon-card.com）與 limitlesstcg.com、wiki.52poke.com 等來源查證後撰寫（2026-08-28），
// 非憑印象杜撰；少數尚無正式繁中譯名的最新卡片，以效果描述代替，不杜撰卡名。
export const deckGuides: DeckGuide[] = [
  // 龍系
  {
    slug: "dragapult-ex",
    archetype: "組合技型",
    summary:
      "多龍系統的標準構築，靠多龍多的特性【偵察指令】每回合翻開牌庫最上2張、留1張進手牌來持續換牌，再用多龍巴魯托ex的招式【幻影奇襲】打出200傷害並在對手備戰區灑6個傷害指示物，是彈性最高、不特化副攻手的基礎版本。",
    winConditions: [
      "多龍多的特性【偵察指令】翻牌庫最上2張、選1張進手牌，穩定換牌避免頓卡",
      "多龍巴魯托ex的【幻影奇襲】用1火+1超能量打出200傷害，同時在對手備戰區任意分配6個傷害指示物",
      "構築彈性高，可視對手環境自由加減副攻手或功能卡因應不同對局",
    ],
    favorableSlugs: ["bellibolt", "mega-manectric"],
    unfavorableSlugs: ["garchomp", "raging-bolt"],
  },
  {
    slug: "ground-dragapult",
    archetype: "穩定續航型",
    summary:
      "在多龍核心中加入非ex的土龍節節，靠特性【落跑抽牌】在自己回合限用一次、抽3張牌後把自己與所附卡片洗回牌庫，換取多龍系統中最高的抽牌穩定度與抗手牌干擾能力。",
    winConditions: [
      "【落跑抽牌】每回合抽3張牌並把自己洗回牌庫重新待命，維持手牌品質不頓卡",
      "土龍節節被洗回牌庫、不留在場上被擊倒，面對強制棄牌等干擾手段仍能維持節奏",
      "搭配【幻影奇襲】持續鋪傷害指示物，特別適合對付以基礎ex鋪場的牌組",
    ],
    favorableSlugs: ["rayquaza", "mega-kangaskhan"],
    unfavorableSlugs: ["garchomp", "lucario"],
  },
  {
    slug: "blaziken-dragapult",
    archetype: "能量加速型",
    summary:
      "加入烈焰雞ex的特性【沸騰鬥志】每回合可從棄牌堆選1張基本能量貼回場上任一寶可夢，解決多龍原本能量成型慢的痛點；烈焰雞ex本身的【灼熱擒抱】也能用1火+1無色打出200傷害應急，但出手後下回合無法再攻擊。",
    winConditions: [
      "【沸騰鬥志】每回合把棄牌堆的1張基本能量撿回貼場，加速湊齊【幻影奇襲】的攻擊條件",
      "烈焰雞ex的【灼熱擒抱】低費用打出200傷害，可在多龍ex尚未成型前頂替輸出",
      "構築初衷即針對多龍鏡像戰設計，對上其他多龍變體時往往能靠能量速度後手反超",
    ],
    favorableSlugs: ["dragapult-ex", "ghost-dragapult"],
    unfavorableSlugs: ["garchomp", "cryogonal"],
  },
  {
    slug: "ghost-dragapult",
    archetype: "特殊狀態控場型",
    summary:
      "搭配夜巴薩，其招式只需1超能量，只要對手主戰場正陷入特殊狀態，就能在對手備戰區任1隻寶可夢身上放置6個傷害指示物，需搭配牌組中能讓對手中毒、麻痺等特殊狀態的手段才能發動，再靠多龍巴魯托ex的【幻影奇襲】把疊好指示物的目標一次擊殺。",
    winConditions: [
      "先讓對手主戰場陷入特殊狀態，觸發夜巴薩的招式在對手備戰區集中疊放6個傷害指示物",
      "【幻影奇襲】同時傷害主戰場與備戰區，配合疊好的指示物常能一回合處理多隻寶可夢",
      "屬於多龍體系中較講究出牌順序的技巧型變體，需抓準時機才能打出最大效益",
    ],
    favorableSlugs: ["bellibolt", "festival-dance"],
    unfavorableSlugs: ["garchomp", "raging-bolt"],
  },
  {
    slug: "dragonite",
    archetype: "重擊終結型",
    summary:
      "由迷你龍、哈克龍一路進化到超級快龍ex，特性【天空搬運】讓你在自己回合把主戰場與1隻備戰寶可夢互換位置，方便閃避對手鎖定或換上剛準備好能量的攻擊手；主力招式棄掉自身2點能量即可打出330傷害的重拳收尾。",
    winConditions: [
      "用能量加速手段讓迷你龍進化線快速湊出超級快龍ex攻擊所需的3點能量（1水+2雷）",
      "特性【天空搬運】可讓超級快龍ex與備戰寶可夢互換上場，靈活調度前後排、閃避對手鎖定",
      "主力招式棄掉身上2點能量即可打出330傷害，足以一擊擊倒大多數ex等級的對手",
    ],
    favorableSlugs: ["cinccino", "toucannon"],
    unfavorableSlugs: ["zoroark", "raging-bolt"],
  },
  {
    slug: "raging-bolt",
    archetype: "能量清空爆發型",
    summary:
      "猛雷鼓ex沒有特性，改靠招式【爆裂咆哮】只需1能量就能棄掉整手牌、抽6張新手牌重整資源，等身上貼滿雷與格鬥能量後，再用【雷鳴怒吼】把身上的基本能量全部棄掉，每棄1張造成70傷害，能量貼得越多、一擊傷害越誇張。",
    winConditions: [
      "先靠【爆裂咆哮】（1能量）棄掉手牌、抽6張新牌，快速找齊能量與加速手段",
      "身上能量貼滿後，【雷鳴怒吼】（1雷+1格鬥）棄光自身能量，每張換算70傷害，能一擊洞穿大型ex",
      "後排備用第二隻猛雷鼓ex分攤風險，避免主攻手能量被打空後就無以為繼",
    ],
    favorableSlugs: ["mega-metagross", "aegislash"],
    unfavorableSlugs: ["zoroark", "grimmsnarl"],
  },
  // 電系
  {
    slug: "zeraora",
    archetype: "後期爆發型",
    summary:
      "前期用密勒頓的特性【串聯裝置】從牌庫直接搜出至多2隻基礎雷屬性寶可夢鋪好備戰區，必要時用【光子引爆】打出220傷害頂在前排消耗；後期換上超級捷拉奧拉ex，靠傷害隨附著雷能量倍增的招式收下對手主力，命中後可換回備戰區降低反擊風險，但弱點為鬥屬性且會被剋兩倍傷害。",
    winConditions: [
      "密勒頓的【串聯裝置】提前把雷屬性基礎寶可夢搜出鋪好場面，加速後續換將",
      "超級捷拉奧拉ex的傷害隨自身附著雷能量數量倍增，能量貼越多輸出越誇張",
      "另一招式可打出150傷害並直接把自己換回備戰區，降低被對手集火擊倒的風險",
    ],
    favorableSlugs: ["wailord", "dragonite"],
    unfavorableSlugs: ["lucario", "garchomp"],
  },
  {
    slug: "mega-manectric",
    archetype: "快攻型",
    summary:
      "超級雷電獸ex撤退費用為0，可隨時換位銜接輸出而不拖慢節奏；招式【霹靂射線】只需2雷能量就能打出120傷害並讓自己下回合免受基礎寶可夢攻擊的傷害，能量充足時可改用【狂暴轟炸】棄光自身能量打出最高330傷害的重拳，但弱點為鬥屬性。",
    winConditions: [
      "撤退費用為0，可隨時換上超級雷電獸ex銜接輸出、閃避對手集火",
      "【霹靂射線】低費用打出120傷害，同時讓自己下回合不受基礎寶可夢攻擊傷害",
      "能量充足時用【狂暴轟炸】棄光自身能量，最高可打出330傷害一擊擊倒大型ex",
    ],
    favorableSlugs: ["cinccino", "mega-kangaskhan"],
    unfavorableSlugs: ["garchomp", "lucario"],
  },
  {
    slug: "bellibolt",
    archetype: "能量佈署型",
    summary:
      "電肚蛙ex（艾莉業版本）的特性【電流佈陣】能在自己回合內不限次數把手牌基本雷能量貼到隊上同系列寶可夢身上，瞬間鋪好多隻攻擊手的能量；主力招式固定打出230傷害，但出手後下回合無法攻擊，需要輪流換上多隻電肚蛙維持攻勢。",
    winConditions: [
      "特性【電流佈陣】一回合內可反覆把手牌基本雷能量貼上場，快速把多隻攻擊手同時餵飽",
      "主力招式固定造成230傷害，輸出穩定不受場面能量多寡影響",
      "出手後下回合無法攻擊，牌組需準備第二、第三隻電肚蛙輪替，避免攻勢中斷",
    ],
    favorableSlugs: ["slowking", "alakazam"],
    unfavorableSlugs: ["lucario", "garchomp"],
  },
  // 鬥系
  {
    slug: "lucario",
    archetype: "重擊型",
    summary:
      "超級路卡利歐ex的招式【波動掌】只需1個鬥能量，就能把棄牌堆最多3張基本鬥能量貼到備戰區任一寶可夢身上，加快連續進攻的節奏；換上主戰場後用【超級破壞光】打出270傷害終結對手，但每次使用後下回合不能再用同招式，弱點為超能力屬性。",
    winConditions: [
      "【波動掌】用1個鬥能量就把棄牌堆最多3張基本鬥能量分配給備戰區攻擊手，加快連續進攻速度",
      "HP高達340，前期不易被搶先擊倒，能撐到能量到位再反擊",
      "【超級破壞光】需2個鬥能量、可打出270傷害，足以一擊擊倒大部分ex等級的對手",
    ],
    favorableSlugs: ["zeraora", "mega-manectric"],
    unfavorableSlugs: ["alakazam", "mega-diancie"],
  },
  {
    slug: "garchomp",
    archetype: "進化抽牌型",
    summary:
      "以希羅娜的圓陸鯊進化線為核心，尖牙陸鯊階段的特性【冠軍的召喚】能從牌庫搜出1張希羅娜系列卡片進手牌，展開速度快又穩；進化成烈咬陸鯊ex後，低費用招式攻擊同時把手牌補到6張，最後用棄光自身能量的重拳打出260傷害終結戰局。",
    winConditions: [
      "尖牙陸鯊的【冠軍的召喚】特性可搜出希羅娜系列卡片進手牌，展開速度快又穩",
      "【螺旋潛入】只需1鬥能量、造成100傷害並可把手牌補到6張，避免中後期手牌枯竭",
      "【龍破裂擊】用2鬥能量打出260傷害，雖打完會棄光自身能量，但足以終結大型ex",
    ],
    favorableSlugs: ["dragapult-ex", "ghost-dragapult"],
    unfavorableSlugs: ["venusaur", "golisopod"],
  },
  {
    slug: "zygarde",
    archetype: "重砲爆擊型",
    summary:
      "超級基格爾德ex沒有被動特性，改用招式硬碰硬：【蓋亞波動】3鬥能量打出200傷害並讓自己下回合少受30點傷害；能量充足時可改用【虛無歸零】對戰場上對手每隻寶可夢各丟一次硬幣，正面則造成150傷害，一次性掃過對手全場。",
    winConditions: [
      "高HP讓超級基格爾德ex前期能扛住對手的試探攻擊，不容易被搶先擊倒",
      "【蓋亞波動】3能量打出200傷害，攻擊後自己下回合還能少受30點傷害",
      "能量充足時可用【虛無歸零】對敵方每隻寶可夢各判定一次硬幣，正面造成150傷害，運氣好能一次性清場",
    ],
    favorableSlugs: ["toucannon", "cinccino"],
    unfavorableSlugs: ["venusaur", "honey-serpent"],
  },
  {
    slug: "gou-zan-gou",
    archetype: "惡能量強化型",
    summary:
      "非ex的夠讚狗是鬥屬性基礎寶可夢，特性【腎上腺力量】只要身上附有1張基本惡能量，自身HP上限就提升100點、攻擊對手主戰場也額外增加100傷害，讓原本僅70傷害的【好拳】變成170傷害的重拳；也可換上夠讚狗ex，用招式主動搜出惡能量貼上並讓自己中毒，換取中毒狀態下的額外傷害。",
    winConditions: [
      "想辦法讓夠讚狗附上1張基本惡能量，觸發【腎上腺力量】把HP拉到230、攻擊加傷100點",
      "【好拳】只需2鬥能量，附上惡能量後等同用低費用打出170傷害",
      "非ex的夠讚狗被擊倒只損失1張獎賞卡，獎賞交換效率優於一般ex主力",
    ],
    favorableSlugs: ["zeraora", "mega-manectric"],
    unfavorableSlugs: ["alakazam", "mega-diancie"],
  },
  {
    slug: "greninja",
    archetype: "控場型",
    summary:
      "由呱呱泡蛙、呱頭蛙一路進化到甲賀忍蛙，最終進化為超級甲賀忍蛙ex；靠特性【必殺手裏劍】棄掉1張基本水能量，直接在對手其中1隻寶可夢身上放置6個傷害指示物，再視情況用【忍者飛旋】回收自身水能量換取追加傷害收尾。",
    winConditions: [
      "特性【必殺手裏劍】每回合可棄1張基本水能量，指定對手1隻寶可夢放6個傷害指示物，持續墊高對手容錯空間",
      "【忍者飛旋】基礎120傷害，可選擇把身上1個水能量放回手牌換取+80傷害，最高可打到200點",
      "進化線齊全、能量需求單純，主打靠特性慢慢堆傷害、再一刀補殺的節奏",
    ],
    favorableSlugs: ["festival-dance", "tera-box"],
    unfavorableSlugs: ["zeraora", "mega-manectric"],
  },
  {
    slug: "fossil-box",
    archetype: "封鎖控制型",
    summary:
      "以戰槌龍ex為主要攻擊手，搭配鋼系的護城龍等化石寶可夢與場地卡加速化石道具卡登場，靠特性洗掉對手能量、用護城龍卡住低費攻擊手，最後用戰槌龍ex重拳終結。",
    winConditions: [
      "場地卡【化石採掘場】加速把「古老的○○化石」道具卡直接放上備戰區，解決化石寶可夢展開速度慢的老問題",
      "戰槌龍ex的特性【破壞頭錘】擲硬幣正面即可棄掉對手戰鬥寶可夢身上1個能量，搭配【亂暴錘】150傷害+下回合追加150傷害",
      "護城龍只要留在備戰區，己方寶可夢就不會受到附加能量2個以下的對手寶可夢招式傷害，卡死低費速攻牌組",
    ],
    favorableSlugs: ["zoroark", "bellibolt"],
    unfavorableSlugs: ["venusaur", "golisopod"],
  },
  // 草系
  {
    slug: "venusaur",
    archetype: "耐久控場型",
    summary:
      "超級妙蛙花ex以380高HP搭配特性【日光轉移】自由調度全場的基本草能量，用招式【叢林拋擲】打出240傷害同時回復自身30HP，打持久戰慢慢磨死對手。",
    winConditions: [
      "特性【日光轉移】在自己回合可無限次把場上任一隻寶可夢身上的基本草能量搬到其他寶可夢身上，靈活補強能量需求",
      "主力招式【叢林拋擲】需求4個草能量，造成240傷害並自我回復30HP，邊打邊補血",
      "380高HP加上回血循環，讓對手很難靠單次攻擊解決，適合拖長比賽消耗對手資源",
    ],
    favorableSlugs: ["cinccino", "zoroark"],
    unfavorableSlugs: ["ceruledge", "blaziken-dragapult"],
  },
  {
    slug: "decidueye",
    archetype: "狙擊控場型",
    summary:
      "狙射樹梟ex的特性【狙擊手之眼】在對手手牌剛好4張時，讓招式所需的無色能量全部視為已付；主招【粉碎箭】240傷害還會棄掉對手戰鬥寶可夢身上1個能量，慢慢破壞對手的能量部署節奏。",
    winConditions: [
      "特性【狙擊手之眼】抓準對手手牌恰好4張的時機，讓【粉碎箭】的無色能量需求全部消除",
      "【粉碎箭】240傷害並棄掉對手戰鬥寶可夢身上1個能量，一邊重擊一邊拖慢對手能量部署",
      "弱點只有火屬性、能量需求集中好湊齊，能穩定打出240傷害級別的重擊",
    ],
    favorableSlugs: ["mega-metagross", "cinccino"],
    unfavorableSlugs: ["ceruledge", "blaziken-dragapult"],
  },
  {
    slug: "honey-serpent",
    archetype: "能量爆發型",
    summary:
      "蜜集大蛇ex的特性【熟成充能】把手牌基本草能量貼上任一隻寶可夢並回復30HP，搭配厄鬼椪 碧草面具ex的特性【碧綠之舞】邊貼能量邊抽牌加速鋪場，最後用傷害隨自身草能量數增加的【蜜糖風暴】一次打出頂尖火力。",
    winConditions: [
      "特性【熟成充能】每回合把1張基本草能量從手牌貼到自家寶可夢身上，並讓該寶可夢回復30HP，能量與續戰力雙補",
      "厄鬼椪 碧草面具ex的特性【碧綠之舞】同樣可貼草能量並多抽1張牌，加速整體鋪能速度",
      "【蜜糖風暴】基礎30傷害＋自身所有草能量數×30，能量堆好即可一擊斬殺大型ex",
    ],
    favorableSlugs: ["mega-metagross", "aegislash"],
    unfavorableSlugs: ["ceruledge", "blaziken-dragapult"],
  },
  {
    slug: "crustle",
    archetype: "高耐久控場型",
    summary:
      "岩殿居蟹靠特性【神秘石居】讓自己完全不受對手「寶可夢ex」招式的傷害，招式【偉大剪】還無視對手戰鬥寶可夢身上的附加效果直接打出120傷害，搭配超級袋獸ex站上戰鬥場時特性【使者衝刺】抽2張卡加速培養後排。",
    winConditions: [
      "特性【神秘石居】讓岩殿居蟹完全不會被對手的ex寶可夢招式傷害，直接鎖死環境中大多數主流ex攻擊手",
      "【偉大剪】造成120傷害，且不計算對手戰鬥寶可夢身上的附加效果，能突破對方的防禦手段",
      "超級袋獸ex只要站在戰鬥場，每回合都能用特性【使者衝刺】抽2張牌，一邊守一邊穩定湊牌",
    ],
    favorableSlugs: ["mega-metagross", "dragonite"],
    unfavorableSlugs: ["zoroark", "gou-zan-gou"],
  },
  {
    slug: "festival-dance",
    archetype: "連續攻擊型",
    summary:
      "核心是持有特性【祭典樂舞】的裹蜜蟲，只要場上有場地卡「祭典會場」，就能把招式【朋友之環】連續使用兩次，該招式傷害等於己方備戰寶可夢數量×20，後排排滿即可打出可觀的連續傷害。",
    winConditions: [
      "場地卡「祭典會場」在場時，持有特性【祭典樂舞】的裹蜜蟲可連續使用兩次招式",
      "【朋友之環】只需1個草能量，傷害等於自己備戰寶可夢數量×20，後排排滿傷害就非常驚人，且能連打兩次",
      "牌組內建強力檢索手段，能穩定找齊場地卡與裹蜜蟲，一旦發動就很難被打斷",
    ],
    favorableSlugs: ["toucannon", "bellibolt"],
    unfavorableSlugs: ["ceruledge", "blaziken-dragapult"],
  },
  {
    slug: "beedrill-arboliva",
    archetype: "展開火力型",
    summary:
      "大針蜂ex只需1個草能量、傷害就等於自己場上大針蜂（含大針蜂ex）數量×110，越疊越多隻越致命；奧利瓦ex進化後則用最多選6次、每次20點傷害且可自由分配的招式清理對手前後排，是速度與打點兼具的組合技牌組。",
    winConditions: [
      "大針蜂ex【針蜂轟鳴】只需1個草能量，傷害＝自己場上大針蜂（含大針蜂ex）數量×110，疊到2隻以上就能一擊重創對手",
      "奧利瓦ex【油之機關槍】最多選對手寶可夢6次，每次20點傷害且不計算弱點抵抗力，能集火收頭也能全場削弱",
      "利用抽牌與搜尋手段維持鋪場節奏，持續補充大針蜂與奧利瓦ex的數量撐住場面",
    ],
    favorableSlugs: ["mega-kangaskhan", "wailord"],
    unfavorableSlugs: ["ceruledge", "blaziken-dragapult"],
  },
  {
    slug: "tera-box",
    archetype: "組合技型",
    summary:
      "太晶BOX（俗稱「太晶槍手」）以厄鬼椪 碧草面具ex的特性【碧綠之舞】負責能量加速與抽牌起手，再依對手屬性弱點混編多款太晶／面具ex攻擊手，逐場替換最剋的一張出戰。",
    winConditions: [
      "厄鬼椪 碧草面具ex的特性【碧綠之舞】每回合可貼1張草能量並多抽1張牌，加速整體展開",
      "厄鬼椪 礎石面具ex（太晶屬性）的特性【礎石之勢】讓自己完全不受對手持有特性的寶可夢招式傷害",
      "依對手主力屬性弱點，靈活切換不同太晶／面具ex應戰，幾乎對環境上位牌組都能找到有利的一張迎戰",
    ],
    favorableSlugs: ["archaludon", "garchomp"],
    unfavorableSlugs: ["fossil-box", "cinccino"],
  },
  {
    slug: "clefairy-grass-box",
    archetype: "雙核心穩定型",
    summary:
      "以莉莉艾的皮皮ex與厄鬼椪 碧草面具ex兩大攻擊手互相支援：皮皮ex的特性【妖精領域】把對手所有【龍】屬性寶可夢的弱點改成【超】，直接剋制多龍系環境，歐加彭系則負責能量加速與抽牌接手輸出。",
    winConditions: [
      "特性【妖精領域】讓對手場上所有【龍】屬性寶可夢的弱點全部變成【超】，是環境中對付多龍系牌組的天敵",
      "【滿月輪舞】只需2能量，傷害隨雙方備戰寶可夢數量增加，後期即可打出可觀傷害",
      "厄鬼椪 碧草面具ex的特性【碧綠之舞】加速能量並抽牌，成型後接手輸出，兩大核心互相掩護",
    ],
    favorableSlugs: ["dragapult-ex", "dragonite"],
    unfavorableSlugs: ["ceruledge", "malamar"],
  },
  {
    slug: "golisopod",
    archetype: "快攻控場型",
    summary:
      "超級具甲武者ex沒有特性，靠【致命刺擊】在對手戰鬥寶可夢已有傷害指示物時，只花1個草能量就能打出220傷害的重拳，另一招【四爪控制】則鎖住對手的撤退，配合340高HP站穩腳步反覆進攻。",
    winConditions: [
      "【致命刺擊】基礎60傷害，若對手戰鬥寶可夢身上已有傷害指示物則追加160點，僅需1個草能量即可湊到220傷害",
      "【四爪控制】3個無色能量造成160傷害，並讓中招的對手寶可夢下回合無法撤退，鎖死對方換人節奏",
      "HP高達340，面對多數中型攻擊手都能站穩腳步持續反擊",
    ],
    favorableSlugs: ["archaludon", "aegislash"],
    unfavorableSlugs: ["blaziken-dragapult", "ceruledge"],
  },
  // 水系
  {
    slug: "abomasnow",
    archetype: "磨牌爆發型",
    summary:
      "超級暴雪王ex的【山崩之錘】棄掉自己牌庫最上面6張卡，傷害等於其中基本水能量張數×100；【冰霜屏障】則以3個水能量打出200傷害並讓自己下回合少受30點傷害，是磨牌與硬度兼具的水系重炮。",
    winConditions: [
      "【山崩之錘】2個水能量即可發動，棄掉牌庫頂6張、依其中基本水能量張數×100造成傷害，能量比例越高爆發力越誇張",
      "【冰霜屏障】200傷害並自減下回合所受傷害30點，兼顧輸出與抗打",
      "搭配水君等能量回收手段，讓牌庫消耗與能量供應能長期維持",
    ],
    favorableSlugs: ["fossil-box", "zoroark"],
    unfavorableSlugs: ["archaludon", "mega-metagross"],
  },
  {
    slug: "cryogonal",
    archetype: "磨牌控場型",
    summary:
      "冰岩怪用【破冰重擊】只需1個水能量，棄掉牌庫頂6張、依其中基本水能量張數×60造成傷害，進化後段更有4能量固定160傷害的【霜擊】保底輸出，搭配水君回收能量循環，靠磨牌與能量回收穩定輸出。",
    winConditions: [
      "【破冰重擊】1個水能量即可發動，棄掉牌庫頂6張並依基本水能量張數×60造成傷害，能量比例越高打點越誇張",
      "【霜擊】需求4個能量、固定160傷害，作為磨牌數字不夠時的保底輸出手段",
      "水君能把自身水能量收回手牌重複利用，減少能量浪費，讓輸出循環更持久",
    ],
    favorableSlugs: ["dragonite", "fossil-box"],
    unfavorableSlugs: ["archaludon", "mega-metagross"],
  },
  {
    slug: "relicanth",
    archetype: "快攻爆發型",
    summary:
      "古空棘魚是水屬性的基礎寶可夢，主力招式只需1個無色能量，基礎10點傷害，並依備戰區內同為化石系列寶可夢的數量、每隻額外增加30點傷害，備戰區鋪滿5隻化石寶可夢時單次最高可打到160點，走的是幾乎不需進化、開局即可重擊的速攻路線。",
    winConditions: [
      "開局優先鋪好備戰區的化石系列寶可夢，讓招式的加成傷害盡快疊滿",
      "只需1個無色能量即可出招，幾乎不受能量卡短缺影響，能比多數牌組更早壓制對手",
      "全隊皆為基礎或1階進化的化石寶可夢，構築成本低、鋪場速度快，能搶在對手站穩腳步前結束戰鬥",
    ],
    favorableSlugs: ["slowking", "alakazam"],
    unfavorableSlugs: ["lucario", "zeraora"],
  },
  {
    slug: "starmie-froslass",
    archetype: "持續傷害型",
    summary:
      "超級寶石海星ex本身沒有特性、不受自身效果影響，招式【噴射打擊】以1個水能量就能同時對主戰場造成120點、對備戰區1隻寶可夢造成50點傷害；搭配雪妖女的特性【冰霜衣】在每次寶可夢檢查時為雙方所有具特性的寶可夢（雪妖女除外）各疊加1個傷害指示物，靠額外堆疊的傷害指示物加速收尾。",
    winConditions: [
      "雪妖女特性【冰霜衣】不需耗費行動，每回合結束時自動為雙方擁有特性的寶可夢疊加傷害指示物",
      "超級寶石海星ex本身無特性、不受此效果影響，可安心站上戰鬥場持續施壓",
      "【噴射打擊】同時傷害戰鬥場與備戰區，配合疊加的指示物常能一次逼近多隻寶可夢的擊倒線",
      "招式【星雲光束】3個無色能量造成210點傷害，且無視對手戰鬥寶可夢身上的附加效果，可突破部分防禦手段",
    ],
    favorableSlugs: ["mega-diancie", "aegislash"],
    unfavorableSlugs: ["fossil-box", "zoroark"],
  },
  {
    slug: "froslass-lopunny",
    archetype: "組合技型",
    summary:
      "超級雪妖女ex的招式【怨言】只需1個水能量，傷害等於對手手牌張數×50，對手手牌越多打點越誇張；超級長耳兔ex則靠【疾風直撞】在從備戰區換上戰鬥場的當回合額外增加170點傷害，兩隻ex交替上場，逼對手在留手牌與清空手牌之間兩難。",
    winConditions: [
      "【怨言】傷害隨對手手牌張數等比放大，越拖到後期、對手手牌越厚，一擊就越痛",
      "【純粹雪】3能量打出150傷害並使對手戰鬥寶可夢陷入睡眠，爭取喘息時間",
      "超級長耳兔ex只要當回合從備戰區換上戰鬥場，【疾風直撞】傷害從60直接跳到230，能隨時補位輸出",
    ],
    favorableSlugs: ["slowking", "hua-yin"],
    unfavorableSlugs: ["honchkrow", "rayquaza"],
  },
  {
    slug: "wailord",
    archetype: "耐久型",
    summary:
      "吼鯨王ex以380的超高HP搭配水屬性重擊招式，前期3個水能量即可穩定打出120點傷害，能量充足時可換上5能量、270點傷害的大招終結對手，但使出後自己會陷入睡眠，屬於用超高血量換取容錯空間的耐久打法。",
    winConditions: [
      "380的超高HP讓多數牌組難以一次擊倒，能反覆承受攻擊打持久戰",
      "前期3個水能量即可穩定打出120點傷害，維持基本節奏",
      "能量到位後5能量可打出270點重擊，雖使自己陷入睡眠，仍能換取巨大擊殺空間",
    ],
    favorableSlugs: ["zoroark", "cinccino"],
    unfavorableSlugs: ["zeraora", "mega-manectric"],
  },
  // 惡系
  {
    slug: "zoroark",
    archetype: "快攻型",
    summary:
      "索羅亞克只需1個惡能量的招式【意志劫持】，傷害等於對手備戰寶可夢數量×30，對手鋪場越滿打點越痛；副招【欺詐】3個無色能量即可直接借用對手戰鬥寶可夢的招式，構築簡單、能量門檻低，能量卡稀缺也能提早開始施壓。",
    winConditions: [
      "【意志劫持】只需1個惡能量，傷害隨對手備戰寶可夢數量倍增，克制愛鋪場的組合技牌組",
      "【欺詐】能直接借用對手戰鬥寶可夢的招式應急，牌組彈性高",
      "HP僅120、撤退費用僅1，能量需求低、行動靈活，適合搶攻型的先攻節奏",
    ],
    favorableSlugs: ["toucannon", "tera-box"],
    unfavorableSlugs: ["venusaur", "mega-diancie"],
  },
  {
    slug: "dark-box",
    archetype: "組合技型",
    summary:
      "以顫弦蠑螈的特性【惡棍衝天】每回合免費幫備戰區惡系寶可夢搜1張基本惡能量、加速能量成型，代價是該寶可夢會被放上2個傷害指示物；再依對手陣容彈性換上不同的惡系終結技各個擊破。",
    winConditions: [
      "顫弦蠑螈的特性【惡棍衝天】每回合可從牌庫搜1張基本惡能量貼到備戰區惡系寶可夢身上並重洗牌庫，加速能量成型，但該寶可夢會被放置2個傷害指示物，須注意血量管理",
      "依照對手主力隨時換上不同的惡系攻擊手，避免被針對單一核心",
      "能量加速換來的先手優勢，讓後排攻擊手能提早補位輸出",
    ],
    favorableSlugs: ["alakazam", "rocket-mewtwo", "slowking"],
    unfavorableSlugs: ["garchomp", "lucario", "gou-zan-gou"],
  },
  {
    slug: "grimmsnarl",
    archetype: "控場型",
    summary:
      "瑪俐的長毛巨魔ex從手牌進化上場時觸發特性【龐克練肌】，一口氣從牌庫最多取出5張基本惡能量貼給瑪俐系寶可夢，再用2惡能量、180傷害並額外波及對手備戰區1隻寶可夢30點的【暗影子彈】收割戰場。",
    winConditions: [
      "進化成長毛巨魔ex的當回合觸發【龐克練肌】，最多取出5張基本惡能量貼到瑪俐系寶可夢身上，瞬間補滿能量",
      "【暗影子彈】2個惡能量造成180傷害，同時波及對手備戰區1隻寶可夢30點傷害，兼顧主戰場清場與後排鋪墊",
      "HP高達320，前期不易被搶先擊倒，能穩定撐到能量成型後展開攻勢",
    ],
    favorableSlugs: ["alakazam", "hua-yin", "slowking"],
    unfavorableSlugs: ["garchomp", "zygarde", "greninja"],
  },
  {
    slug: "darkrai",
    archetype: "爆發型",
    summary:
      "超級達克萊伊ex先用招式【蠱惑】讓對手戰鬥寶可夢陷入混亂，此時只需1個惡能量的【腦核粉碎】就能打出130傷害；若對手戰鬥寶可夢身上已有2個以上傷害指示物，也可改用【嫉妒漩渦】以1個惡能量打出110傷害，特性更能在對手戰鬥寶可夢陷入特殊狀態時無視剩餘HP直接令其昏厥。",
    winConditions: [
      "優先用【蠱惑】讓對手戰鬥寶可夢陷入混亂，鋪墊後續強制擊倒的條件",
      "特性讓對手戰鬥寶可夢只要處於特殊狀態，就能不看HP直接令其昏厥，形成一擊逆轉",
      "【腦核粉碎】僅需1點惡能量即可打出130傷害，能量門檻低、上場速度快",
    ],
    favorableSlugs: ["mega-diancie", "slowking", "rocket-mewtwo"],
    unfavorableSlugs: ["zoroark", "greninja", "hua-yin"],
  },
  {
    slug: "honchkrow",
    archetype: "快攻型",
    summary:
      "火箭隊的烏鴉頭頭以非ex身分，靠招式【火箭羽毛】一次棄掉手牌中所有名稱含「火箭隊」的支援者卡，每棄1張造成60點傷害；副招【頭突】1惡2無色打出100點固定傷害作為備案，且對鬥屬性招式有-30抵抗力，被擊倒也只損失1張獎賞卡。",
    winConditions: [
      "手牌囤積多張「火箭隊」支援者卡，回合一到就一次棄掉全數換取每張60點的加成傷害",
      "非ex身分讓對手擊倒烏鴉頭頭只能拿1張獎賞卡，交換比對自己有利",
      "對鬥屬性招式具有-30抵抗力，面對鬥系重拳攻擊手格外耐打",
    ],
    favorableSlugs: ["lucario", "garchomp", "mega-diancie"],
    unfavorableSlugs: ["zeraora", "mega-manectric"],
  },
  {
    slug: "malamar",
    archetype: "鋪場剋星型",
    summary:
      "超級卡拉瑪內羅ex的其中一招只需2個惡能量，傷害等於對手備戰寶可夢數量×70點，對手鋪滿5隻備戰寶可夢時最高可達350點；備戰區較空時則可改用3惡能量、200點傷害並使對手戰鬥寶可夢混亂的招式維持攻勢，是專門修理愛鋪場組合技牌組的量傷剋星。",
    winConditions: [
      "主力招式傷害隨對手備戰寶可夢數量疊加，對手鋪場越滿、挨的傷害就越誇張，2能量最高可達350點",
      "對手備戰區空曠時可改用另一招式，3個惡能量打出200傷害並使對手戰鬥寶可夢陷入混亂，維持攻勢彈性",
      "針對愛用多隻寶可夢鋪場的組合技或BOX類牌組特別有壓制力",
    ],
    favorableSlugs: ["toucannon", "festival-dance"],
    unfavorableSlugs: ["ceruledge", "rayquaza"],
  },
  // 超系
  {
    slug: "mega-diancie",
    archetype: "坦克型",
    summary:
      "超級蒂安希ex靠特性【鑽石膜】把受到的招式傷害固定減免30點，撐住場面後再用【花冠射線】棄掉身上最多2張能量、每張換算120傷害收尾，最高可達240點。",
    winConditions: [
      "特性【鑽石膜】讓對手每次招式傷害固定減少30點，拉長比賽節奏、削弱對手的擊殺效率",
      "【花冠射線】可棄掉最多2張自身能量，每張換算120傷害，最高打出240點終結對手",
      "高HP搭配傷害減免，讓超級蒂安希ex能長時間坐鎮戰鬥場消耗對手資源",
    ],
    favorableSlugs: ["garchomp", "lucario", "gou-zan-gou"],
    unfavorableSlugs: ["darkrai", "malamar", "dark-box"],
  },
  {
    slug: "slowking",
    archetype: "應變型",
    summary:
      "呆呆王的招式【耀閃挑戰】丟棄自己牌庫最上方1張卡，若翻到的是沒有規則文字的一般寶可夢卡，就能直接借用該寶可夢的1個招式；另一招式【超念力】2超能力1無色可穩定打出120傷害作為備案。",
    winConditions: [
      "牌組內塞入多種強力非ex寶可夢作為可借用的「素材」，提高翻到好招式的機率",
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
      "胡地ex的招式【維度之手】即使待在備戰區也能出手，2個超能力打出120點傷害；另一招式【意志劫持】2個無色能量即可造成90點加上對手備戰寶可夢數量×30點傷害，讓對手難以鎖定真正的主攻手。",
    winConditions: [
      "把胡地ex安全放在備戰區，靠【維度之手】持續打出120點傷害，前排交由其他寶可夢頂著",
      "對手展開越多備戰寶可夢，【意志劫持】的傷害就越高，特別剋制愛鋪場的牌組",
      "攻擊手藏在後排，降低被對手集火擊倒、損失獎賞卡的風險",
    ],
    favorableSlugs: ["garchomp", "lucario", "gou-zan-gou"],
    unfavorableSlugs: ["dark-box", "grimmsnarl", "honchkrow"],
  },
  {
    slug: "hua-yin",
    archetype: "資源循環型",
    summary:
      "讓擁有特性【化隱】（不受對手招式與特性效果影響）的詛咒娃娃、怨影娃娃等寶可夢輪流上場消耗，再用破破舵輪的招式依棄牌堆中化隱寶可夢的數量放大傷害，只需1點超能量就能打出170點傷害終結戰局。",
    winConditions: [
      "讓詛咒娃娃、怨影娃娃等擁有【化隱】特性的寶可夢輪流上場、消耗後進入棄牌堆，逐步累積棄牌堆中化隱寶可夢的數量",
      "棄牌堆內化隱寶可夢達4張以上時，破破舵輪只需1點超能量即可把招式傷害拉高到170點",
      "【化隱】讓場上寶可夢不受對手招式與特性附加效果影響，能穩定卡住需要先讓對手陷入特殊狀態才能生效的終結手段",
    ],
    favorableSlugs: ["darkrai", "starmie-froslass", "wailord"],
    unfavorableSlugs: ["malamar", "mega-metagross", "rayquaza"],
  },
  {
    slug: "rocket-mewtwo",
    archetype: "組合技型",
    summary:
      "火箭隊的超夢ex需要場上有4隻以上火箭隊寶可夢，特性【動力節省】才會解鎖招式使用資格，換來的是可犧牲備戰寶可夢能量疊加、最高280點的恐怖輸出。",
    winConditions: [
      "優先展開至少4隻火箭隊寶可夢，滿足特性【動力節省】開放招式的出招條件",
      "招式【消除球】基礎160傷害，可棄掉最多2張備戰寶可夢身上的能量，每張額外增加60點傷害，最高可達280",
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
      "奇諾栗鼠ex靠特性【滑順披風】在受到招式傷害時擲硬幣，正面就完全不受傷害，同時用美他鋼特性提供的鋼能量餵飽自己，讓招式傷害隨附著能量數持續攀升。",
    winConditions: [
      "先靠美他鋼的特性【鋼鐵製造】把大量基本鋼能量貼上奇諾栗鼠ex，讓招式提早進入高輸出區間",
      "特性【滑順披風】擲硬幣正面即可完全免疫該次招式傷害，拖長對戰節奏、逼對手打不掉一隻低費用的攻擊手",
      "招式傷害等於自身附著能量數×40且沒有上限，能量堆好後可一口氣洞穿大部分ex等級的對手",
    ],
    favorableSlugs: ["mega-metagross", "archaludon"],
    unfavorableSlugs: ["lopunny", "zoroark"],
  },
  {
    slug: "lopunny",
    archetype: "快攻游擊型",
    summary:
      "超級長耳兔ex憑藉招式【疾風擊】從備戰區換上戰鬥場時的高額加成，以及能無視對手戰鬥寶可夢身上效果的【尖刺跳躍】，打帶跑式地反覆進場爆發傷害。",
    winConditions: [
      "當回合若從備戰區換上戰鬥場，【疾風擊】可在基礎60傷害上再追加170點，合計最高230點",
      "【尖刺跳躍】固定造成160點傷害，且傷害計算無視對手戰鬥寶可夢身上的效果，能打穿仰賴傷害減免或狀態保護的對手",
      "搭配路卡利歐等打點加成卡與抽牌手段，維持每回合都能穩定攻擊",
    ],
    favorableSlugs: ["cinccino", "mega-diancie"],
    unfavorableSlugs: ["mega-metagross", "dragon-diglett"],
  },
  {
    slug: "mega-kangaskhan",
    archetype: "運氣爆發型",
    summary:
      "超級袋獸ex靠特性【跑腿衝刺】站上戰鬥場時每回合抽2張牌維持手牌資源，招式【機槍連段】則不斷擲硬幣、正面越多追加傷害越誇張，是抽牌引擎與賭博式爆發傷害兼具的一般系代表。",
    winConditions: [
      "【跑腿衝刺】只要站在戰鬥場，每回合可用一次抽2張牌，維持手牌深度",
      "【機槍連段】基礎傷害之外持續擲硬幣，正面每次追加50點傷害，運氣好時能一口氣打出遠超一般上限的傷害",
      "300的高HP讓超級袋獸ex能撐過對手前期試探攻擊，等待追加傷害的期望值拉高再出手",
    ],
    favorableSlugs: ["aegislash", "archaludon"],
    unfavorableSlugs: ["mega-metagross", "dragon-diglett"],
  },
  {
    slug: "rayquaza",
    archetype: "能量爆發型",
    summary:
      "超級烈空坐ex的特性能在從手牌放上備戰區時先幫自己夾帶1張基本能量，主力招式【風暴綠寶石】則計算自己場上「所有」寶可夢身上的能量總數，每個能量放大50點傷害，能量鋪得越滿、一擊就越誇張。",
    winConditions: [
      "上場時觸發特性，讓超級烈空坐ex一開局就能預先取得1張基本能量，加快起手速度",
      "持續在盤面各隻寶可夢身上鋪好能量，【風暴綠寶石】依全場（不只自己）附著能量總數×50計算傷害，鋪好能量後可一口氣擊倒二階進化ex等級的對手",
      "備用第二隻超級烈空坐ex分擔風險，避免主攻手一被擊倒就被對手拿走三張獎賞",
    ],
    favorableSlugs: ["fossil-box", "wailord"],
    unfavorableSlugs: ["zoroark", "honchkrow"],
  },
  {
    slug: "toucannon",
    archetype: "後排鋪牌型",
    summary:
      "銃嘴大鳥靠特性【天空抽牌】每回合抽1張牌維持手牌，招式【羽翼亂舞】的傷害則依雙方場上備戰寶可夢的合計數量放大，常搭配能把備戰區上限拉大的場地卡把場面鋪好再出手。",
    winConditions: [
      "配合能擴充備戰區上限的場地卡把雙方備戰寶可夢數量一起衝高，讓【羽翼亂舞】的基礎60傷害疊加可觀的追加傷害",
      "利用特性【天空抽牌】每回合固定抽1張牌，維持鋪場與後續攻擊所需的手牌資源",
      "屬於非ex的二階進化寶可夢，被擊倒仍只讓對手拿1張獎賞，是牌組在獎賞交換上的重要優勢",
    ],
    favorableSlugs: ["fossil-box", "tera-box"],
    unfavorableSlugs: ["raging-bolt", "mega-metagross"],
  },
  // 鋼系
  {
    slug: "archaludon",
    archetype: "高耐久控場型",
    summary:
      "鋁鋼橋龍ex擁有環境中名列前茅的高額HP，特性【合金構築】能在從手牌上場進化時把棄牌堆的基本能量加速貼回場上任一寶可夢，招式【金屬防衛者】則讓自己下一回合不受弱點影響，兼顧耐久與續戰力。",
    winConditions: [
      "進化上場鋁鋼橋龍ex時觸發特性【合金構築】，一次把棄牌堆最多2張基本能量加速貼回場上寶可夢，補強能量成型速度",
      "300的高HP讓對手難以一擊擊倒，能撐過前期試探攻擊、等待能量與場面到位",
      "招式【金屬防衛者】造成220傷害的同時，讓自己下一個對手回合不受弱點影響，削弱天敵屬性的追擊效率",
    ],
    favorableSlugs: ["cinccino", "toucannon"],
    unfavorableSlugs: ["lucario", "garchomp"],
  },
  {
    slug: "dragon-diglett",
    archetype: "高火力主軸型",
    summary:
      "超級龍頭地鼠ex以340的高額HP和最高330傷害的招式【極限鑽】正面碾壓對手，配合美他鋼特性【鋼鐵製造】的能量加速，是鋼系陣營中少數能又扛又打的二階進化ex。",
    winConditions: [
      "用美他鋼的特性把鋼能量快速貼上，讓超級龍頭地鼠ex提早具備招式所需的3點鋼能量",
      "招式【極限鑽】基礎200傷害，只要身上能量比招式需求多2個即可追加130傷害，合計最高330點",
      "另一招式【挖垮】只需2點鋼能量即可造成90傷害並磨掉對手牌庫上方2張牌，前期也能穩定施壓",
    ],
    favorableSlugs: ["mega-metagross", "aegislash"],
    unfavorableSlugs: ["ceruledge", "zoroark"],
  },
  {
    slug: "mega-metagross",
    archetype: "無上限打點型",
    summary:
      "超級巨金怪ex的招式【機槍炮彈】傷害會隨自身附著的鋼能量數量持續追加，能量堆得越多，火力就越誇張，沒有明確上限。",
    winConditions: [
      "持續在超級巨金怪ex身上疊加鋼能量，讓招式基礎傷害疊上鋼能量數換算的加成後遠超一般攻擊上限",
      "搭配高耐久支援手段拉長對戰時間，換取更多回合疊能量的空間",
      "多能量疊加後一擊可洞穿大部分二階進化ex，適合作為後期收尾王牌",
    ],
    favorableSlugs: ["cinccino", "zoroark"],
    unfavorableSlugs: ["ceruledge", "lucario"],
  },
  {
    slug: "aegislash",
    archetype: "增傷核心型",
    summary:
      "雙劍鞘的特性讓場上所有超系與鋼系寶可夢的招式對戰鬥場多打30點傷害，連自己都能吃到加成，變身全隊的傷害放大器。",
    winConditions: [
      "維持雙劍鞘留在場上，讓隊上超系、鋼系攻擊手的傷害都額外加成30點",
      "雙劍鞘自身在加成生效下也能打出約100點左右的輸出，兼具核心與攻擊手雙重角色",
      "搭配主流攻擊手組隊，用增傷效果縮短擊倒對手所需的回合數",
    ],
    favorableSlugs: ["archaludon", "fossil-box"],
    unfavorableSlugs: ["zoroark", "honchkrow"],
  },
  {
    slug: "zamazenta-trevenant",
    archetype: "封鎖組合型",
    summary:
      "朽木妖以特性【森林的詛咒】只要站在戰鬥場就封鎖對手使用手牌中的道具卡，讓依賴道具運轉的對手動彈不得；蒼響則靠招式讓下一回合出手攻擊自己的對手身上疊上等量傷害指示物，牽制對手出手意願。",
    winConditions: [
      "盡快讓朽木妖站上戰鬥場，啟動特性【森林的詛咒】鎖住對手手牌中的道具卡，癱瘓依賴道具抽牌、加速的對手牌組",
      "蒼響招式【強力衝撞】命中後，只要下個對手回合對方用招式攻擊蒼響，就會在攻擊方身上疊上等量傷害指示物，讓對手不敢貿然強攻",
      "兩者都不是需要仰賴大量道具運作的攻擊手，即使自家的道具鎖同時生效也不太影響自身節奏",
    ],
    favorableSlugs: ["zoroark", "dark-box"],
    unfavorableSlugs: ["raging-bolt", "fossil-box"],
  },
  // 火系
  {
    slug: "ceruledge",
    archetype: "棄牌堆爆發型",
    summary:
      "蒼炎刃鬼ex只需1點能量就能用招式【深淵之炎】攻擊，傷害隨自己棄牌堆中能量張數增加，棄牌堆能量越多、後期一擊蓋牌的機率就越高，關鍵時刻還能改打需求較重的【紫晶暴怒】直接造成280傷害。",
    winConditions: [
      "透過博士研究、道具卡等手段盡快把能量送入棄牌堆，【深淵之炎】基礎30傷害會隨棄牌堆能量張數每張追加20點，堆到十餘張時可輕鬆突破300",
      "牌組運作單純、僅需一階進化與少量能量即可啟動【深淵之炎】，適合搶快建立節奏",
      "湊齊火、超、鋼三種能量後可改打【紫晶暴怒】，一口氣造成280傷害，但會將自身所有能量送入棄牌堆",
    ],
    favorableSlugs: ["dragon-diglett", "archaludon"],
    unfavorableSlugs: ["wailord", "abomasnow"],
  },
];

export function getDeckGuide(slug: string): DeckGuide | undefined {
  return deckGuides.find((g) => g.slug === slug);
}

/** 依 tierList 的順序回傳「已收錄攻略」的牌組清單，用於索引頁排序顯示。 */
export function guidedDecks() {
  return tierList.filter((d) => deckGuides.some((g) => g.slug === d.slug));
}
