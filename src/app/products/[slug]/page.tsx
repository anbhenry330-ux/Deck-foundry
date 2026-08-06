import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getProductBySlug, getProducts } from "@/lib/store";
import { DecklistViewer } from "@/components/DecklistViewer";
import { OrderCTA } from "@/components/OrderCTA";
import { ProductCard } from "@/components/ProductCard";
import { SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};

  const description = product.tagline || product.description;
  return {
    title: product.name,
    description,
    keywords: [product.name, product.category, "PTCG牌組", "寶可夢卡牌購買"],
    alternates: { canonical: `${SITE_URL}/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "TWD",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${SITE_URL}/products/${product.slug}`,
    },
  };

  const products = await getProducts();
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <nav className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-[#3C382F]/50">
        <Link href="/products" className="shrink-0 hover:underline">
          商品目錄
        </Link>
        <span className="shrink-0">/</span>
        <Link
          href={`/products?category=${encodeURIComponent(product.category)}`}
          className="shrink-0 hover:underline"
        >
          {product.category}
        </Link>
        <span className="shrink-0">/</span>
        <span className="min-w-0 flex-1 truncate text-[#3C382F]/70">{product.name}</span>
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
          {product.tagline && (
            <p className="mt-3 text-base leading-relaxed text-[#3C382F]/80">
              {product.tagline}
            </p>
          )}

          <div className="mt-6">
            <OrderCTA product={product} />
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-serif text-xl font-bold text-[#3C382F]">商品說明</h2>
          <p className="mt-4 text-base leading-relaxed text-[#3C382F]/80">
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
