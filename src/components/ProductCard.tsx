import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";
import { ProductGlyph } from "./ProductGlyph";
import { formatTWD } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-[#E1C699] bg-[#FFFFFF] transition-shadow hover:shadow-[0_10px_30px_-14px_rgba(139,94,60,0.4)]">
      <Link href={`/products/${product.slug}`}>
        <ProductGlyph product={product} className="rounded-none border-0 border-b" />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8B5E3C]/50">
          {product.category}
        </span>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif text-lg font-bold leading-snug text-[#8B5E3C] group-hover:underline">
            {product.name}
          </h3>
        </Link>
        <p className="line-clamp-2 text-sm text-[#8B5E3C]/70">{product.tagline}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-mono text-base font-semibold text-[#8B5E3C]">
            {formatTWD(product.price)}
          </span>
          <span className="text-xs text-[#8B5E3C]/50">
            {product.inStock ? "有庫存" : "已售罄"}
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <a
            href={product.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-md bg-[#8B5E3C] px-3 py-2 text-xs font-semibold text-[#FFFDD0] transition-opacity hover:opacity-90"
          >
            前往賣貨便下單
            <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
          </a>
          <Link
            href={`/products/${product.slug}`}
            className="flex items-center justify-center rounded-md border border-[#E1C699] px-3 py-2 text-xs font-medium text-[#8B5E3C] transition-colors hover:bg-[#E1C699]"
          >
            詳情
          </Link>
        </div>
      </div>
    </div>
  );
}
