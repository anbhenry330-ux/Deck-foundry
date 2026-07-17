import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { sortedResults, tournamentResults } from "@/data/tournament-results";
import { tierList } from "@/data/tier-list";
import { ResultCard } from "@/components/ResultCard";
import { DeckGlyph } from "@/components/DeckGlyph";

export default async function TournamentResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ deck?: string }>;
}) {
  const { deck: deckSlug } = await searchParams;
  const deck = deckSlug ? tierList.find((d) => d.slug === deckSlug) : undefined;

  if (!deck) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="border-l-4 border-[#D9CEB4] pl-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/50">
            環境情報
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold text-[#3C382F]">上位卡表</h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#3C382F]/80">
            點選牌組查看該牌組近期各賽事的上位入賞戰績與卡表。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {tierList.map((d) => (
            <Link
              key={d.slug}
              href={`/tournament-results?deck=${encodeURIComponent(d.slug)}`}
              className="group flex flex-col gap-2"
            >
              <DeckGlyph deck={d} />
              <div>
                <p className="font-serif text-sm font-bold leading-snug text-[#3C382F] group-hover:underline">
                  {d.nameZh}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const results = sortedResults(tournamentResults.filter((r) => r.deckSlug === deck.slug));

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <Link
        href="/tournament-results"
        className="inline-flex items-center gap-1 text-sm text-[#3C382F]/60 hover:text-[#3C382F]"
      >
        <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
        返回上位卡表
      </Link>

      <div className="mt-4 border-l-4 border-[#D9CEB4] pl-6">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/50">
          環境情報
        </span>
        <h1 className="mt-2 font-serif text-3xl font-bold text-[#3C382F]">
          {deck.nameZh}｜近期上位戰績
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#3C382F]/80">
          彙整各大賽事的上位入賞戰績，依賽事時間由新到舊排列，同一天則依名次排序。
        </p>
      </div>

      {results.length === 0 ? (
        <p className="mt-16 text-center text-sm text-[#3C382F]/60">目前尚無收錄的戰績資料。</p>
      ) : (
        <div className="mt-10 space-y-4">
          {results.map((result, i) => (
            <ResultCard key={`${result.player}-${result.date}-${i}`} result={result} />
          ))}
        </div>
      )}

      <div className="mt-10 rounded-lg border border-[#D9CEB4]/60 bg-[#D9CEB4]/50 p-5 text-xs leading-relaxed text-[#3C382F]/70">
        <p>
          戰績資料彙整自 Limitless TCG／Limitless Labs，選手名稱維持原文顯示，其餘資訊皆已中文化。
          若該場賽事官方尚未公開完整卡表，「卡表」欄位會顯示提示文字，並附上賽事戰績連結供查詢。
        </p>
      </div>
    </div>
  );
}
