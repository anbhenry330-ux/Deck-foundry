import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Hammer,
  ShoppingBag,
  Wrench,
  Gift,
  Send,
  TrendingUp,
  Facebook,
  Truck,
  CreditCard,
  MapPin,
  Trophy,
} from "lucide-react";
import { products } from "@/data/products";
import { tierList } from "@/data/tier-list";
import { sortedResults } from "@/data/tournament-results";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
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
    title: "把日本上位環境，鍛造成你的下一副牌",
    desc: "構築所－讓您不再為組牌擔憂",
    ctaLabel: "瀏覽本期牌組",
    ctaHref: "/products",
  },
];

const CATEGORY_LINKS = [
  {
    icon: Hammer,
    title: "牌組構築",
    en: "Deck Building",
    desc: "鎖定日本上位環境的主流、強勢牌組，依照環境趨勢構築出最具競爭力的牌組。",
  },
  {
    icon: TrendingUp,
    title: "牌料收購",
    en: "Card Buyback",
    desc: "大量收購實用牌料，讓你手中的閒置卡牌變現，收購價格公道實在。",
  },
  {
    icon: ShoppingBag,
    title: "周邊販售",
    en: "Accessories",
    desc: "卡套、對戰墊、收納卡冊一應俱全，從保護愛卡到賽場配件，齊全周邊讓你的裝備不掉鏈。",
  },
  {
    icon: Wrench,
    title: "客製化牌組",
    en: "Custom Deck",
    desc: "告訴我們你手上有什麼牌、預算多少、想打什麼風格，我們依需求客製構築，價格實惠不加價。",
  },
];

const DELIVERY = [
  { icon: Truck, label: "超商取貨", value: "賣貨便" },
  { icon: CreditCard, label: "付款方式", value: "貨到付款" },
  { icon: MapPin, label: "面交地點", value: "北捷各大捷運站" },
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
    a: "可以，告訴我們你手上有什麼牌、預算多少、想打什麼風格，我們依需求客製構築，價格實惠不加價。",
  },
  {
    q: "第一次用賣貨便下單需要準備什麼？",
    a: "需要先完成 7-11 OPEN POINT 會員註冊，完整下單流程可參考「下單教學」頁面。",
  },
  {
    q: "想要的牌組還沒上架怎麼辦？",
    a: "歡迎加 LINE 官方帳號或私訊 FB 粉專，我們會優先幫你預留貨源。",
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

export default function Home() {
  const featured = products;
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
      <section className="bg-paper-texture px-6 py-20">
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
                    {/* Placeholder visual — swap for real photography later */}
                    <div className="flex aspect-[16/9] shrink-0 items-center justify-center bg-[#3C382F]/[0.06] md:aspect-auto md:w-2/3">
                      <c.icon className="h-14 w-14 text-[#3C382F]/20" strokeWidth={1} />
                    </div>
                    <div
                      className={`flex flex-1 flex-col justify-center gap-2 p-8 md:w-1/3 ${
                        reversed ? "md:items-end md:text-right" : "md:items-start md:text-left"
                      }`}
                    >
                      <h3 className="font-serif text-xl font-bold text-[#3C382F] md:text-2xl">
                        {c.title}
                      </h3>
                      <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#4B5741]">
                        {c.en}
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-[#3C382F]/65">{c.desc}</p>
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
          <Reveal delay={100}>
            <SectionEyebrow>關於構築所</SectionEyebrow>
            <h2 className="mt-3 font-serif text-2xl font-bold text-[#3C382F] md:text-3xl">
              牌組構築專門店
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#3C382F]/75">
              構築所專注於 Pokémon TCG
              牌組構築——鎖定日本上位環境的主流、強勢牌組及牌料現貨供應，同時販售牌組周邊，並提供客製化訂製，價格實惠、下單最快可當日寄出。買了之後我們還在：對戰策略詢問、構築調整回饋、賽場環境趨勢分析，一路陪你打到下一場比賽。
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3C382F] hover:text-[#4B5741]"
            >
              了解更多關於我們
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
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
              <Reveal key={product.id} delay={i * 80}>
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
                    <p className="mt-1 line-clamp-1 text-xs text-[#3C382F]/55">
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
                  <row.icon className="h-7 w-7 text-[#4B5741]" strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-[0.15em] text-[#3C382F]/50">
                    {row.label}
                  </span>
                  <span className="font-serif text-lg font-bold text-[#3C382F]">{row.value}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#3C382F]/10 px-3 py-1.5 text-xs font-semibold text-[#3C382F]">
              <Gift className="h-3.5 w-3.5" strokeWidth={1.75} />
              滿額免運活動持續中
            </div>
          </Reveal>
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
            <p className="max-w-md text-sm leading-relaxed text-[#3C382F]/75">
              想要的牌組還沒上架？加 LINE 或私訊 FB 粉專，構築所幫你優先預留。
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#06C755] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" strokeWidth={1.75} />
                LINE 官方帳號 @881idjjb
              </a>
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#1877F2] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.75} />
                FB 粉專「構築所」
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
