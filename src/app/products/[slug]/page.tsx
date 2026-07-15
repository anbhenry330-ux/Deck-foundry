import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products } from "@/data/products";
import { DecklistViewer } from "@/components/DecklistViewer";
import { OrderCTA } from "@/components/OrderCTA";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <nav className="mb-8 font-mono text-xs text-[#3C382F]/50">
        <Link href="/products" className="hover:underline">
          商品目錄
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/products?category=${encodeURIComponent(product.category)}`}
          className="hover:underline"
        >
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#3C382F]/70">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <DecklistViewer
            src={product.image}
            alt={`${product.name}｜完整卡表`}
            width={product.imageWidth}
            height={product.imageHeight}
            lot={product.lot}
            inStock={product.inStock}
          />
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#3C382F]/50">
            {product.category} · LOT {product.lot}
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-[#3C382F]">
            {product.name}
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-[#3C382F]/80">
            {product.tagline}
          </p>

          <div className="mt-6">
            <OrderCTA product={product} />
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-serif text-xl font-bold text-[#3C382F]">商品說明</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#3C382F]/80">
            {product.description}
          </p>
        </div>
        <div>
          <h2 className="font-serif text-xl font-bold text-[#3C382F]">規格</h2>
          <dl className="mt-4 divide-y divide-[#D9CEB4]/40 rounded-md border border-[#D9CEB4]">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between px-4 py-2.5 text-sm">
                <dt className="text-[#3C382F]/60">{spec.label}</dt>
                <dd className="text-right font-medium text-[#3C382F]">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16 border-t border-[#D9CEB4] pt-10">
          <h2 className="mb-6 font-serif text-xl font-bold text-[#3C382F]">同類商品</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
