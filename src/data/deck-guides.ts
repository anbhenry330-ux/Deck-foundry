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
      "有別於傳統的土龍多龍及魔靈多龍，透過投入不同寶可夢配合多龍巴魯托EX招式【幻影奇襲】靈活運用拿取獎賞卡。",
    winConditions: [
      "多龍巴魯托EX招式【幻影奇襲】200傷害配合招式效果60點傷分配傷害指示物在對方備戰區寶可夢上一次拿取多張獎賞卡",
      "前期透過赤松；後期透過鳴伊快速完成填能需求",
      "投入皮皮EX以在內戰中獲取優勢",
      "鎖鏈糬配合桃歹郎EX讓寶可夢增加傷害",
      "多元工具怪：貓頭夜鷹、土龍軸、喵喵EX、吉雉雞EX確保運作順暢",
    ],
    favorableSlugs: ["decidueye", "cryogonal", "grimmsnarl", "archaludon", "aegislash", "ceruledge"],
    unfavorableSlugs: ["mega-diancie", "slowking", "alakazam", "hua-yin", "zamazenta-trevenant", "garchomp", "lucario", "tera-box", "clefairy-grass-box", "crustle", "dragon-diglett"],
  },
  {
    slug: "ground-dragapult",
    archetype: "穩定續航型",
    summary:
      "透過土龍節節及多龍奇特性快速抽濾獲取大量手牌以養成多龍巴魯托EX，即使後期被對手使用不公印章或是紅牌干擾也可順利運作。",
    winConditions: [
      "多龍巴魯托EX招式【幻影奇襲】200傷害配合招式效果60點傷分配傷害指示物在對方備戰區寶可夢上一次拿取多張獎賞卡",
      "前期透過赤松；後期透過鳴伊快速完成填能需求",
      "可投入土龍節節EX以對抗EX寶可夢數量較多牌組及岩殿居蟹",
      "險惡廢墟配合願增猿特性轉傷加上多龍巴魯托EX招式快速拿取獎賞卡",
      "多元工具怪：土龍軸、喵喵EX、吉雉雞EX確保運作順暢",
    ],
    favorableSlugs: ["rayquaza", "mega-kangaskhan"],
    unfavorableSlugs: ["garchomp", "lucario"],
  },
  {
    slug: "blaziken-dragapult",
    archetype: "能量加速型",
    summary:
      "火焰雞EX特性【沸騰鬥志】可從棄牌區填能給場上寶可夢，解決傳統上多龍牌組過度依賴赤松問題，火焰雞EX招式可造成200點傷害，屬於穩定運作的多龍構築",
    winConditions: [
      "多龍巴魯托EX招式【幻影奇襲】200傷害配合招式效果60點傷分配傷害指示物在對方備戰區寶可夢上一回合拿取多張獎賞卡",
      "前期透過赤松；後期透過鳴伊快速完成填能需求",
      "火焰雞EX配合多龍巴魯托EX穩定輸出傷害",
      "投入火焰鳥可針對草碰等EX寶可夢取得輪次領先",
      "多元工具怪：土龍軸、喵喵EX、吉雉雞EX確保運作順暢",
    ],
    favorableSlugs: ["dragapult-ex", "ghost-dragapult"],
    unfavorableSlugs: ["garchomp", "cryogonal"],
  },
  {
    slug: "ghost-dragapult",
    archetype: "特殊狀態控場型",
    summary:
      "黑夜魔靈特性【咒詛炸彈】可在對手一隻寶可夢身上放置13個傷害指示物，可解決多龍巴魯托EX招式傷害不足問題，若想一回合取得2張以上獎勵卡可先使用特性，配合不公印章、紅牌干擾，刻意不昏厥對手使吉雉雞EX特性無法發動，降低下回合自己寶可夢被昏厥機率。",
    winConditions: [
      "多龍巴魯托EX招式【幻影奇襲】200傷害配合招式效果60點傷分配傷害指示物在對方備戰區寶可夢上一回合拿取多張獎賞卡",
      "配合徬徨夜靈及黑夜魔靈特性一回合拿取多張獎賞卡",
      "不公印章、紅牌後期自己寶可夢被昏厥時干擾對手",
      "監視塔使對手無法使用土龍節節、喵喵EX特性",
      "多元工具怪：土龍軸、喵喵EX、吉雉雞EX確保運作順暢",
    ],
    favorableSlugs: ["bellibolt", "festival-dance"],
    unfavorableSlugs: ["garchomp", "raging-bolt"],
  },
  {
    slug: "dragonite",
    archetype: "重擊終結型",
    summary:
      "哈克龍特性【進化指引】每回合可從牌庫抓取一張進化寶可夢，配合神奇糖果可讓快龍快速進化完成，填能可需求投入杖尾鱗甲龍、火焰雞、麻麻鰻、赤松、鳴伊快速完成填能需求，使快龍能使出【龍之滑翔】招式對對手造成330高傷害。",
    winConditions: [
      "前期快速養出快龍、杖尾鱗甲龍、麻麻鰻，對對手穩定輸出傷害",
      "透過快龍EX【龍之滑翔】昏厥2獎以上寶可夢",
      "麻麻鰻EX、火焰雞EX、銃嘴大鳥等多元打手保持續航力確保能拿取獎賞卡",
    ],
    favorableSlugs: ["cinccino", "toucannon"],
    unfavorableSlugs: ["zoroark", "raging-bolt"],
  },
  {
    slug: "raging-bolt",
    archetype: "能量清空爆發型",
    summary:
      "猛雷鼓EX招式【極降駕】透過將自己場上任意數量能量丟棄能對對方戰鬥場寶可夢造成極高傷害，配合草碰EX、烈空坐、鳳王特性和赤松快速完成造成傷害需求能量",
    winConditions: [
      "太晶BOX軸向透過草碰和袋獸EX快速抽濾完成養成猛雷鼓EX所需資源",
      "烈空坐軸向前期可透過烈箭鷹EX拿取獎賞卡及關鍵資源",
      "支援者投入赤松可快速完成猛雷鼓EX招式能量需求、席蘭滿足鋪場需求",
      "多元工具怪：喵喵EX、吉雉雞EX、袋獸EX確保運作順暢",
    ],
    favorableSlugs: ["mega-metagross", "aegislash"],
    unfavorableSlugs: ["zoroark", "grimmsnarl"],
  },
  // 電系
  {
    slug: "zeraora",
    archetype: "後期爆發型",
    summary:
      "搭配奇樹電肚蛙、大電海燕軸可快速將場上寶可夢賦予大量雷能量，投入Ace急進開關可將任意數量雷能量轉移至捷拉奧拉身上，完成招式需求能量，若是搭配麻麻鰻軸，Ace可投入頂尖槍，抓取對方關鍵寶可夢造成昏厥。",
    winConditions: [
      "透過奇樹電肚蛙、麻麻鰻特性快速填能給場上雷屬性寶可夢",
      "利用捷拉奧拉【閃電拳】招式昏厥2獎以上寶可夢",
      "泥巴魚【飛撲圈套】、傑拉奧拉【閃電急襲】確保輪次有優勢",
      "抽濾系統：大電海燕、米粒龍、喵喵EX、吉雉雞EX確保運作順暢",
    ],
    favorableSlugs: ["wailord", "dragonite"],
    unfavorableSlugs: ["lucario", "garchomp"],
  },
  {
    slug: "mega-manectric",
    archetype: "快攻型",
    summary:
      "超級雷電獸是雷屬性牌組中除了電肚蛙外少數能造成高傷害的寶可夢，配合麻麻鰻或是三合一磁怪特性可快速滿足填能需求，並投入泥巴魚、捷拉奧拉、卡璞鳴鳴等小打手以換取獎賞卡，支援者可投入卡娜莉、鬥子快速抓取雷屬性寶可夢，丹瑜配合高級球可快速累積棄牌區雷能量，使麻麻鰻特性可發動。",
    winConditions: [
      "前期透過超級雷電獸【狂暴噴射】招式快速拿取2張以上獎賞卡",
      "後期透過泥巴魚、捷拉奧拉等小打手拿取獎賞卡",
      "超級雷電獸【閃光射線】和雷電獸【閃光屏蔽】可封鎖對方攻擊",
      "多元工具怪：喵喵EX、吉雉雞EX、袋獸EX確保運作順暢",
    ],
    favorableSlugs: ["cinccino", "mega-kangaskhan"],
    unfavorableSlugs: ["garchomp", "lucario"],
  },
  {
    slug: "bellibolt",
    archetype: "能量佈署型",
    summary:
      "收錄於對戰搭檔及超級夢想擴充包裡的電肚蛙EX，本身具有自己的軸向，搭配奇樹大電海燕和奇樹霹靂電球完成構築，同時滿足填能、抽濾、攻擊需求，額外也可和猛雷鼓EX和烈空坐EX搭配，增加牌組靈活性。",
    winConditions: [
      "透過電肚蛙EX特性可不限次數將手牌雷能量賦予場上奇樹寶可夢上",
      "奇樹霹靂電球、猛雷鼓EX和烈空坐EX對對方戰鬥寶可夢造成高傷害",
      "支援者可投入卡娜莉、鬥子快速抓取雷屬性寶可夢完成鋪場",
      "可投入可達鴨和謝米防止前期被多龍、甲賀忍蛙、水碰清場",
    ],
    favorableSlugs: ["slowking", "alakazam"],
    unfavorableSlugs: ["lucario", "garchomp"],
  },
  // 鬥系
  {
    slug: "lucario",
    archetype: "重擊型",
    summary:
      "路卡利歐EX招式【波動突刺】可將棄牌區鬥能量填給備戰區寶可夢，太陽岩和月石體系每回合可將鬥能量快速累積至棄牌區，必要時太陽岩可做為小打手在後攻第一回合或是路卡利歐被昏厥時確保能拿取獎賞卡。",
    winConditions: [
      "路卡利歐EX招式【波動突刺】可填能給鐵掌力士，避免不被斷檔",
      "路卡利歐EX招式【超級勇氣】配合蛋白飲和腰帶可昏厥3獎寶可夢",
      "鐵掌力士特性和老大的指令可使路卡利歐昏厥對手備戰區吉雉雞EX和喵喵EX",
      "場地投入引力山岳減少對手二階寶可夢血量；熔岩洞則封鎖對手特性",
      "可投入投擲猿、固拉多、啪嚓海膽、鐵掌力士換取獎賞卡優勢",
    ],
    favorableSlugs: ["zeraora", "mega-manectric"],
    unfavorableSlugs: ["alakazam", "mega-diancie"],
  },
  {
    slug: "garchomp",
    archetype: "進化抽牌型",
    summary:
      "尖牙陸鯊特性配合寶芬、戰鬥鑼、寶可平板可快速完成鋪場，烈咬陸鯊ＥＸ招式【螺旋俯衝】可昏厥一獎寶可夢並補充自己手牌，【龍之爆發】招式配合羅絲雷朵特性、蛋白飲可昏厥2獎以上寶可夢。",
    winConditions: [
      "新衝天軸可投入鬥子快速抓取烈咬陸鯊和新衝天能量、硬岩鬥能量完成填能",
      "壯偉樹木軸可投入阿克羅馬、拉姆達避免被斷檔，確保每回合能攻擊",
      "投入硬岩鬥能量可防止混亂和克制胡地牌組",
      "多元工具怪：喵喵EX、吉雉雞EX、土龍軸確保運作順暢",
    ],
    favorableSlugs: ["dragapult-ex", "ghost-dragapult"],
    unfavorableSlugs: ["venusaur", "golisopod"],
  },
  {
    slug: "zygarde",
    archetype: "重砲爆擊型",
    summary:
      "超級基格爾德EX招式【蓋亞波動】3個鬥能量可造成200傷害並使自己下回合受到傷害減少30點，能量充足時可使出【虛無歸零】對對手場上每隻寶可夢擲硬幣，正面各造成150傷害一次清場，配合超級路卡利歐EX、龜足巨鎧等寶可夢快速完成填能需求。",
    winConditions: [
      "可投入超級差不多娃娃、超級路卡利歐、龜足巨鎧、閃焰王牌以快速填能",
      "道具核心記憶碟可裝備給基格爾德打出高傷害昏厥2獎以上寶可夢",
      "可投入太陽岩、鐵掌力士、夠讚狗等小打手換取對手獎賞卡",
      "多元工具怪：喵喵EX、吉雉雞EX、土龍軸、月石確保運作順暢",
    ],
    favorableSlugs: ["toucannon", "cinccino"],
    unfavorableSlugs: ["venusaur", "honey-serpent"],
  },
  {
    slug: "gou-zan-gou",
    archetype: "惡能量強化型",
    summary:
      "夠讚狗特性【腎上腺力量】只要身上附有基本惡能量，HP上限與對對手戰鬥寶可夢造成的傷害皆增加100點，使招式【好拳】從70傷害提升至170傷害，配合月月熊 赫月、太陽岩等小打手換取獎賞卡，屬於非EX寶可夢與對手交換獎賞卡的牌組。",
    winConditions: [
      "夠讚狗特性配合稜鏡能量可使其血量和招式增加100點，穩定對對手造成170傷害",
      "月月熊配合塔拉剛可昏厥2獎以上對手身上有傷害指示物寶可夢",
      "投入火焰鳥以針對妙蛙花、狙射樹梟、蜜集大蛇等草系牌組",
      "搶後攻有機會用太陽岩昏厥對手戰鬥寶可夢獲取獎賞卡輪次優勢",
    ],
    favorableSlugs: ["zeraora", "mega-manectric"],
    unfavorableSlugs: ["alakazam", "mega-diancie"],
  },
  {
    slug: "greninja",
    archetype: "控場型",
    summary:
      "由呱呱泡蛙、呱頭蛙進化為超級甲賀忍蛙EX，特性【必殺手裏劍】棄掉1張基本水能量即可在對手1隻寶可夢身上放置6個傷害指示物，可快速清場對手備戰區基礎寶可夢，再以招式【忍者飛旋】回收水能量追加傷害收尾。",
    winConditions: [
      "超級甲賀忍蛙EX特性可清場對手基礎寶可夢，拖慢對手進攻節奏",
      "鬥系甲賀忍蛙招式【分身連打】可配合超級甲賀忍蛙EX特性可清場對手寶可夢",
      "投入新衝天能量可一回合完成超級甲賀忍蛙招式需求，並回手下回合繼續使用",
      "投入寶可夢交易、氣球、AZ的平和、衝浪海灘使甲賀忍蛙EX特性可使用多次",
    ],
    favorableSlugs: ["festival-dance", "tera-box"],
    unfavorableSlugs: ["zeraora", "mega-manectric"],
  },
  {
    slug: "fossil-box",
    archetype: "封鎖控制型",
    summary:
      "場地化石採掘場可快速將陳舊的化石物品卡鋪至備戰區，古空棘魚招式【化石律動】依備戰區化石寶可夢數量增加傷害，並投入護城龍阻擋對手低費攻擊手、戰槌龍EX特性敲掉對手能量，拖延對手進攻節奏。",
    winConditions: [
      "場地化石採掘場可快速鋪場陳舊的化石物品卡至備戰區",
      "古空棘魚招式【化石律動】備戰區滿場可每回合穩定輸出160傷害",
      "投入原蓋海龜針對攜帶大量物品卡牌組",
      "護城龍只要在備戰區可避免場上寶可夢受到對手附兩能以下寶可夢傷害",
      "戰錘龍EX特性若擲硬幣正面可敲掉一個對手戰鬥寶可夢能量，拖延對手進攻節奏",
    ],
    favorableSlugs: ["zoroark", "bellibolt"],
    unfavorableSlugs: ["venusaur", "golisopod"],
  },
  // 草系
  {
    slug: "venusaur",
    archetype: "耐久控場型",
    summary:
      "超級妙蛙花EX擁有380高HP，特性【日光轉移】可自由調度場上基本草能量，招式【叢林拋擲】可造成240傷害並回復自身30點HP，配合時拉比、小光、杜若與活力森林快速養成進化鏈，打持久戰消耗對手資源。",
    winConditions: [
      "妙蛙花EX特性配合大竺葵特性可使草碰打出高傷害",
      "妙蛙花EX招式【叢林拋擲】可穩定輸出240傷害，並幫自身回血30點",
      "時拉比、大量物品卡、小光、杜若配合活力森林可一回合快速養成進化鏈",
      "投入蓋諾賽克特、吉雉雞EX可穿傷對手備戰區關鍵寶可夢",
      "投入雷吉奇卡斯可一回合昏厥多龍巴魯托等太晶寶可夢",
    ],
    favorableSlugs: ["cinccino", "zoroark"],
    unfavorableSlugs: ["ceruledge", "blaziken-dragapult"],
  },
  {
    slug: "decidueye",
    archetype: "狙擊控場型",
    summary:
      "狙射樹梟EX特性【狙擊手之眼】在對手手牌剛好4張時，招式所需無色能量全部視為已支付，配合裁判控制對手手牌張數，招式【粉碎箭】可造成240傷害並棄掉對手戰鬥寶可夢1個能量，拖延對手進攻節奏。",
    winConditions: [
      "狙射樹梟特性配合彩粉蝶特性、裁判可使狙射樹梟招式能量改為一草",
      "狙射樹梟招式【粉碎劍】可穩定對對手戰鬥寶可夢輸出240傷害",
      "古空棘魚特性可使狙射樹梟使出投羽梟招式【羽毛射擊】穿傷對手備戰寶可夢",
      "投入擔架、聖灰、釣竿Max、水蓮等訓練家卡以快速回收棄牌區寶可夢",
      "多元工具怪：喵喵EX、吉雉雞EX、土龍軸、確保運作順暢",
    ],
    favorableSlugs: ["mega-metagross", "cinccino"],
    unfavorableSlugs: ["ceruledge", "blaziken-dragapult"],
  },
  {
    slug: "honey-serpent",
    archetype: "能量爆發型",
    summary:
      "蜜集大蛇EX特性【熟成充能】可將手牌基本草能量附給寶可夢並回復30點HP，配合厄鬼椪 碧草面具EX特性【碧綠之舞】邊填能邊抽牌快速鋪場，招式【蜜糖風暴】傷害隨自身草能量數量增加，搭配大竺葵特性可昏厥2獎以上寶可夢。",
    winConditions: [
      "大竺葵特性可使蜜集大蛇EX、草碰EX打出高傷害昏厥對手2獎以上寶可夢",
      "蜜集大蛇EX特性可手填草能量給草寶可夢回血30點，避免被對手拿取多張獎賞卡",
      "多元小打手：卡璞哞哞、蓋諾賽克特、雷吉奇卡斯可針對不同牌組",
      "投入白蕾亞可避免被對手2-2-2拿取所有獎賞卡，後期落後有機會反轉局勢",
      "大量抽濾：喵喵EX、吉雉雞EX、草碰特性、確保運作順暢",
    ],
    favorableSlugs: ["mega-metagross", "aegislash"],
    unfavorableSlugs: ["ceruledge", "blaziken-dragapult"],
  },
  {
    slug: "crustle",
    archetype: "高耐久控場型",
    summary:
      "岩殿居蟹特性【神秘石居】可使自身不受對手寶可夢EX招式傷害，招式【偉大剪】無視對手戰鬥寶可夢身上效果造成120傷害，配合英雄斗篷、美味飯糰等回復手段及粉碎之錘控制對手能量，讓以EX寶可夢為主的牌組難以突破。",
    winConditions: [
      "岩殿居蟹特性可使自身避免受到對手EX寶可夢傷害，能克制多數主流牌組",
      "英雄斗篷搭配美味飯糰、冰淇淋、寶可夢中心姐姐使對手無法昏厥岩殿居蟹",
      "粉碎之錘、改造之錘、手持循環扇、可怕的哥哥控制對手場上能量",
      "投入薄霧、硬岩鬥能量以對抗胡地招式、多龍點傷、願增猿招式",
      "投入鬥碰可針對攜帶大量有特性寶可夢牌組",
    ],
    favorableSlugs: ["mega-metagross", "dragonite"],
    unfavorableSlugs: ["zoroark", "gou-zan-gou"],
  },
  {
    slug: "festival-dance",
    archetype: "連續攻擊型",
    summary:
      "裹蜜蟲特性【祭典樂舞】在場地祭典會場在場時可一回合使用兩次招式，招式【朋友之環】只需1個草能量，傷害為自己備戰寶可夢數量×20，配合好友寶芬、捕蟲組合快速鋪滿備戰區，一回合造成大量傷害。",
    winConditions: [
      "場地祭典會場在場時，裹蜜蟲特性【祭典樂舞】可一回合使用兩次招式",
      "裹蜜蟲招式【朋友之環】備戰區滿場時單次可造成100傷害，連續使用兩次穩定拿取獎賞卡",
      "好友寶芬、捕蟲組合、寶可平板快速鋪滿備戰區並找齊裹蜜蟲",
      "投入轟擂金剛猩、金魚王作為不同對局的副攻手",
      "聖灰、夜間擔架回收棄牌區寶可夢，避免後期被斷檔",
    ],
    favorableSlugs: ["toucannon", "bellibolt"],
    unfavorableSlugs: ["ceruledge", "blaziken-dragapult"],
  },
  {
    slug: "beedrill-arboliva",
    archetype: "展開火力型",
    summary:
      "大針蜂EX招式【針蜂轟鳴】只需1個草能量，傷害為自己場上大針蜂數量×110，配合神奇糖果快速進化；奧利瓦EX招式【油之機關槍】最多選擇對手寶可夢6次各造成20傷害，可穿傷對手備戰區寶可夢，兩者配合穩定拿取獎賞卡。",
    winConditions: [
      "大針蜂EX招式【針蜂轟鳴】場上2隻以上大針蜂即可造成220以上傷害，昏厥2獎以上寶可夢",
      "奧利瓦EX招式【油之機關槍】可自由分配傷害且不計算弱點抵抗力，削弱對手前後排",
      "神奇糖果、捕蟲組合配合活力森林快速養成進化鏈",
      "多元工具怪：喵喵EX、吉雉雞EX、土龍軸確保運作順暢",
    ],
    favorableSlugs: ["mega-kangaskhan", "wailord"],
    unfavorableSlugs: ["ceruledge", "blaziken-dragapult"],
  },
  {
    slug: "tera-box",
    archetype: "組合技型",
    summary:
      "太晶BOX以厄鬼椪 碧草面具EX特性【碧綠之舞】填能並抽牌，配合赤松、能量轉移快速完成填能需求，再依對手屬性弱點混編猛雷鼓EX、鐵斑葉EX、厄鬼椪 水井面具EX、桃歹郎EX等多款攻擊手，針對不同牌組靈活應戰。",
    winConditions: [
      "厄鬼椪 碧草面具EX特性【碧綠之舞】每回合可填1張草能量並抽1張牌，加速展開",
      "依對手弱點靈活切換猛雷鼓EX、鐵斑葉EX、皮卡丘EX、拉帝亞斯EX等攻擊手",
      "場地零之大空洞在場上有太晶寶可夢時，備戰區可放置8隻寶可夢",
      "支援者投入赤松快速完成填能需求；白蕾雅後期可讓太晶寶可夢多拿1張獎賞卡",
      "多元工具怪：吉雉雞EX、超級袋獸EX、貓頭夜鷹確保運作順暢",
    ],
    favorableSlugs: ["archaludon", "garchomp"],
    unfavorableSlugs: ["fossil-box", "cinccino"],
  },
  {
    slug: "clefairy-grass-box",
    archetype: "雙核心穩定型",
    summary:
      "莉莉艾的皮皮EX特性【妖精領域】可使對手場上所有龍屬性寶可夢弱點變為超屬性，克制多龍等龍系牌組，配合厄鬼椪 碧草面具EX特性【碧綠之舞】填能抽牌，與赤松、能量轉移快速完成填能需求，雙核心互相支援輸出。",
    winConditions: [
      "莉莉艾的皮皮EX特性【妖精領域】使龍屬性寶可夢弱點變為超屬性，招式【滿月輪舞】傷害隨雙方備戰寶可夢數量增加",
      "厄鬼椪 碧草面具EX特性【碧綠之舞】填能抽牌，成型後接手輸出",
      "投入拉帝亞斯EX、超級袋獸EX、鐵斑葉EX等多元打手對應不同牌組",
      "火箭隊的監視塔使對手無法使用土龍節節、喵喵EX特性",
      "多元工具怪：喵喵EX、吉雉雞EX確保運作順暢",
    ],
    favorableSlugs: ["dragapult-ex", "dragonite"],
    unfavorableSlugs: ["ceruledge", "malamar"],
  },
  {
    slug: "golisopod",
    archetype: "快攻控場型",
    summary:
      "超級具甲武者EX招式【致命刺擊】在對手戰鬥寶可夢身上有傷害指示物時，只需1個草能量即可造成220傷害，招式【四爪控制】造成160傷害並使對手寶可夢下回合無法撤退，配合340高HP及願增猿特性轉傷，穩定昏厥對手2獎寶可夢。",
    winConditions: [
      "願增猿特性先在對手戰鬥寶可夢放上傷害指示物，使【致命刺擊】打出220傷害",
      "險惡廢墟使對手放置基礎寶可夢至備戰區時累積傷害指示物",
      "【四爪控制】使對手寶可夢無法撤退，配合老大的指令鎖住對手關鍵寶可夢",
      "投入謝米保護備戰區、含羞苞前期封鎖對手物品卡",
      "多元工具怪：土龍軸確保運作順暢",
    ],
    favorableSlugs: ["archaludon", "aegislash"],
    unfavorableSlugs: ["blaziken-dragapult", "ceruledge"],
  },
  {
    slug: "bug-panic",
    archetype: "翻牌爆發型",
    summary:
      "大量投入雨翅蛾、三蜜蜂、圓絲蛛、燒火蚣等擁有招式【蟲蟲恐慌】的寶可夢，招式翻開牌庫下方7張卡，依其中擁有【蟲蟲恐慌】寶可夢張數×50造成傷害，牌組內此類寶可夢越多傷害越穩定。",
    winConditions: [
      "各投入4張雨翅蛾、三蜜蜂、圓絲蛛、燒火蚣，翻到3張即可造成150傷害",
      "翻到的寶可夢會洗回牌庫、其餘卡丟棄，需注意牌庫剩餘張數",
      "溜溜糖球招式【增長】可從牌庫放置2張溜溜糖球至備戰區快速鋪場",
      "雨翅蛾招式【恐怖花紋】使對手寶可夢下回合無法使用招式，拖延對手進攻節奏",
    ],
    favorableSlugs: [],
    unfavorableSlugs: [],
  },
  // 水系
  {
    slug: "abomasnow",
    archetype: "磨牌爆發型",
    summary:
      "超級暴雪王EX招式【山崩之錘】只需2個水能量，棄掉牌庫上方6張卡並依其中基本水能量張數×100造成傷害，招式【冰霜屏障】3個水能量造成200傷害並使自己下回合受到傷害減少30點，大量投入基本水能量使傷害最大化。",
    winConditions: [
      "超級暴雪王EX招式【山崩之錘】翻到2張基本水能量即可造成200傷害，昏厥2獎以上寶可夢",
      "【冰霜屏障】穩定輸出200傷害並減少受到傷害",
      "大量投入基本水能量提高【山崩之錘】期望傷害",
      "衝浪海灘可替換戰鬥場水屬性寶可夢，保持進攻節奏",
      "青木的手法、火箭隊的拉姆達快速找齊關鍵卡確保運作順暢",
    ],
    favorableSlugs: ["fossil-box", "zoroark"],
    unfavorableSlugs: ["archaludon", "mega-metagross"],
  },
  {
    slug: "cryogonal",
    archetype: "磨牌控場型",
    summary:
      "冰岩怪招式【破冰重擊】只需1個水能量，棄掉牌庫上方6張卡並依其中基本水能量張數×60造成傷害，另有4能量固定160傷害的【霜擊】保底輸出，構築單純，大量投入基本水能量使傷害最大化。",
    winConditions: [
      "【破冰重擊】翻到3張基本水能量即可造成180傷害",
      "【霜擊】固定造成160傷害，作為翻牌不理想時的保底輸出",
      "大量投入基本水能量提高【破冰重擊】期望傷害",
      "衝浪海灘、青木的手法、火箭隊的拉姆達確保運作順暢",
    ],
    favorableSlugs: ["dragonite", "fossil-box"],
    unfavorableSlugs: ["archaludon", "mega-metagross"],
  },
  {
    slug: "relicanth",
    archetype: "快攻爆發型",
    summary:
      "古空棘魚為水屬性基礎寶可夢，招式【化石律動】只需1個無色能量，依備戰區化石寶可夢數量每隻增加30傷害，備戰區滿場可造成160傷害，配合化石採掘場快速鋪場陳舊的化石物品卡，屬於開局即可輸出的速攻牌組。",
    winConditions: [
      "場地化石採掘場可快速鋪場陳舊的化石物品卡至備戰區",
      "古空棘魚招式【化石律動】只需1個無色能量，備戰區滿場每回合穩定輸出160傷害",
      "投入原蓋海龜針對攜帶大量物品卡牌組",
      "支援者投入裁判、青木的手法、阿克羅瑪的執著確保運作順暢",
    ],
    favorableSlugs: ["slowking", "alakazam"],
    unfavorableSlugs: ["lucario", "zeraora"],
  },
  {
    slug: "starmie-froslass",
    archetype: "持續傷害型",
    summary:
      "雪妖女特性【冰霜衣】在每次寶可夢檢查時，對雙方擁有特性的寶可夢（雪妖女除外）放置1個傷害指示物，超級寶石海星EX本身無特性不受影響，招式【噴射打擊】只需1個水能量，對戰鬥寶可夢造成120傷害並對備戰區1隻寶可夢造成50傷害，配合累積的傷害指示物一次昏厥多隻寶可夢。",
    winConditions: [
      "雪妖女特性【冰霜衣】持續累積傷害指示物，克制攜帶大量特性寶可夢牌組",
      "超級寶石海星EX招式【噴射打擊】同時傷害對手戰鬥場與備戰區寶可夢",
      "超級寶石海星EX招式【星雲光束】210傷害無視對手戰鬥寶可夢身上效果",
      "投入願增猿特性轉傷，加速昏厥對手寶可夢",
      "多元工具怪：喵喵EX、土龍軸確保運作順暢",
    ],
    favorableSlugs: ["mega-diancie", "aegislash"],
    unfavorableSlugs: ["fossil-box", "zoroark"],
  },
  {
    slug: "froslass-lopunny",
    archetype: "組合技型",
    summary:
      "超級雪妖女EX招式【怨言】只需1個水能量，傷害為對手手牌張數×50；超級長耳兔EX招式【疾風直撞】當回合從備戰區換上戰鬥場可追加170傷害，兩隻EX交替上場，使對手難以兼顧手牌數量與場面。",
    winConditions: [
      "超級雪妖女EX招式【怨言】對手手牌越多傷害越高，後期可昏厥2獎以上寶可夢",
      "超級雪妖女EX招式【純粹雪】造成150傷害並使對手戰鬥寶可夢陷入睡眠",
      "超級長耳兔EX招式【疾風直撞】換上戰鬥場當回合最高可造成230傷害",
      "氣球、英雄斗篷配合滿充的體貼維持超級EX寶可夢的續航力",
      "多元工具怪：土龍軸、旋轉洛托姆確保運作順暢",
    ],
    favorableSlugs: ["slowking", "hua-yin"],
    unfavorableSlugs: ["honchkrow", "rayquaza"],
  },
  {
    slug: "wailord",
    archetype: "耐久型",
    summary:
      "吼鯨王EX擁有380超高HP，前期3個水能量即可造成120傷害，能量充足後可使出5能量270傷害的招式，使出後自身會陷入睡眠，配合超大冰淇淋回復血量，屬於以高血量拖延對手的耐久牌組。",
    winConditions: [
      "吼鯨王EX 380超高HP使對手難以一擊昏厥",
      "前期3個水能量穩定造成120傷害，維持進攻節奏",
      "能量到位後5能量270傷害可昏厥2獎以上寶可夢",
      "衝浪海灘可將陷入睡眠的吼鯨王EX換下，解除睡眠狀態",
      "大師球、高級球快速抓取吼鯨王EX；超大冰淇淋回復血量延長續航",
    ],
    favorableSlugs: ["zoroark", "cinccino"],
    unfavorableSlugs: ["zeraora", "mega-manectric"],
  },
  // 惡系
  {
    slug: "zoroark",
    archetype: "快攻型",
    summary:
      "N的索羅亞克EX招式【意志劫持】只需1個惡能量，傷害為對手備戰寶可夢數量×30，副招【欺詐】3個無色能量可使用對手戰鬥寶可夢的招式，能量需求低，配合N的城堡靈活換場，可提早對對手施壓。",
    winConditions: [
      "N的索羅亞克EX招式【意志劫持】對手鋪場越多傷害越高，克制展開型牌組",
      "招式【欺詐】可借用對手戰鬥寶可夢招式，牌組彈性高",
      "場地N的城堡使N的寶可夢撤退費用為0，可靈活換場",
      "投入願增猿、桃歹郎EX作為輔助打手",
      "多元工具怪：喵喵EX、吉雉雞EX、米立龍確保運作順暢",
    ],
    favorableSlugs: ["toucannon", "tera-box"],
    unfavorableSlugs: ["venusaur", "mega-diancie"],
  },
  {
    slug: "dark-box",
    archetype: "組合技型",
    summary:
      "惡BOX以超級阿勃梭魯EX、月月熊 赫月EX、願增猿等寶可夢為核心，配合厄鬼椪 碧草面具EX特性【碧綠之舞】填能抽牌，與赤松、能量轉移快速完成填能需求，再依對手牌組混編莉莉艾的皮皮EX、厄鬼椪 水井面具EX等攻擊手靈活應戰。",
    winConditions: [
      "厄鬼椪 碧草面具EX特性【碧綠之舞】填能並抽牌，加速展開",
      "願增猿特性轉傷至對手寶可夢，配合主攻手昏厥2獎以上寶可夢",
      "依對手牌組切換攻擊手，莉莉艾的皮皮EX可針對龍系牌組",
      "零之大空洞擴充備戰區；不公印章後期干擾對手",
      "多元工具怪：喵喵EX、吉雉雞EX、超級袋獸EX確保運作順暢",
    ],
    favorableSlugs: ["alakazam", "rocket-mewtwo", "slowking"],
    unfavorableSlugs: ["garchomp", "lucario", "gou-zan-gou"],
  },
  {
    slug: "grimmsnarl",
    archetype: "控場型",
    summary:
      "瑪俐的長毛巨魔EX從手牌進化時，特性【龐克練肌】可從牌庫最多取出5張基本惡能量附於瑪俐的寶可夢上，招式【暗影子彈】2個惡能量造成180傷害並對備戰區1隻寶可夢造成30傷害，配合神奇糖果與願增猿特性轉傷快速昏厥對手寶可夢。",
    winConditions: [
      "瑪俐的長毛巨魔EX特性【龐克練肌】進化當回合即可完成填能需求",
      "招式【暗影子彈】同時傷害對手戰鬥場與備戰區寶可夢",
      "320高HP使對手前期難以昏厥，穩定撐到能量成型",
      "投入雪妖女特性累積傷害指示物、願增猿特性轉傷，加速拿取獎賞卡",
      "多元工具怪：米立龍、含羞苞確保運作順暢",
    ],
    favorableSlugs: ["alakazam", "hua-yin", "slowking"],
    unfavorableSlugs: ["garchomp", "zygarde", "greninja"],
  },
  {
    slug: "darkrai",
    archetype: "爆發型",
    summary:
      "超級達克萊伊EX招式【蠱惑】可使對手戰鬥寶可夢陷入混亂，特性可在對手戰鬥寶可夢處於特殊狀態時使其直接昏厥，招式【腦核粉碎】在對手混亂時只需1個惡能量即可造成130傷害，配合席蘭、超級袋獸EX穩定運作。",
    winConditions: [
      "超級達克萊伊EX招式【蠱惑】使對手陷入混亂，為特性昏厥對手鋪路",
      "特性可無視剩餘HP使處於特殊狀態的對手戰鬥寶可夢直接昏厥",
      "【腦核粉碎】1個惡能量130傷害；【嫉妒漩渦】1個惡能量110傷害",
      "支援者投入席蘭快速抓取EX寶可夢完成鋪場",
      "多元工具怪：喵喵EX、吉雉雞EX、超級袋獸EX確保運作順暢",
    ],
    favorableSlugs: ["mega-diancie", "slowking", "rocket-mewtwo"],
    unfavorableSlugs: ["zoroark", "greninja", "hua-yin"],
  },
  {
    slug: "honchkrow",
    archetype: "快攻型",
    summary:
      "火箭隊的烏鴉頭頭招式【火箭羽毛】可棄掉手牌中所有火箭隊支援者，每張造成60傷害，副招【頭突】造成100固定傷害，本身為非EX寶可夢，被昏厥只會被拿取1張獎賞卡，配合火箭隊的接收器快速累積手牌火箭隊支援者。",
    winConditions: [
      "火箭隊的烏鴉頭頭招式【火箭羽毛】手牌累積多張火箭隊支援者即可昏厥2獎以上寶可夢",
      "火箭隊的接收器快速抓取火箭隊支援者",
      "非EX寶可夢被昏厥只會被拿取1張獎賞卡，獎賞卡交換有優勢",
      "對鬥屬性招式有-30抵抗力，可對抗鬥系牌組",
      "投入火箭隊的多邊獸、火箭隊的急凍鳥等火箭隊寶可夢確保運作順暢",
    ],
    favorableSlugs: ["lucario", "garchomp", "mega-diancie"],
    unfavorableSlugs: ["zeraora", "mega-manectric"],
  },
  {
    slug: "malamar",
    archetype: "鋪場剋星型",
    summary:
      "超級烏賊王EX招式只需2個惡能量，傷害為對手備戰寶可夢數量×70，對手備戰區滿場時可造成350傷害，對手備戰區較少時可改用3個惡能量200傷害並使對手混亂的招式，專門針對展開型牌組。",
    winConditions: [
      "超級烏賊王EX主力招式對手備戰區越多傷害越高，最高可造成350傷害",
      "對手備戰區較少時改用200傷害並使對手混亂的招式維持進攻",
      "顫弦蠑螈特性快速將惡能量填給備戰區寶可夢",
      "投入願增猿、超級阿勃梭魯EX、桃歹郎EX作為輔助打手",
      "多元工具怪：喵喵EX、吉雉雞EX確保運作順暢",
    ],
    favorableSlugs: ["toucannon", "festival-dance"],
    unfavorableSlugs: ["ceruledge", "rayquaza"],
  },
  // 超系
  {
    slug: "mega-diancie",
    archetype: "坦克型",
    summary:
      "超級蒂安希EX特性【鑽石膜】可使受到招式傷害減少30點，招式【花冠射線】最多棄掉自身2個能量，每個造成120傷害，最高可造成240傷害，配合黑夜魔靈特性放置傷害指示物一回合拿取多張獎賞卡。",
    winConditions: [
      "超級蒂安希EX特性【鑽石膜】減少受到傷害，拖延對手進攻節奏",
      "超級蒂安希EX招式【花冠射線】最高240傷害昏厥2獎以上寶可夢",
      "黑夜魔靈特性【咒詛炸彈】可在對手寶可夢身上放置13個傷害指示物",
      "神奇糖果快速進化黑夜魔靈，配合花冠射線一回合拿取多張獎賞卡",
      "多元工具怪：莉莉艾的皮皮EX、拉帝亞斯EX、喵喵EX確保運作順暢",
    ],
    favorableSlugs: ["garchomp", "lucario", "gou-zan-gou"],
    unfavorableSlugs: ["darkrai", "malamar", "dark-box"],
  },
  {
    slug: "slowking",
    archetype: "應變型",
    summary:
      "呆呆王招式【耀閃挑戰】棄掉牌庫上方1張卡，若為沒有規則的寶可夢即可使用該寶可夢的招式，投入酋雷姆、巨金怪、龍王蠍、棄世猴等強力非EX寶可夢作為招式來源，另一招式【超念力】可穩定造成120傷害。",
    winConditions: [
      "呆呆王招式【耀閃挑戰】可使用牌庫中強力寶可夢的招式，依對手場面選擇不同招式",
      "投入多種非EX寶可夢作為招式來源，提高翻到強力招式機率",
      "招式【超念力】穩定造成120傷害作為保底輸出",
      "多元工具怪：喵喵EX、吉雉雞EX、超級袋獸EX確保運作順暢",
    ],
    favorableSlugs: ["garchomp", "lucario", "fossil-box"],
    unfavorableSlugs: ["dark-box", "grimmsnarl", "malamar"],
  },
  {
    slug: "alakazam",
    archetype: "後排核心型",
    summary:
      "胡地招式【維度之手】即使在備戰區也能使用，2個超能量可造成120傷害，另一招式【意志劫持】2個無色能量即可造成90傷害並依對手備戰寶可夢數量每隻增加30傷害，讓對手難以鎖定主攻手。",
    winConditions: [
      "胡地待在備戰區即可使用【維度之手】穩定造成120傷害",
      "招式【意志劫持】對手鋪場越多傷害越高，克制展開型牌組",
      "神奇糖果配合小光、鬥子快速養成進化鏈",
      "改造之錘、手持循環扇控制對手場上能量",
      "多元工具怪：土龍軸、吉雉雞EX、可達鴨確保運作順暢",
    ],
    favorableSlugs: ["garchomp", "lucario", "gou-zan-gou"],
    unfavorableSlugs: ["dark-box", "grimmsnarl", "honchkrow"],
  },
  {
    slug: "hua-yin",
    archetype: "資源循環型",
    summary:
      "詛咒娃娃、怨影娃娃等擁有特性【化隱】的寶可夢不受對手招式與特性效果影響，輪流上場消耗後進入棄牌區，破破舵輪招式依棄牌區化隱寶可夢數量增加傷害，只需1個超能量即可造成170傷害。",
    winConditions: [
      "詛咒娃娃、怨影娃娃輪流上場，累積棄牌區化隱寶可夢數量",
      "棄牌區化隱寶可夢達4張以上時，破破舵輪只需1個超能量即可造成170傷害",
      "特性【化隱】使寶可夢不受對手招式與特性效果影響，可克制超級達克萊伊等特殊狀態牌組",
      "多元工具怪：土龍軸、旋轉洛托姆確保運作順暢",
    ],
    favorableSlugs: ["darkrai", "starmie-froslass", "wailord"],
    unfavorableSlugs: ["malamar", "mega-metagross", "rayquaza"],
  },
  {
    slug: "rocket-mewtwo",
    archetype: "組合技型",
    summary:
      "火箭隊的超夢EX需場上有4隻以上火箭隊寶可夢，特性【動力節省】才能使用招式，招式【消除球】基礎160傷害，可棄掉備戰寶可夢身上最多2個能量，每個增加60傷害，最高可造成280傷害。",
    winConditions: [
      "前期快速鋪場4隻以上火箭隊寶可夢，使火箭隊的超夢EX可使用招式",
      "火箭隊的超夢EX招式【消除球】最高280傷害昏厥2獎以上寶可夢",
      "火箭隊的接收器、火箭隊支援者互相配合快速抽濾",
      "能量轉移、極限腰帶確保火箭隊的超夢EX穩定輸出",
    ],
    favorableSlugs: ["garchomp", "lucario", "fossil-box"],
    unfavorableSlugs: ["zoroark", "dark-box", "honchkrow"],
  },
  // 一般系
  {
    slug: "cinccino",
    archetype: "耐久消耗型",
    summary:
      "奇諾栗鼠EX特性【滑順披風】受到招式傷害時擲硬幣，正面即可不受傷害，招式傷害為自身能量數×40且沒有上限，配合金屬怪特性【鋼鐵製造】快速填入鋼能量，能量充足後可昏厥大部分EX寶可夢。",
    winConditions: [
      "金屬怪特性【鋼鐵製造】快速將鋼能量填給奇諾栗鼠EX",
      "奇諾栗鼠EX特性【滑順披風】擲硬幣正面不受傷害，拖延對手進攻節奏",
      "招式傷害依自身能量數×40增加且無上限，可昏厥2獎以上寶可夢",
      "能量回收器、能量轉移確保鋼能量持續循環",
      "多元工具怪：喵喵EX、超級袋獸EX確保運作順暢",
    ],
    favorableSlugs: ["mega-metagross", "archaludon"],
    unfavorableSlugs: ["lopunny", "zoroark"],
  },
  {
    slug: "lopunny",
    archetype: "快攻游擊型",
    summary:
      "超級長耳兔EX招式【疾風擊】當回合從備戰區換上戰鬥場可額外追加170傷害，最高230傷害，另一招式【尖刺跳躍】固定160傷害並無視對手戰鬥寶可夢身上效果，透過反覆換場持續造成高傷害。",
    winConditions: [
      "超級長耳兔EX招式【疾風擊】換上戰鬥場當回合最高可造成230傷害",
      "招式【尖刺跳躍】無視對手效果，可突破傷害減免寶可夢",
      "氣球、滿充的體貼配合換場維持進攻節奏",
      "多元工具怪：土龍軸、旋轉洛托姆、火焰鳥確保運作順暢",
    ],
    favorableSlugs: ["cinccino", "mega-diancie"],
    unfavorableSlugs: ["mega-metagross", "dragon-diglett"],
  },
  {
    slug: "mega-kangaskhan",
    archetype: "運氣爆發型",
    summary:
      "超級袋獸EX特性【跑腿衝刺】在戰鬥場時每回合可抽2張卡，招式【機槍連段】持續擲硬幣，每次正面追加50傷害，配合300高HP與月月熊 赫月EX、皮卡丘EX等多元打手，兼具抽濾與爆發傷害。",
    winConditions: [
      "超級袋獸EX特性【跑腿衝刺】每回合抽2張卡維持手牌資源",
      "招式【機槍連段】正面次數越多傷害越高，有機會昏厥2獎以上寶可夢",
      "300高HP可撐過對手前期攻擊",
      "投入月月熊 赫月EX、皮卡丘EX、願增猿等多元打手針對不同牌組",
      "超大冰淇淋、超級傷藥回復血量延長續航",
    ],
    favorableSlugs: ["aegislash", "archaludon"],
    unfavorableSlugs: ["mega-metagross", "dragon-diglett"],
  },
  {
    slug: "rayquaza",
    archetype: "能量爆發型",
    summary:
      "超級烈空坐EX從手牌放上備戰區時特性可附上1張基本能量，招式【風暴綠寶石】依自己場上所有寶可夢能量總數×50造成傷害，配合烈箭鷹EX、阿響的鳳王EX快速鋪滿能量，一擊昏厥二階EX寶可夢。",
    winConditions: [
      "超級烈空坐EX特性上場即可附上基本能量，加快起手速度",
      "招式【風暴綠寶石】依場上能量總數造成傷害，可昏厥3獎寶可夢",
      "烈箭鷹EX、阿響的鳳王EX協助鋪場與填能",
      "投入第二隻超級烈空坐EX分散風險",
      "多元工具怪：喵喵EX、吉雉雞EX、超級袋獸EX確保運作順暢",
    ],
    favorableSlugs: ["fossil-box", "wailord"],
    unfavorableSlugs: ["zoroark", "honchkrow"],
  },
  {
    slug: "toucannon",
    archetype: "後排鋪牌型",
    summary:
      "銃嘴大鳥特性【天空抽牌】每回合可抽1張卡，招式【羽翼亂舞】依雙方備戰寶可夢合計數量增加傷害，本身為非EX二階寶可夢，被昏厥只會被拿取1張獎賞卡，配合神奇糖果快速進化。",
    winConditions: [
      "銃嘴大鳥招式【羽翼亂舞】雙方備戰寶可夢越多傷害越高",
      "特性【天空抽牌】每回合抽1張卡維持手牌資源",
      "非EX寶可夢被昏厥只會被拿取1張獎賞卡，獎賞卡交換有優勢",
      "神奇糖果配合小光快速養成進化鏈",
      "多元工具怪：土龍軸、旋轉洛托姆、謝米確保運作順暢",
    ],
    favorableSlugs: ["fossil-box", "tera-box"],
    unfavorableSlugs: ["raging-bolt", "mega-metagross"],
  },
  {
    slug: "igglybuff",
    archetype: "鋪場型",
    summary:
      "寶寶丁為HP30的基礎寶可夢，招式【軟彈陣】只需1個能量，傷害為自己最大HP為30的備戰寶可夢數量×30，備戰區鋪滿5隻HP30寶可夢即可造成150傷害。",
    winConditions: [
      "備戰區鋪滿最大HP為30的寶可夢，寶寶丁招式【軟彈陣】可造成150傷害",
      "【軟彈陣】只需1個任意能量，填能需求低",
      "非EX寶可夢被昏厥只會被拿取1張獎賞卡",
      "HP只有30容易被針對，需持續補充HP30寶可夢維持傷害",
    ],
    favorableSlugs: [],
    unfavorableSlugs: [],
  },
  // 鋼系
  {
    slug: "archaludon",
    archetype: "高耐久控場型",
    summary:
      "鋁鋼橋龍EX從手牌進化時特性【合金構築】可將棄牌區最多2張基本能量附於場上寶可夢，招式【金屬防衛者】造成220傷害並使自己下回合不受弱點影響，配合300高HP兼具耐久與續航力。",
    winConditions: [
      "鋁鋼橋龍EX特性【合金構築】進化時快速完成填能需求",
      "招式【金屬防衛者】220傷害並使自身下回合不受弱點影響",
      "300高HP可撐過對手前期攻擊",
      "投入願增猿、超級大嘴娃EX作為輔助打手",
      "多元工具怪：喵喵EX、吉雉雞EX確保運作順暢",
    ],
    favorableSlugs: ["cinccino", "toucannon"],
    unfavorableSlugs: ["lucario", "garchomp"],
  },
  {
    slug: "dragon-diglett",
    archetype: "高火力主軸型",
    summary:
      "超級龍頭地鼠EX擁有340高HP，招式【極限鑽】基礎200傷害，能量比招式需求多2個時追加130傷害，最高330傷害，配合金屬怪特性【鋼鐵製造】快速填入鋼能量，屬於能扛能打的二階EX寶可夢。",
    winConditions: [
      "金屬怪特性【鋼鐵製造】快速將鋼能量填給超級龍頭地鼠EX",
      "超級龍頭地鼠EX招式【極限鑽】最高330傷害可昏厥3獎寶可夢",
      "招式【挖垮】2個鋼能量造成90傷害並磨掉對手牌庫上方2張卡",
      "能量回收器、超大冰淇淋維持續航力",
      "多元工具怪：吉雉雞EX、蓋諾賽克特EX確保運作順暢",
    ],
    favorableSlugs: ["mega-metagross", "aegislash"],
    unfavorableSlugs: ["ceruledge", "zoroark"],
  },
  {
    slug: "mega-metagross",
    archetype: "無上限打點型",
    summary:
      "超級巨金怪EX招式【機槍炮彈】傷害隨自身鋼能量數量增加且沒有上限，配合金屬怪特性快速填入鋼能量，能量堆疊越多傷害越高，適合作為後期收尾的主攻手。",
    winConditions: [
      "超級巨金怪EX持續疊加鋼能量，【機槍炮彈】傷害沒有上限",
      "能量充足後可昏厥大部分二階EX寶可夢",
      "能量回收器回收鋼能量持續輸出",
      "多元工具怪：喵喵EX、吉雉雞EX、謝米確保運作順暢",
    ],
    favorableSlugs: ["cinccino", "zoroark"],
    unfavorableSlugs: ["ceruledge", "lucario"],
  },
  {
    slug: "aegislash",
    archetype: "增傷核心型",
    summary:
      "雙劍鞘特性使場上超屬性與鋼屬性寶可夢招式對對手戰鬥寶可夢傷害增加30點，自身也能享有加成，配合蓋諾賽克特EX、厄鬼椪 水井面具EX等攻擊手縮短昏厥對手所需回合。",
    winConditions: [
      "雙劍鞘特性使超屬性、鋼屬性寶可夢傷害增加30點",
      "雙劍鞘本身在加成下也能造成約100傷害，兼具輔助與攻擊",
      "依對手牌組切換蓋諾賽克特EX、厄鬼椪 水井面具EX、拉帝亞斯EX等攻擊手",
      "支援者投入赤松、席蘭快速完成填能及鋪場需求",
      "多元工具怪：喵喵EX、吉雉雞EX、超級袋獸EX確保運作順暢",
    ],
    favorableSlugs: ["archaludon", "fossil-box"],
    unfavorableSlugs: ["zoroark", "honchkrow"],
  },
  {
    slug: "zamazenta-trevenant",
    archetype: "封鎖組合型",
    summary:
      "朽木妖特性【森林的詛咒】在戰鬥場時對手無法使用手牌中的物品卡，封鎖依賴物品卡運作的牌組；蒼響招式【強力衝撞】使攻擊自己的對手寶可夢身上放置等量傷害指示物，降低對手進攻意願。",
    winConditions: [
      "朽木妖特性【森林的詛咒】封鎖對手物品卡，拖延對手展開節奏",
      "蒼響招式【強力衝撞】反彈傷害指示物，使對手不敢貿然進攻",
      "牌組本身不依賴大量物品卡，物品卡封鎖不影響自身運作",
      "投入謝米保護備戰區、莉莉艾的皮皮EX針對龍系牌組",
    ],
    favorableSlugs: ["zoroark", "dark-box"],
    unfavorableSlugs: ["raging-bolt", "fossil-box"],
  },
  // 火系
  {
    slug: "ceruledge",
    archetype: "棄牌堆爆發型",
    summary:
      "蒼炎刃鬼EX招式【深淵之炎】只需1個能量，傷害隨自己棄牌區能量數量增加，配合太陽岩、月石與戰鬥鑼快速累積棄牌區能量，湊齊火、超、鋼能量後可使出【紫晶暴怒】直接造成280傷害。",
    winConditions: [
      "蒼炎刃鬼EX招式【深淵之炎】棄牌區每張能量增加20傷害，後期可造成300以上傷害",
      "太陽岩、月石配合戰鬥鑼快速將能量累積至棄牌區",
      "只需一階進化與少量能量即可攻擊，可快速建立節奏",
      "【紫晶暴怒】280傷害作為關鍵時刻的收尾手段",
      "多元工具怪：喵喵EX、吉雉雞EX確保運作順暢",
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
