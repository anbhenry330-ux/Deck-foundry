import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Hammer,
  ShoppingBag,
  Wrench,
  ShieldCheck,
  MessagesSquare,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "關於我們",
  description:
    "構築所（Deck Foundry）品牌故事與經營理念：專營 PTCG 上位環境牌組即時供應、客製化訂製與完善售後服務，服務全臺各地玩家。",
};

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
    title: "上位牌組即時供應",
    desc: "參考國外各大賽事，即時構築最新環境強勢牌組，可直接下場比賽。",
  },
  {
    icon: ShoppingBag,
    title: "牌組周邊一應俱全",
    desc: "卡套、卡盒等周邊一應俱全，讓你不再為組牌擔憂。",
  },
  {
    icon: Wrench,
    title: "客製化服務",
    desc: "告知您的預算、需求或喜好牌組類型，我們將為您客製化牌組，無須額外付費即可享有良好組牌體驗。",
  },
  {
    icon: ShieldCheck,
    title: "品質全額保障",
    desc: "構築所的商品皆有品質保證，若商品送達後發現有受損或是缺少，可全額退款或更換商品。",
  },
  {
    icon: MessagesSquare,
    title: "完善的售後服務",
    desc: "買了後我們還在：牌組構築調整、對戰策略建議、賽場環境分析等售後服務免費提供。",
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
        <span
          className="block text-left text-xs tracking-[0.25em] text-[#3C382F]/50"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
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
            className={`-mb-px border-b-2 px-4 py-2.5 text-[16px] font-medium transition-colors ${
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
              <h2 className="font-serif text-xl font-bold text-[#3C382F]">創立起源</h2>
              <p className="mt-3 text-base leading-normal text-justify text-[#3C382F]/80">
                構築所成立於2024年12月，當時繁中版剛推出年底擴充卡包，收入大量牌料，構築所創辦人發現有大量玩家在抽到自己心儀的卡後，將剩餘的牌料便宜出售，就萌生出可利用玩家手中卡牌組成牌組想法，於是創辦了構築所，開始服務有組牌需求的訓練家，並解決收藏家需要花時間處理牌料的煩惱。
              </p>
              <h2 className="mt-6 font-serif text-xl font-bold text-[#3C382F]">品牌由來</h2>
              <p className="mt-3 text-base leading-normal text-justify text-[#3C382F]/80">
                「構築所」的名稱源於創辦人最初的核心理念——希望將玩家手中閒置的卡牌回收再利用，構築出嶄新的牌組。
              </p>
              <p className="mt-3 text-base leading-normal text-justify text-[#3C382F]/80">
                在發想過程中，創辦人聯想到英文的 Foundry（鑄造廠），象徵著熔煉、改造與新生。以此為概念延伸，最終轉化為帶有職人手作與日式美學風格的「構築所」，寓意在此被重新琢磨、精準構築，淬煉出獨一無二的對戰力量。
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
                以客戶為中心，實現利他主義
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#3C382F]/80">
                秉持「客戶至上」的服務理念，深入理解每位訓練家的真實需求，促進PTCG市場發展。
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#3C382F]/80">
                根據客戶的的需求及偏好，透過構築所擁有的資源，協助客戶構築完整的牌組，並提供組牌建議、牌組構築、周邊販售、售後服務等一條龍服務，打造良好的組牌體驗。
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-[#3C382F]">創新創意</h2>
              <p className="mt-3 text-base leading-relaxed text-[#3C382F]/80">
                為因應不斷變化的賽場環境及每年年初的退標機制，構築所販售的牌組皆是現環境版本，可直接用於比賽，並參考國外各大賽事上位卡表優化構築出具創新創意的牌組。
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
                  <p className="mt-2.5 text-base leading-relaxed text-[#3C382F]/75">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
