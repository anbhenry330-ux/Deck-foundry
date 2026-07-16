import Image from "next/image";
import { Sparkles } from "lucide-react";
import type { TierDeck } from "@/data/tier-list";

export function DeckGlyph({
  deck,
  className = "",
  sizes = "(max-width: 768px) 50vw, 20vw",
}: {
  deck: Pick<TierDeck, "nameZh" | "image">;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-md border border-[#D9CEB4] bg-[#D9CEB4]/20 ${className}`}
    >
      {deck.image ? (
        <Image
          src={deck.image}
          alt={deck.nameZh}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
      ) : (
        <div className="flex flex-col items-center gap-1.5 text-[#3C382F]/35">
          <Sparkles className="h-6 w-6" strokeWidth={1.25} />
          <span className="text-[11px]">圖片準備中</span>
        </div>
      )}
    </div>
  );
}
