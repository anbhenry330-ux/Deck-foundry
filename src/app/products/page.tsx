import Link from "next/link";
import { products, type ProductCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const CATEGORIES: ProductCategory[] = ["牌組", "卡套"];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = CATEGORIES.includes(category as ProductCategory)
    ? (category as ProductCategory)
    : undefined;

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="border-l-4 border-[#D9CEB4] pl-6">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/50">
          商品目錄
        </span>
        <h1 className="mt-2 font-serif text-3xl font-bold text-[#3C382F]">
          {activeCategory ? activeCategory : "全部商品"}
        </h1>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/products"
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            !activeCategory
              ? "border-[#3C382F] bg-[#3C382F] text-[#F2ECE0]"
              : "border-[#D9CEB4] text-[#3C382F] hover:bg-[#D9CEB4]"
          }`}
        >
          全部
        </Link>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={`/products?category=${encodeURIComponent(cat)}`}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "border-[#3C382F] bg-[#3C382F] text-[#F2ECE0]"
                : "border-[#D9CEB4] text-[#3C382F] hover:bg-[#D9CEB4]"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-[#3C382F]/60">
          目前此分類尚無上架商品，換個分類看看吧。
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
