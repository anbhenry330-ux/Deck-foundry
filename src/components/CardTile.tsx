import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { cardImageUrl, type DeckCard } from "@/data/deck-cards";

export function CardTile({ card, onClick }: { card: DeckCard; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`放大檢視 ${card.nameEn}`}
      className="group relative aspect-[5/7] cursor-zoom-in overflow-hidden rounded-lg border border-[#D9CEB4] bg-[#D9CEB4]/10 text-left"
    >
      <Image
        src={cardImageUrl(card, "MD")}
        alt={card.nameEn}
        fill
        sizes="(max-width: 640px) 33vw, (max-width: 1024px) 16vw, 120px"
        className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.04]"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity duration-200 group-hover:bg-black/20 group-hover:opacity-100">
        <ZoomIn className="h-6 w-6 text-white drop-shadow" strokeWidth={1.5} />
      </span>
    </button>
  );
}
