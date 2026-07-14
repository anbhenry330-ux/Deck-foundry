import { ExternalLink, Truck } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/data/products";
import { formatTWD } from "@/lib/format";

export function OrderCTA({ product }: { product: Product }) {
  const soldOut = !product.inStock;

  return (
    <div className="rounded-lg border border-[#E1C699] bg-[#FFFDD0] p-6">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-2xl font-bold text-[#8B5E3C]">
          {formatTWD(product.price)}
        </span>
        <span className="text-xs text-[#8B5E3C]/60">
          {soldOut ? "已售罄" : "有庫存"}
        </span>
      </div>

      <a
        href={soldOut ? undefined : product.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={soldOut}
        className={`mt-5 flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-opacity ${
          soldOut
            ? "pointer-events-none bg-[#8B5E3C]/20 text-[#8B5E3C]/50"
            : "bg-[#8B5E3C] text-[#FFFDD0] hover:opacity-90"
        }`}
      >
        {soldOut ? "已售罄" : "前往賣貨便下單"}
        {!soldOut && <ExternalLink className="h-4 w-4" strokeWidth={1.5} />}
      </a>

      <div className="mt-4 flex items-start gap-2 rounded-md bg-[#E1C699] px-3 py-2.5 text-xs leading-relaxed text-[#8B5E3C]/70">
        <Truck className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
        <span>
          點擊後會跳轉到賣貨便賣場總覽頁，在頁面上點開「{product.name}」即可下單，支援貨到付款。
        </span>
      </div>

      <Link
        href="/order-guide"
        className="mt-3 block text-center text-xs font-medium text-[#8B5E3C]/60 underline-offset-2 hover:text-[#8B5E3C] hover:underline"
      >
        第一次購買？查看下單教學與防詐提醒
      </Link>
    </div>
  );
}
