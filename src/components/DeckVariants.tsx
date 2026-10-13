"use client";

import { useState } from "react";
import { GitBranch } from "lucide-react";
import type { DeckVariant } from "@/data/deck-variants";

export function DeckVariants({ variants }: { variants: DeckVariant[] }) {
  const [active, setActive] = useState(0);
  const variant = variants[active] ?? variants[0];

  return (
    <div className="mt-10">
      <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-[#3C382F]">
        <GitBranch className="h-5 w-5" strokeWidth={1.5} />
        構築軸向
      </h2>
      <p className="mt-1 text-sm text-[#3C382F]/60">
        依上位卡表的副軸搭配分類，每個軸向列出一份代表卡表。
      </p>

      {variants.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-2" role="tablist">
          {variants.map((v, i) => (
            <button
              key={v.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                i === active
                  ? "border-[#3C382F] bg-[#3C382F] text-[#FBF8F1]"
                  : "border-[#D9CEB4] bg-[#FBF8F1] text-[#3C382F]/80 hover:border-[#3C382F]/40"
              }`}
            >
              {v.name}
              <span className="ml-1.5 text-xs opacity-60">{v.listCount}</span>
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 rounded-lg border border-[#D9CEB4]/60 p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-serif text-base font-bold text-[#3C382F]">{variant.name}代表卡表</h3>
          <a
            href={`https://ptcgtw.shop/?s=${variant.code}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#3C382F]/70 underline decoration-[#D9CEB4] decoration-2 underline-offset-4 hover:text-[#3C382F]"
          >
            開啟卡表 {variant.code} →
          </a>
        </div>
        <p className="mt-1 text-sm text-[#3C382F]/60">
          {variant.date} · {variant.event}
          {variant.placement !== null && ` · 第 ${variant.placement} 名`}
          {variant.player !== "無" && ` · ${variant.player}`}
          {` · 收錄 ${variant.listCount} 份同軸向卡表`}
        </p>

        <div className="mt-4 grid gap-5 sm:grid-cols-3">
          {variant.groups.map((group) => (
            <div key={group.category}>
              <h4 className="text-sm font-semibold text-[#3C382F]/70">
                {group.category}（{group.cards.reduce((sum, c) => sum + c.qty, 0)} 張）
              </h4>
              <ul className="mt-2 space-y-1 text-sm text-[#3C382F]/85">
                {group.cards.map((card) => (
                  <li key={card.name} className="flex gap-2">
                    <span className="w-5 shrink-0 text-right font-mono text-[#3C382F]/50">{card.qty}</span>
                    <span>{card.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
