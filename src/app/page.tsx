import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Hammer,
  ShoppingBag,
  Wrench,
  Send,
  TrendingUp,
  Trophy,
  Users,
  Layers,
} from "lucide-react";
import { getProducts } from "@/lib/store";
import { tierList } from "@/data/tier-list";
import { sortedResults } from "@/data/tournament-results";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { CountUpStat } from "@/components/CountUpStat";
import { HeroCarousel, type HeroSlide } from "@/components/HeroCarousel";
import { FaqAccordion } from "@/components/FaqAccordion";
import { DeckGlyph } from "@/components/DeckGlyph";

const LINE_URL = "https://line.me/R/ti/p/@881idjjb";
const FB_URL = "https://www.facebook.com/profile.php?id=61584390375051&locale=zh_TW";

const TICKER = [
  "日本上位環境牌組",
  "下單最快可當日寄出",
  "滿額免運活動持續中",
  "牌組周邊現貨供應",
  "客製化 x 價格實惠",
];

const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/cover.png",
    alt: "構築所工作桌：牌組整理、卡表分析與出貨作業的日常",
    title: "把手中的卡牌，\n構築成專屬於你的牌組",
    desc: "構築所－讓您不再為組牌擔憂",
    ctaLabel: "瀏覽本期牌組",
    ctaHref: "/products",
  },
];

const CATEGORY_LINKS: {
  icon: typeof Hammer;
  image?: string;
  imageAspect?: string;
  imageFit?: "cover" | "contain";
  panelBg?: string;
  title: string;
  en: string;
  desc: string;
}[] = [
  {
    icon: Hammer,
    image: "/service-deck-building.jpg",
    imageAspect: "1907 / 858",
    panelBg: "#EFEADF",
    title: "牌組構築",
    en: "Deck Building",
    desc: "參考各國大賽上位卡表，依照賽場環境構築出各式強勢牌組，提供給訓練家選購。",
  },
  {
    icon: TrendingUp,
    image: "/service-card-buyback.jpg",
    imageAspect: "2056 / 795",
    panelBg: "#EFEADF",
    title: "牌料買取",
    en: "Card Buyback",
    desc: "大量收購實用牌料，讓你手中的卡牌變現，收購價格實惠公道，立即私訊問價。",
  },
  {
    icon: ShoppingBag,
    image: "/service-accessories.jpg",
    imageAspect: "1907 / 858",
    panelBg: "#EFEADF",
    title: "周邊販售",
    en: "Accessories",
    desc: "卡套、卡盒等周邊不定時優惠，立即選購，滿足您打牌時的一切需求。",
  },
  {
    icon: Wrench,
    image: "/service-custom-deck.jpg",
    imageAspect: "1907 / 858",
    panelBg: "#EFEADF",
    title: "客製化牌組",
    en: "Custom Deck",
    desc: "可以照您的預算及需求，為您客製化牌組，無須加價，可立即私訊詢問。",
  },
];

const DELIVERY = [
  { image: "/payment/maihuobian.png", label: "超商取貨", value: "賣貨便" },
  { image: "/payment/cod.png", label: "付款方式", value: "貨到付款" },
  { image: "/payment/mrt-meetup.png", label: "面交地點", value: "北捷各大捷運站" },
];

const FAQ_ITEMS = [
  {
    q: "下單後多久會出貨？",
    a: "訂單確認後最快可當日出貨，透過超商賣貨便寄送，取貨時以貨到付款完成付款，不需事先匯款。",
  },
  {
    q: "有提供面交嗎？",
    a: "有，北捷各大捷運站皆可約面交，詳細地點與時間請透過 LINE 官方帳號或 FB 粉專約定。",
  },
  {
    q: "商品有缺卡或受損怎麼辦？",
    a: "構築所商品皆有全額保障：若商品送達後發現缺卡或嚴重受損，可全額退款或更換商品。",
  },
  {
    q: "可以客製化牌組嗎？",
    a: "可以，私訊Line官方帳號或FB粉專，告知組牌需求，我們會依現有卡牌幫您客製化牌組。",
  },
  {
    q: "第一次用賣貨便下單需要準備什麼？",
    a: "需要先完成 7-11 OPEN POINT 會員註冊，完整下單流程可參考「下單教學」頁面。",
  },
  {
    q: "想要的牌組還沒上架怎麼辦？",
    a: "歡迎加入Line官方帳號或私訊FB粉專，我們構築好後會優先幫您保留牌組。",
  },
];

