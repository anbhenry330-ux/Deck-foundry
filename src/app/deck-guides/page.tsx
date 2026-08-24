import Link from "next/link";
import type { Metadata } from "next";
import { ChevronLeft, Swords, ShieldAlert, ShieldCheck } from "lucide-react";
import { DECK_TYPE_ORDER, tierList } from "@/data/tier-list";
import { getDeckGuide, guidedDecks } from "@/data/deck-guides";
import { DeckGlyph } from "@/components/DeckGlyph";
import { SITE_URL } from "@/lib/site";

const TITLE = "牌組攻略";
const DESCRIPTION =
  "PTCG 環境牌組攻略，解析各牌組的核心打法、致勝關鍵，以及有利／不利對局，幫助訓練家擬定對戰策略。";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ deck?: string }>;
}): Promise<Metadata> {
  const { deck: deckSlug } = await searchParams;
  const deck = deckSlug ? tierList.find((d) => d.slug === deckSlug) : undefined;
  const guide = deckSlug ? getDeckGuide(deckSlug) : undefined;

  if (!deck || !guide) {
    return {
      title: TITLE,
      description: DESCRIPTION,
      keywords: ["PTCG牌組攻略", "對戰策略", "環境牌組打法", "寶可夢對戰攻略"],
      alternates: { canonical: `${SITE_URL}/deck-guides` },
      openGraph: {
        title: `${TITLE}｜構築所 Deck Foundry`,
        description: DESCRIPTION,
        url: `${SITE_URL}/deck-guides`,
        images: [{ url: "/cover.png", width: 1600, height: 900 }],
      },
      twitter: {
        card: "summary_large_image",
        title: `${TITLE}｜構築所 Deck Foundry`,
        description: DESCRIPTION,
        images: ["/cover.png"],
      },
    };
  }

  const deckTitle = `${deck.nameZh}攻略｜對戰策略與致勝關鍵`;
  const deckDescription = `${deck.nameZh}屬於 PTCG ${deck.type}${guide.archetype}牌組。${guide.summary}`;
  const canonicalUrl = `${SITE_URL}/deck-guides?deck=${encodeURIComponent(deck.slug)}`;

  return {
    title: deckTitle,
    description: deckDescription,
    keywords: [deck.nameZh, `PTCG ${deck.nameZh}攻略`, "PTCG對戰策略", "牌組攻略"],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${deckTitle}｜構築所 Deck Foundry`,
      description: deckDescription,
      url: canonicalUrl,
      images: [{ url: "/cover.png", width: 1600, height: 900 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${deckTitle}｜構築所 Deck Foundry`,
      description: deckDescription,
      images: ["/cover.png"],
    },
  };
}

function MatchupPill({ slug }: { slug: string }) {
  const deck = tierList.find((d) => d.slug === slug);
  if (!deck) return null;
  return (
    <Link
      href={`/deck-guides?deck=${encodeURIComponent(deck.slug)}`}
      className="inline-flex items-center gap-1.5 rounded-full border border-[#D9CEB4] bg-[#FBF8F1] px-3 py-1.5 text-sm text-[#3C382F]/85 transition-colors hover:border-[#3C382F]/40 hover:bg-[#D9CEB4]/20"
    >
      {deck.nameZh}
    </Link>
  );
}

