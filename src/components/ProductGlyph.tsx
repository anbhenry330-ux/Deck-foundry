import Image from "next/image";
import type { Product } from "@/data/products";

export function ProductGlyph({
  product,
  className = "",
  sizes = "(max-width: 768px) 100vw, 25vw",
}: {
  product: Pick<Product, "name" | "lot" | "image" | "inStock">;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`relative aspect-[16/9] w-full overflow-hidden rounded-md border border-[#E1C699] bg-[#E1C699]/20 ${className}`}
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes={sizes}
        className="object-cover"
      />

      {!product.inStock && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70">
          <span className="rounded-full bg-[#8B5E3C] px-3 py-1 text-xs font-semibold text-white">
            已售罄
          </span>
        </div>
      )}

      {/* foundry batch-stamp corner tab */}
      <div className="absolute right-0 top-0 flex flex-col items-end gap-0.5 border-b border-l border-[#E1C699] bg-white/90 px-2.5 py-1.5 backdrop-blur-sm">
        <span className="font-mono text-[9px] uppercase tracking-wider text-[#8B5E3C]/60">
          LOT {product.lot}
        </span>
      </div>
    </div>
  );
}
