import Link from "next/link";
import Image from "next/image";
import {
  Hammer,
  ShoppingBag,
  Wrench,
  ShieldCheck,
  MessagesSquare,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const TABS = [
  { key: "story", label: "品牌故事", sub: "Our Story" },
  { key: "philosophy", label: "經營理念", sub: "Our Philosophy" },
  { key: "advantages", label: "優勢特色", sub: "Why Us" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

function isTabKey(value: string | undefined): value is TabKey {
  return TABS.some((t) => t.key === value);
}

const ADVANTAGES = [
  {
    icon: Hammer,
    title: "上位環境牌組即時供應",
    desc: "緊盯日本上位環境的比賽結果與牌表變化，把當下真正在贏的主流、強勢牌組現貨供應，同時販售構築常用的核心牌料。",
  },
  {
    icon: ShoppingBag,
    title: "牌組周邊一應俱全",
    desc: "卡套、對戰墊、收納卡冊等周邊一應俱全，讓你的牌組從裡到外都準備齊全。",
  },
  {
    icon: Wrench,
    title: "客製化訂製服務",
    desc: "告訴我們你手上有什麼、預算多少、想打什麼風格，構築所依需求客製組牌，價格實惠不加價。",
  },
  {
    icon: ShieldCheck,
    title: "品質全額保障",
    desc: "任何在構築所購買的商品皆有保障：若商品送達後有缺卡或嚴重受損，可全額退款或更換商品。",
  },
  {
    icon: MessagesSquare,
    title: "售後全程陪伴",
    desc: "買了之後我們還在：對戰策略詢問、構築調整回饋、賽場環境趨勢分析，一路陪你打到下一場比賽。",
  },
];

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const activeTab: TabKey = isTabKey(tab) ? tab : "story";
  const active = TABS.find((t) => t.key === activeTab)!;

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-[#3C382F]/50">
        <Link href="/" className="hover:text-[#3C382F]">
          首頁
        </Link>
        <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
        <span className="text-[#3C382F]">關於我們</span>
        <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
        <span className="text-[#3C382F]">{active.label}</span>
      </nav>

      {/* Page title */}
      <Reveal mode="load" className="mt-6 border-l-4 border-[#D9CEB4] pl-6">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/50">
          {active.sub}
        </span>
        <h1 className="mt-2 font-serif text-3xl font-bold text-[#3C382F]">{active.label}</h1>
      </Reveal>

      {/* Tab nav */}
      <div className="mt-8 flex flex-wrap gap-2 border-b border-[#D9CEB4]/70">
        {TABS.map((t) => (
          <Link
            key={t.key}
            href={`/about?tab=${t.key}`}
            className={`-mb-px border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
              activeTab === t.key
                ? "border-[#3C382F] text-[#3C382F]"
                : "border-transparent text-[#3C382F]/50 hover:text-[#3C382F]"
            }`}
          >
            {t.label}
          </Link>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-12">
        {activeTab === "story" && (
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <p className="text-[15px] leading-relaxed text-[#3C382F]/80">
                構築所成立的初衷，是看不慣坊間牌組代購資訊不透明、缺卡漏配求助無門的亂象。我們相信「組牌」這件事該回歸單純：訓練家只要專心研究環境、思考構築，其餘的貨源、品質、售後都交給我們。
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#3C382F]/80">
                秉持「牌組即戰力，服務即保障」的理念，構築所專注於 Pokémon TCG
                牌組構築——鎖定日本上位環境的主流、強勢牌組及牌料現貨供應，同時販售牌組周邊，並提供客製化訂製，價格實惠、下單最快可當日寄出。
              </p>
            </Reveal>
            <Reveal delay={100} className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/cover.png"
                alt="構築所工作桌：牌組整理、卡表分析與出貨作業的日常"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        )}

        {activeTab === "philosophy" && (
          <Reveal className="max-w-2xl space-y-8">
            <div>
              <h2 className="font-serif text-xl font-bold text-[#3C382F]">
                以訓練家為中心，緊貼賽場脈動
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3C382F]/80">
                秉持「牌組即戰力」的服務理念，深入理解每位訓練家的真實需求——不是隨便找一副能打的牌組，而是根據手牌、預算與想打的風格，找到最適合的構築。我們同步日本上位環境的最新戰績與牌表，確保上架的每一副牌組都禁得起賽場考驗。
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-[#3C382F]">誠信優質</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3C382F]/80">
                價格實惠、不加價，商品來源與庫存狀態誠實透明。良好的購物體驗來自對訓練家需求的深度理解，構築所所有商品皆提供全額保障，缺卡或嚴重受損可全額退款或更換。
              </p>
            </div>
          </Reveal>
        )}

        {activeTab === "advantages" && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div className="h-full rounded-xl border border-[#D9CEB4] bg-[#FBF8F1] p-7">
                  <a.icon className="h-8 w-8 text-[#3C382F]" strokeWidth={1.25} />
                  <h3 className="mt-4 font-serif text-lg font-bold text-[#3C382F]">{a.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#3C382F]/75">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