export default async function DeckGuidesPage({
  searchParams,
}: {
  searchParams: Promise<{ deck?: string }>;
}) {
  const { deck: deckSlug } = await searchParams;
  const deck = deckSlug ? tierList.find((d) => d.slug === deckSlug) : undefined;
  const guide = deckSlug ? getDeckGuide(deckSlug) : undefined;

  if (!deck || !guide) {
    const decks = guidedDecks();
    return (
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="border-l-4 border-[#D9CEB4] pl-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/50">
            對戰策略
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold text-[#3C382F]">牌組攻略</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#3C382F]/80">
            點擊牌組查看核心打法、致勝關鍵，以及有利／不利對局分析，攻略持續收錄中。
          </p>
        </div>

        {DECK_TYPE_ORDER.map((type) => {
          const typeDecks = decks.filter((d) => d.type === type);
          if (typeDecks.length === 0) return null;
          return (
            <div key={type} className="mt-12 first:mt-10">
              <h2 className="font-serif text-xl font-bold text-[#3C382F]">{type}牌組</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {typeDecks.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/deck-guides?deck=${encodeURIComponent(d.slug)}`}
                    className="group flex flex-col gap-2"
                  >
                    <DeckGlyph deck={d} />
                    <div>
                      <p className="font-serif text-base font-bold leading-snug text-[#3C382F] group-hover:underline">
                        {d.nameZh}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {decks.length === 0 && (
          <p className="mt-16 text-center text-base text-[#3C382F]/60">攻略內容準備中，敬請期待。</p>
        )}
      </div>
    );
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "牌組攻略", item: `${SITE_URL}/deck-guides` },
      {
        "@type": "ListItem",
        position: 2,
        name: deck.nameZh,
        item: `${SITE_URL}/deck-guides?deck=${encodeURIComponent(deck.slug)}`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Link
        href="/deck-guides"
        className="inline-flex items-center gap-1 text-sm text-[#3C382F]/60 hover:text-[#3C382F]"
      >
        <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
        返回牌組攻略
      </Link>

      <div className="mt-4 flex items-start gap-5">
        <div className="hidden w-28 shrink-0 sm:block">
          <DeckGlyph deck={deck} sizes="112px" />
        </div>
        <div className="border-l-4 border-[#D9CEB4] pl-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/50">
            對戰策略 · {deck.type}牌組 · {guide.archetype}
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold text-[#3C382F]">{deck.nameZh}</h1>
          <p className="mt-3 text-base leading-relaxed text-[#3C382F]/80">{guide.summary}</p>
          <Link
            href={`/tournament-results?deck=${encodeURIComponent(deck.slug)}`}
            className="mt-3 inline-block text-sm font-medium text-[#3C382F]/70 underline decoration-[#D9CEB4] decoration-2 underline-offset-4 hover:text-[#3C382F]"
          >
            查看該牌組上位戰績與卡表 →
          </Link>
        </div>
      </div>

      <div className="mt-10 rounded-lg border border-[#D9CEB4] bg-[#D9CEB4]/15 p-6">
        <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-[#3C382F]">
          <Swords className="h-5 w-5" strokeWidth={1.5} />
          致勝關鍵
        </h2>
        <ul className="mt-3 space-y-2 text-base leading-relaxed text-[#3C382F]/85">
          {guide.winConditions.map((point, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3C382F]/40" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-[#D9CEB4]/60 p-5">
          <h2 className="flex items-center gap-2 font-serif text-base font-bold text-[#3C382F]">
            <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
            有利對局
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {guide.favorableSlugs.length > 0 ? (
              guide.favorableSlugs.map((slug) => <MatchupPill key={slug} slug={slug} />)
            ) : (
              <p className="text-sm text-[#3C382F]/50">資料整理中</p>
            )}
          </div>
        </div>
        <div className="rounded-lg border border-[#D9CEB4]/60 p-5">
          <h2 className="flex items-center gap-2 font-serif text-base font-bold text-[#3C382F]">
            <ShieldAlert className="h-4 w-4" strokeWidth={1.5} />
            不利對局
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {guide.unfavorableSlugs.length > 0 ? (
              guide.unfavorableSlugs.map((slug) => <MatchupPill key={slug} slug={slug} />)
            ) : (
              <p className="text-sm text-[#3C382F]/50">資料整理中</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-lg border border-[#D9CEB4]/60 bg-[#D9CEB4]/50 p-5 text-base leading-relaxed text-[#3C382F]/70">
        <p>
          以上攻略為牌組打法通則分析，實際對局仍會依起手、對手構築細節而有變化，建議搭配上位卡表的實戰牌譜一併參考。
        </p>
      </div>
    </div>
  );
}

export const revalidate = 3600;
