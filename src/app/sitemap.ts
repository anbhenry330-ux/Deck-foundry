import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getProducts } from "@/lib/store";
import { tierList } from "@/data/tier-list";
import { tournamentResults } from "@/data/tournament-results";

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

  const decksWithResults = new Set(tournamentResults.map((r) => r.deckSlug).filter(Boolean));
  const tournamentDeckRoutes = tierList
    .filter((deck) => decksWithResults.has(deck.slug))
    .map((deck) => ({
      url: `${SITE_URL}/tournament-results?deck=${encodeURIComponent(deck.slug)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...productRoutes, ...tournamentDeckRoutes];
}
