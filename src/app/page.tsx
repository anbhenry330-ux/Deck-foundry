import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Hammer,
  ShoppingBag,
  Wrench,
  Gift,
  Send,
  MessagesSquare,
  SlidersHorizontal,
  TrendingUp,
  ShieldCheck,
  Facebook,
} from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductGlyph } from "@/components/ProductGlyph";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { MountedPoster } from "@/components/MountedPoster";

const LINE_URL = "https://line.me/R/ti/p/@881idjjb";
const FB_URL = "https://www.facebook.com/profile.php?id=61584390375051&locale=zh_TW";

const TICKER = [
  "日本上位環境牌組",
  "下單最快可當日寄出",
  "滿額免運活動持續中",
  "牌組周邊現貨供應",
  "客製化 x 價格實惠",
];

const SERVICES = [
  {
    icon: Hammer,
    title: "現環境牌組及牌料販售",
    lot: "LOT.01",
    desc: "緊盯日本上位環境賽事結果，主流、強勢牌組現貨供應，同時販售構築常用的核心牌料，備牌一次到位。",
  },
  {
    icon: ShoppingBag,
    title: "牌組周邊販售",
    lot: "LOT.02",
    desc: "卡套、對戰墊、收納卡冊等周邊一應俱全，讓你的牌組從裡到外都準備齊全。",
  },
  {
    icon: Wrench,
    title: "客製化訂製",
    lot: "LOT.03",
    desc: "依你的手牌、預算與對戰習慣客製構築，價格實惠，讓每一副牌都合身。",
  },
];

const DELIVERY = [
  { label: "超商取貨", value: "賣貨便" },
  { label: "付款方式", value: "貨到付款" },
  { label: "面交地點", value: "北捷各大捷運站" },
];

const AFTER_SALES = [
  {
    icon: MessagesSquare,
    title: "牌組對戰策略詢問",
    points: ["新手入坑組牌教學", "長期玩家意見討論"],
  },
  {
    icon: SlidersHorizontal,
    title: "構築調整與意見回饋",
    points: ["針對玩家意見優化構築"],
  },
  {
    icon: TrendingUp,
    title: "賽場環境趨勢分析",
    points: ["國外賽事環境分布", "主流牌組強度研究"],
  },
];

