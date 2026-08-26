import Image from "next/image";
import { cardImageUrl, type DeckCard } from "@/data/deck-cards";

export function CardTile({ card }: { card: DeckCard }) {
  return (
    <div className="group relative aspect-[5/7] overflow-hidden rounded-lg border border-[#D9CEB4] bg-[#D9CEB4]/10">
      <Image
        src={cardImageUrl(card.set, card.number, "MD")}
        alt={card.nameEn}
        fill
        sizes="(max-width: 640px) 33vw, (max-width: 1024px) 16vw, 120px"
        className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.04]"
      />
    </div>
  );
}
