import { sortedResults, tournamentResults } from "@/data/tournament-results";
import { tierList } from "@/data/tier-list";
import { ResultCard } from "@/components/ResultCard";

export default async function TournamentResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ deck?: string }>;
}) {
  const { deck: deckSlug } = await searchParams;
  const deck = deckSlug ? tierList.find((d) => d.slug === deckSlug) : undefined;
  const results = sortedResults(
    deck ? tournamentResults.filter((r) => r.deckSlug === deck.slug) : tournamentResults
  );

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <div className="border-l-4 border-[#E1C699] pl-6">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B5E3C]/50">
          環境情報
        </span>
        <h1 className="mt-2 font-serif text-3xl font-bold text-[#8B5E3C]">
          {deck ? `${deck.nameZh}｜近期上位戰績` : "近期上位戰績"}
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#8B5E3C]/80">
          彙整各大賽事的上位入賞戰績，依賽事時間由新到舊排列，同一天則依名次排序。
        </p>
      </div>

      {results.length === 0 ? (
        <p className="mt-16 text-center text-sm text-[#8B5E3C]/60">目前尚無收錄的戰績資料。</p>
      ) : (
        <div className="mt-10 space-y-4">
          {results.map((result, i) => (
            <ResultCard key={`${result.player}-${result.date}-${i}`} result={result} />
          ))}
        </div>
      )}

      <div className="mt-10 rounded-lg border border-[#E1C699]/60 bg-[#E1C699]/50 p-5 text-xs leading-relaxed text-[#8B5E3C]/70">
        <p>
          戰績資料彙整自 Limitless TCG／Limitless Labs，選手名稱維持原文顯示，其餘資訊皆已中文化。
          若該場賽事官方尚未公開完整卡表，「卡表」欄位會顯示提示文字，並附上賽事戰績連結供查詢。
        </p>
      </div>
    </div>
  );
}
