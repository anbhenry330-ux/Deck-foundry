"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LayoutGrid, X } from "lucide-react";
import {
  cardImageUrl,
  deckCardGroupTotal,
  type DeckCard,
  type DeckCardGroup,
} from "@/data/deck-cards";
import { CardTile } from "@/components/CardTile";

export function DeckCardShowcase({ cardGroups }: { cardGroups: DeckCardGroup[] }) {
  const [zoomed, setZoomed] = useState<DeckCard | null>(null);

  useEffect(() => {
    if (!zoomed) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setZoomed(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomed]);

  return (
    <div className="mt-10">
      <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-[#3C382F]">
        <LayoutGrid className="h-5 w-5" strokeWidth={1.5} />
        可投入卡牌
      </h2>
      <p className="mt-1 text-sm text-[#3C382F]/60">完整構築卡表，逐張卡片列出，點擊卡圖可放大檢視卡面文字。</p>

      {cardGroups.map((group) => (
        <div key={group.category} className="mt-6">
          <h3 className="text-sm font-semibold text-[#3C382F]/70">
            {group.category}（{deckCardGroupTotal(group)} 張）
          </h3>
          <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {group.cards.map((card) => (
              <CardTile
                key={`${card.set}-${card.number}`}
                card={card}
                onClick={() => setZoomed(card)}
              />
            ))}
          </div>
        </div>
      ))}

      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setZoomed(null)}
        >
          <button
            type="button"
            onClick={() => setZoomed(null)}
            aria-label="關閉"
            className="absolute right-4 top-4 text-white/80 transition-colors hover:text-white"
          >
            <X className="h-8 w-8" strokeWidth={1.5} />
          </button>
          <div
            className="relative max-h-[85vh] w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={cardImageUrl(zoomed, "LG")}
              alt={zoomed.nameEn}
              width={660}
              height={924}
              sizes="(max-width: 640px) 90vw, 384px"
              className="h-auto w-full rounded-lg object-contain shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
