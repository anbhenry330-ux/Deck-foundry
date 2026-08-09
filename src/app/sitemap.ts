import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getProducts } from "@/lib/store";

const STATIC_ROUTE_PRIORITY: Record<string, number> = {
  "": 1,
  "/products": 0.9,
  "/deck-building": 0.7,
  "/tournament-results": 0.7,
  "/about": 0.5,
  "/order-guide": 0.5,
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const staticRoutes = Object.entries(STATIC_ROUTE_PRIORITY).map(([route, priority]) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" || route === "/products" ? "daily" : "weekly") as
      | "daily"
      | "weekly",
    priority,
  }));

  const productRoutes = products.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
