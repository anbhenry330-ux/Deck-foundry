import { Calendar, Trophy, User, Image as ImageIcon, ExternalLink } from "lucide-react";
import type { TournamentResult } from "@/data/tournament-results";

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

function placementLabel(placement: number) {
  const mod100 = placement % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${placement}th`;
  switch (placement % 10) {
    case 1:
      return `${placement}st`;
    case 2:
      return `${placement}nd`;
    case 3:
      return `${placement}rd`;
    default:
      return `${placement}th`;
  }
}

export function ResultCard({ result }: { result: TournamentResult }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#D9CEB4] bg-[#F2ECE0]">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto]">
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 p-5 text-sm">
          <dt className="flex items-center gap-1.5 text-[#3C382F]/50">
            <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
            大賽時間
          </dt>
          <dd className="font-mono font-medium text-[#3C382F]">{formatDate(result.date)}</dd>

          <dt className="flex items-center gap-1.5 text-[#3C382F]/50">
            <Trophy className="h-3.5 w-3.5" strokeWidth={1.5} />
            賽事名稱
          </dt>
          <dd className="text-[#3C382F]">
            {result.tournamentNameZh}
            <span className="ml-2 text-xs text-[#3C382F]/50">（{result.region}）</span>
          </dd>

          <dt className="flex items-center gap-1.5 text-[#3C382F]/50">
            <User className="h-3.5 w-3.5" strokeWidth={1.5} />
            選手
          </dt>
          <dd className="text-[#3C382F]">{result.player}</dd>

          <dt className="flex items-center gap-1.5 text-[#3C382F]/50">
            <Trophy className="h-3.5 w-3.5" strokeWidth={1.5} />
            名次
          </dt>
          <dd>
            <span className="inline-flex items-center rounded-full bg-[#3C382F]/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#3C382F]">
              {placementLabel(result.placement)}
            </span>
          </dd>
        </dl>

        {/* 卡表 */}
        <div className="flex flex-col items-center justify-center gap-2 border-t border-[#D9CEB4]/60 bg-[#D9CEB4]/40 p-5 sm:w-44 sm:border-l sm:border-t-0">
          <span className="self-start text-xs text-[#3C382F]/50 sm:self-center">卡表</span>
          {result.decklistUrl ? (
            <a
              href={result.decklistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 rounded-md border border-[#D9CEB4] bg-[#F2ECE0] px-4 py-3 text-xs font-medium text-[#3C382F] hover:bg-[#D9CEB4]"
            >
              <ImageIcon className="h-6 w-6" strokeWidth={1.25} />
              查看完整卡表
              <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
            </a>
          ) : (
            <div className="flex flex-col items-center gap-1.5 rounded-md border border-dashed border-[#D9CEB4] px-4 py-3 text-center text-xs text-[#3C382F]/50">
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
            className="text-[11px] text-[#3C382F]/50 hover:underline"
          >
            查看賽事戰績
          </a>
        </div>
      </div>
    </div>
  );
}
