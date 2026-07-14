import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  tierListMeta,
  TIER_LABEL,
  TIER_DESC,
  decksByTier,
  type Tier,
} from "@/data/tier-list";

const TIERS: Tier[] = ["T1", "T2", "T3"];

const TIER_ACCENT: Record<Tier, string> = {
  T1: "#8B5E3C",
  T2: "#8B5E3C",
  T3: "#8B5E3C",
};

export default function TierListPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <div className="border-l-4 border-[#E1C699] pl-6">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B5E3C]/50">
          環境情報
        </span>
        <h1 className="mt-2 font-serif text-3xl font-bold text-[#8B5E3C]">上位卡表</h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#8B5E3C]/80">
          彙整近期各大賽事的牌組使用率，依環境熱度分為一線、二線、三線，作為構築與購買前的
          參考依據。點擊牌組名稱可查看該牌組近期的上位戰績。
        </p>
      </div>

      {/* meta bar */}
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-lg border border-[#E1C699] bg-[#E1C699]/60 px-5 py-3 text-sm">
        <span className="text-[#8B5E3C]/70">
          賽制　<span className="font-medium text-[#8B5E3C]">{tierListMeta.formatLabel}</span>
        </span>
        <span className="text-[#8B5E3C]/70">
          最後更新　<span className="font-mono text-[#8B5E3C]">{tierListMeta.lastUpdated}</span>
        </span>
        <a
          href={tierListMeta.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#8B5E3C] hover:underline"
        >
          資料來源：{tierListMeta.source}
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
        </a>
      </div>

      {/* tier sections */}
      <div className="mt-10 space-y-12">
        {TIERS.map((tier) => {
          const decks = decksByTier(tier);
          const accent = TIER_ACCENT[tier];
          return (
            <section key={tier}>
              <div className="mb-4 flex items-baseline gap-3">
                <span
                  className="rounded-full px-3 py-1 font-mono text-xs font-semibold text-[#FFFDD0]"
                  style={{ backgroundColor: accent }}
                >
                  {tier}
                </span>
                <h2 className="font-serif text-xl font-bold text-[#8B5E3C]">
                  {TIER_LABEL[tier]}
                </h2>
                <span className="text-xs text-[#8B5E3C]/50">{TIER_DESC[tier]}</span>
              </div>

              <div className="divide-y divide-[#E1C699]/40 overflow-hidden rounded-lg border border-[#E1C699] bg-[#FFFDD0]">
                {decks.map((deck) => (
                  <div key={deck.rank} className="flex items-center gap-4 px-4 py-3">
                    <span className="w-7 shrink-0 font-mono text-sm text-[#8B5E3C]/40">
                      {deck.rank}
                    </span>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/tournament-results?deck=${deck.slug}`}
                        className="truncate font-medium text-[#8B5E3C] hover:underline"
                      >
                        {deck.nameZh}
                      </Link>
                      <p className="truncate text-xs text-[#8B5E3C]/50">{deck.nameEn}</p>
                    </div>
                    <div className="hidden w-32 shrink-0 sm:block">
                      <div className="h-1.5 overflow-hidden rounded-full bg-[#E1C699]/30">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.min(100, deck.share * 2)}%`,
                            backgroundColor: accent,
                          }}
                        />
                      </div>
                    </div>
                    <span className="w-16 shrink-0 text-right font-mono text-sm font-semibold text-[#8B5E3C]">
                      {deck.share.toFixed(2)}%
                    </span>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-12 rounded-lg border border-[#E1C699]/60 bg-[#E1C699]/50 p-5 text-xs leading-relaxed text-[#8B5E3C]/70">
        <p>
          以上數據彙整自 {tierListMeta.source}，僅反映擷取當下的賽事統計，非即時同步。中文
          牌組名稱為構築所編輯翻譯，部分人物名稱若尚未確認官方譯名會保留原文，如發現翻譯有
          誤歡迎回報。實際購買與構築請以最新賽事結果為準。
        </p>
      </div>
    </div>
  );
}