function SectionEyebrow({
  children,
  line = true,
}: {
  children: React.ReactNode;
  line?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="shrink-0 font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/45">
        {children}
      </span>
      {line && <span className="h-px flex-1 bg-[#3C382F]/15" />}
    </div>
  );
}

export default async function Home() {
  const featured = await getProducts();
  const highlightResults = sortedResults().slice(0, 4);

  return (
    <div className="bg-cream-texture">
      <HeroCarousel slides={HERO_SLIDES} />

      {/* Announcement ticker */}
      <div className="overflow-hidden bg-kraft-texture py-2.5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap hover:[animation-play-state:paused]">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#3C382F]/80"
            >
              <span className="h-1 w-1 animate-pulse rounded-full bg-[#3C382F]/50" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Service items */}
      <section className="bg-kraft-texture px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="font-serif text-2xl font-bold text-[#3C382F] md:text-3xl">
              服務項目
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-6">
            {CATEGORY_LINKS.map((c, i) => {
              const reversed = i % 2 === 1;
              return (
                <Reveal key={c.title} delay={i * 80}>
                  <div
                    className={`flex flex-col overflow-hidden rounded-2xl border border-[#D9CEB4] bg-white md:flex-row ${
                      reversed ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`relative flex shrink-0 items-center justify-center overflow-hidden bg-[#3C382F]/[0.06] md:w-2/3 ${
                        c.image ? "md:self-start" : "aspect-[16/9] md:aspect-auto"
                      }`}
                      style={c.imageAspect ? { aspectRatio: c.imageAspect } : undefined}
                    >
                      {c.image ? (
                        <Image
                          src={c.image}
                          alt={c.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 66vw"
                          className={
                            c.imageFit === "contain" ? "object-contain p-6" : "object-cover"
                          }
                        />
                      ) : (
                        <c.icon className="h-14 w-14 text-[#3C382F]/20" strokeWidth={1} />
                      )}
                    </div>
                    <div
                      className="flex flex-1 flex-col justify-center items-start gap-2 p-8 text-left md:w-1/3"
                      style={c.panelBg ? { backgroundColor: c.panelBg } : undefined}
                    >
                      <h3 className="font-serif text-xl font-bold text-[#3C382F] md:text-2xl">
                        {c.title}
                      </h3>
                      <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#4B5741]">
                        {c.en}
                      </span>
                      <p className="mt-2 text-base leading-relaxed text-[#3C382F]/65">{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand intro */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/cover.png"
              alt="構築所工作桌：牌組整理、卡表分析與出貨作業的日常"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="text-left">
            <SectionEyebrow>關於構築所</SectionEyebrow>
            <h2 className="mt-3 font-serif text-2xl font-bold text-[#3C382F] md:text-3xl">
              牌組構築專門店
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3C382F]/75">
              專營PTCG牌組構築，參考國外各大賽事卡表構築各式主流及強勢牌組，同時販售牌組周邊，服務全臺各地玩家，解決其組牌需求。
            </p>
            <Link
              href="/about"
              className="mt-3 inline-flex items-center text-[16px] font-semibold text-[#3C382F] hover:text-[#4B5741]"
            >
              了解更多
              <ArrowRight className="h-4 w-4 shrink-0 self-center" strokeWidth={2} />
            </Link>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <CountUpStat
                icon={<ShoppingBag className="h-5 w-5 text-[#3C382F]/60" strokeWidth={1.75} />}
                value={200}
                label="售出牌組"
              />
              <CountUpStat
                icon={<Users className="h-5 w-5 text-[#3C382F]/60" strokeWidth={1.75} />}
                value={300}
                label="客人數量"
              />
              <CountUpStat
                icon={<Layers className="h-5 w-5 text-[#3C382F]/60" strokeWidth={1.75} />}
                value={10000}
                label="收購牌料"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-stone-texture-a px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 flex items-end justify-between gap-6">
            <div className="min-w-0 flex-1">
              <SectionEyebrow line={false}>本期精選</SectionEyebrow>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#3C382F] md:text-3xl">
                本期上架牌組
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden text-sm font-medium text-[#3C382F]/70 hover:text-[#3C382F] sm:inline"
            >
              查看全部 →
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, i) => (
              <Reveal key={product.id} delay={i * 80} className="h-full">
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/products" className="text-sm font-medium text-[#3C382F]/70">
              查看全部 →
            </Link>
          </div>
        </div>
      </section>

      {/* Tournament highlights */}
      <section className="bg-stone-texture-b px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 flex items-end justify-between gap-6">
            <div className="min-w-0 flex-1">
              <SectionEyebrow line={false}>環境情報</SectionEyebrow>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#3C382F] md:text-3xl">
                近期上位戰績
              </h2>
            </div>
            <Link
              href="/tournament-results"
              className="hidden text-sm font-medium text-[#3C382F]/70 hover:text-[#3C382F] sm:inline"
            >
              查看上位卡表 →
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {highlightResults.map((result, i) => {
              const deck = result.deckSlug ? tierList.find((d) => d.slug === result.deckSlug) : null;
              return (
                <Reveal key={`${result.player}-${result.date}-${i}`} delay={i * 80}>
                  <Link
                    href={deck ? `/tournament-results?deck=${deck.slug}` : "/tournament-results"}
                    className="group block"
                  >
                    {deck ? (
                      <DeckGlyph deck={deck} />
                    ) : (
                      <div className="flex aspect-square w-full items-center justify-center rounded-md border border-[#D9CEB4] bg-[#D9CEB4]/20">
                        <Trophy className="h-6 w-6 text-[#3C382F]/30" strokeWidth={1.25} />
                      </div>
                    )}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-[#3C382F]/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#3C382F]">
                        第 {result.placement} 名
                      </span>
                    </div>
                    <h3 className="mt-2 font-serif text-sm font-bold leading-snug text-[#3C382F] group-hover:underline">
                      {deck?.nameZh ?? result.tournamentNameZh}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-base text-[#3C382F]/55">
                      {result.tournamentNameZh} · {result.player}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery & payment */}
      <section className="bg-stone-texture-a px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <SectionEyebrow line={false}>交易與出貨</SectionEyebrow>
            <h2 className="mt-3 font-serif text-2xl font-bold text-[#3C382F] md:text-3xl">
              付款及交易方式
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {DELIVERY.map((row, i) => (
              <Reveal key={row.label} delay={i * 100}>
                <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-[#D9CEB4] bg-[#FBF8F1] p-6 text-center">
                  <div className="relative aspect-square w-full max-w-[180px] overflow-hidden rounded-lg">
                    <Image
                      src={row.image}
                      alt={row.value}
                      fill
                      sizes="(max-width: 640px) 60vw, 180px"
                      className="scale-110 object-cover"
                    />
                  </div>
                  <span className="text-xs uppercase tracking-[0.15em] text-[#3C382F]/50">
                    {row.label}
                  </span>
                  <span className="font-serif text-lg font-bold text-[#3C382F]">{row.value}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone-texture-b px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <SectionEyebrow line={false}>常見問題</SectionEyebrow>
            <h2 className="mt-3 font-serif text-2xl font-bold text-[#3C382F] md:text-3xl">
              下單前，你可能想知道
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-10">
            <FaqAccordion items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-kraft-texture">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="card-mounted mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-[#3C382F]/10 px-8 py-12 text-center">
            <h2 className="font-serif text-2xl font-bold text-[#3C382F] md:text-3xl">
              私訊預購最新牌組
            </h2>
            <p className="max-w-md text-base leading-relaxed text-[#3C382F]/75">
              想要的牌組還沒上架？
              <br />
              加 LINE 或私訊 FB 粉專，構築所幫你優先預留。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-[#06C755] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                LINE @881idjjb
              </a>
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                FB 粉專「構築所」
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
