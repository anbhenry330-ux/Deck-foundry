import { Calendar, Trophy, User, Image as ImageIcon, ExternalLink } from "lucide-react";
import type { TournamentResult } from "@/data/tournament-results";
import { tierList } from "@/data/tier-list";

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

function placementLabel(placement: number) {
  return `第 ${placement} 名`;
}

export function ResultCard({ result }: { result: TournamentResult }) {
  const deck = result.deckSlug ? tierList.find((d) => d.slug === result.deckSlug) : null;

  return (
    <div className="overflow-hidden rounded-lg border border-[#E1C699] bg-[#FFFDD0]">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto]">
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 p-5 text-sm">
          <dt className="flex items-center gap-1.5 text-[#8B5E3C]/50">
            <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
            大賽時間
          </dt>
          <dd className="font-mono font-medium text-[#8B5E3C]">{formatDate(result.date)}</dd>

          <dt className="flex items-center gap-1.5 text-[#8B5E3C]/50">
            <Trophy className="h-3.5 w-3.5" strokeWidth={1.5} />
            賽事名稱
          </dt>
          <dd className="text-[#8B5E3C]">
            {result.tournamentNameZh}
            <span className="ml-2 text-xs text-[#8B5E3C]/50">（{result.region}）</span>
          </dd>

          <dt className="flex items-center gap-1.5 text-[#8B5E3C]/50">
            <User className="h-3.5 w-3.5" strokeWidth={1.5} />
            選手
          </dt>
          <dd className="text-[#8B5E3C]">{result.player}</dd>

          <dt className="flex items-center gap-1.5 text-[#8B5E3C]/50">
            <Trophy className="h-3.5 w-3.5" strokeWidth={1.5} />
            名次
          </dt>
          <dd>
            <span className="inline-flex items-center rounded-full bg-[#8B5E3C]/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#8B5E3C]">
              {placementLabel(result.placement)}
            </span>
          </dd>

          {deck && (
            <>
              <dt className="text-[#8B5E3C]/50">牌組</dt>
              <dd className="text-[#8B5E3C]">{deck.nameZh}</dd>
            </>
          )}
        </dl>

        {/* 卡表 */}
        <div className="flex flex-col items-center justify-center gap-2 border-t border-[#E1C699]/60 bg-[#E1C699]/40 p-5 sm:w-44 sm:border-l sm:border-t-0">
          <span className="self-start text-xs text-[#8B5E3C]/50 sm:self-center">卡表</span>
          {result.decklistUrl ? (
            <a
              href={result.decklistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 rounded-md border border-[#E1C699] bg-[#FFFDD0] px-4 py-3 text-xs font-medium text-[#8B5E3C] hover:bg-[#E1C699]"
            >
              <ImageIcon className="h-6 w-6" strokeWidth={1.25} />
              查看完整卡表
              <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
            </a>
          ) : (
            <div className="flex flex-col items-center gap-1.5 rounded-md border border-dashed border-[#E1C699] px-4 py-3 text-center text-xs text-[#8B5E3C]/50">
              <ImageIcon className="h-6 w-6" strokeWidth={1.25} />
              官方尚未公開
              <br />
              完整卡表
            </div>
          )}
          <a
            href={result.standingsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#8B5E3C]/50 hover:underline"
          >
            查看賽事戰績
          </a>
        </div>
      </div>
    </div>
  );
}