export default function Home() {
  const featured = products;

  return (
    <div>
      {/* Hero — kraft-mounted dossier beside a mounted print of the workshop desk */}
      <section className="bg-kraft-texture relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
            <Reveal mode="load">
              <div className="card-mounted -rotate-[0.6deg] rounded-2xl border border-[#3C382F]/10 px-7 py-10 sm:px-12 sm:py-14">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#3C382F]">
                  構築所 — Deck Foundry
                </span>
                <h1 className="mt-5 font-serif text-4xl font-black leading-[1.2] text-[#3C382F] md:text-[2.75rem]">
                  牌組構築專門，
                  <br />
                  把日本上位環境，鍛造成你的下一副牌。
                </h1>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#3C382F]/80">
                  構築所專門販售主流、強勢牌組及牌料，同時提供牌組周邊與客製化訂製——價格實惠，下單最快可當日寄出。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 rounded-md bg-[#3C382F] px-5 py-3 text-sm font-semibold text-[#FBF8F1] transition-transform hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    瀏覽本期牌組
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-[#3C382F]/25 px-5 py-3 text-sm font-semibold text-[#3C382F] transition-colors hover:bg-[#3C382F]/5"
                  >
                    <Send className="h-4 w-4" strokeWidth={1.5} />
                    私訊預購最新牌組
                  </a>
                </div>
              </div>
            </Reveal>

            {/* mounted print of the workshop desk, pinned with a wax-seal brand mark — tilts toward the cursor */}
            <Reveal mode="load" delay={200} className="mx-auto w-full max-w-md lg:max-w-none">
              <TiltCard className="relative">
                <div className="rounded-[1.5rem] border-[10px] border-[#FBF8F1] bg-[#FBF8F1] shadow-[0_30px_70px_-24px_rgba(60,56,47,0.4)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[0.6rem]">
                    <Image
                      src="/cover.png"
                      alt="構築所工作桌：牌組整理、卡表分析與出貨作業的日常"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-[#4B5741]/10 bg-[#4B5741] py-2.5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap hover:[animation-play-state:paused]">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#FBF8F1]/90"
            >
              <span className="h-1 w-1 animate-pulse rounded-full bg-[#FBF8F1]/60" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
          <Reveal className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/45">
              服務項目
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold text-[#3C382F] md:text-3xl">
              從牌組、周邊到客製化，一站處理
            </h2>
          </Reveal>
          <Reveal delay={120} className="mx-auto w-full max-w-[220px] lg:mx-0">
            <MountedPoster
              src="/poster-intro.png"
              alt="構築所品牌介紹海報：牌組構築專門、日本上位主流牌組販售、大量收購牌料、客製化服務，附 LINE 官方帳號 QR code"
              rotate={-1.6}
            />
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group h-full rounded-xl border border-[#D9CEB4] bg-[#FBF8F1] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4B5741]/30 hover:shadow-[0_14px_34px_-14px_rgba(60,56,47,0.35)]">
                <div className="flex items-center justify-between">
                  <s.icon
                    className="h-9 w-9 text-[#3C382F] transition-all duration-300 group-hover:-rotate-6 group-hover:text-[#4B5741]"
                    strokeWidth={1.25}
                  />
                  <span className="font-mono text-[11px] tracking-wider text-[#3C382F]/35">
                    {s.lot}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#3C382F]">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#3C382F]/70">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured decks */}
      <section className="border-y border-[#D9CEB4]/70 bg-[#D9CEB4]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="mb-10 flex items-end justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/45">
                本期精選
              </span>
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

      {/* Delivery & payment */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/45">
              交易與出貨
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold text-[#3C382F]">
              付款及交易方式
            </h2>
            <dl className="mt-6 divide-y divide-[#D9CEB4]/40 rounded-xl border border-[#D9CEB4] bg-[#FBF8F1]">
              {DELIVERY.map((row) => (
                <div key={row.label} className="flex items-center justify-between px-5 py-4 text-sm">
                  <dt className="text-[#3C382F]/55">{row.label}</dt>
                  <dd className="font-medium text-[#3C382F]">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="flex flex-col items-center gap-4 md:items-start">
            <MountedPoster
              src="/poster-payment.png"
              alt="付款及交易方式海報：超商取貨（賣貨便）、貨到付款、北捷各站面交，下單後最快可當日寄出"
              rotate={1.4}
              className="w-full max-w-[240px]"
            />
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#3C382F]/10 px-3 py-1.5 text-xs font-semibold text-[#3C382F]">
              <Gift className="h-3.5 w-3.5" strokeWidth={1.75} />
              滿額免運活動持續中
            </div>
          </Reveal>
        </div>
      </section>

      {/* After-sales */}
      <section className="border-y border-[#D9CEB4]/70 bg-[#D9CEB4]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
            <Reveal className="max-w-xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/45">
                售後服務
              </span>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#3C382F] md:text-3xl">
                買了之後，我們還在
              </h2>
            </Reveal>
            <Reveal delay={120} className="mx-auto w-full max-w-[220px] lg:mx-0">
              <MountedPoster
                src="/poster-aftersales.png"
                alt="售後服務海報：牌組對戰策略詢問、構築調整與意見回饋、賽場環境趨勢分析，購買商品皆有全額保障"
                rotate={1.5}
              />
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {AFTER_SALES.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-xl border border-[#D9CEB4] bg-[#FBF8F1] p-7">
                  <item.icon className="h-8 w-8 text-[#3C382F]" strokeWidth={1.25} />
                  <h3 className="mt-4 font-serif text-base font-bold text-[#3C382F]">
                    {item.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-[#3C382F]/70">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-[#3C382F]">·</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-8">
            <div className="flex flex-col items-start gap-4 rounded-xl border border-[#3C382F]/30 bg-[#3C382F]/5 p-7 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#3C382F]/30 bg-[#FBF8F1]">
                <ShieldCheck className="h-7 w-7 text-[#3C382F]" strokeWidth={1.5} />
              </div>
              <p className="text-sm leading-relaxed text-[#3C382F]/85">
                <strong className="text-[#3C382F]">全額保障：</strong>
                任何在構築所購買的商品皆有保障，若商品送達後有缺卡或嚴重受損，可全額退款或更換商品。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Competitive proof */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto max-w-2xl">
          <Link
            href="/tournament-results"
            className="group overflow-hidden rounded-xl border border-[#D9CEB4] bg-[#FBF8F1] transition-shadow hover:shadow-[0_10px_30px_-14px_rgba(60,56,47,0.35)]"
          >
            <ProductGlyph product={products[5]} className="rounded-none border-0" />
            <div className="p-7">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/45">
                環境情報
              </span>
              <h3 className="mt-3 flex items-center gap-2 font-serif text-xl font-bold text-[#3C382F]">
                近期上位戰績
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#3C382F]/70">
                各大賽事的上位入賞戰績與對應牌組，掌握目前真正在贏的構築。
              </p>
            </div>
          </Link>
        </Reveal>
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
