import Link from "next/link";
import {
  ArrowRight,
  Hammer,
  PackageSearch,
  Wrench,
  Truck,
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
import { Reveal } from "@/components/Reveal";
import { WreathMark } from "@/components/WreathMark";

const LINE_URL = "https://line.me/R/ti/p/@881djjb";
const FB_URL = "https://www.facebook.com/profile.php?id=61584390375051&locale=zh_TW";

const TICKER = [
  "日本上位環境牌組",
  "下單最快可當日寄出",
  "滿額免運活動持續中",
  "大量收購實用牌料",
  "客製化 x 價格實惠",
];

const SERVICES = [
  {
    icon: Hammer,
    title: "構築販售",
    lot: "LOT.01",
    desc: "專門負責構築主流、強勢牌組，緊盯日本上位環境，把最新的一線配置直接搬上你的牌桌。",
  },
  {
    icon: PackageSearch,
    title: "收購牌料",
    lot: "LOT.02",
    desc: "大量收購實用牌料，不管是拆組剩下的散卡還是整套閒置牌組，都能換成下一副牌的資金。",
  },
  {
    icon: Wrench,
    title: "客製化訂製",
    lot: "LOT.03",
    desc: "依你的手牌、預算與對戰習慣客製構築，價格實惠，讓每一副牌都合身。",
  },
];

const DELIVERY = [
  { label: "超商取貨", value: "賣貨便、交貨便" },
  { label: "付款方式", value: "貨到付款、匯款" },
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
      {/* Hero — kraft-mounted dossier */}
      <section className="bg-kraft-texture relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="relative mx-auto max-w-3xl">
            <Reveal mode="load">
              <div className="card-mounted -rotate-[0.6deg] rounded-2xl border border-[#8B5E3C]/10 px-7 py-10 sm:px-12 sm:py-14">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#8B5E3C]">
                  構築所 — Deck Foundry
                </span>
                <h1 className="mt-5 font-serif text-4xl font-black leading-[1.2] text-[#8B5E3C] md:text-[2.75rem]">
                  牌組構築專門，
                  <br />
                  把日本上位環境，鍛造成你的下一副牌。
                </h1>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#8B5E3C]/80">
                  構築所專門構築主流、強勢牌組，同時大量收購實用牌料、提供客製化訂製——價格實惠，下單最快可當日寄出。
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 rounded-md bg-[#8B5E3C] px-5 py-3 text-sm font-semibold text-[#FFFFFF] transition-transform hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    瀏覽本期牌組
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-[#8B5E3C]/25 px-5 py-3 text-sm font-semibold text-[#8B5E3C] transition-colors hover:bg-[#8B5E3C]/5"
                  >
                    <Send className="h-4 w-4" strokeWidth={1.5} />
                    私訊預購最新牌組
                  </a>
                </div>
              </div>
            </Reveal>

            {/* wax-seal style brand mark, pinned to the dossier corner */}
            <Reveal
              mode="load"
              delay={250}
              className="absolute -right-4 -top-6 hidden h-24 w-24 items-center justify-center rounded-full border border-[#8B5E3C]/15 bg-[#FFFFFF] shadow-lg sm:flex"
            >
              <WreathMark className="h-14 w-14 text-[#8B5E3C]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-[#8B5E3C]/10 bg-[#8B5E3C] py-2.5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#FFFFFF]/90"
            >
              <span className="h-1 w-1 rounded-full bg-[#FFFFFF]/60" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B5E3C]/45">
            服務項目
          </span>
          <h2 className="mt-3 font-serif text-2xl font-bold text-[#8B5E3C] md:text-3xl">
            從構築、收購到客製化，一站處理
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="group h-full rounded-xl border border-[#E1C699] bg-[#FFFFFF] p-7 transition-shadow hover:shadow-[0_10px_30px_-14px_rgba(139,94,60,0.35)]">
                <div className="flex items-center justify-between">
                  <s.icon
                    className="h-9 w-9 text-[#8B5E3C] transition-transform duration-300 group-hover:-rotate-6"
                    strokeWidth={1.25}
                  />
                  <span className="font-mono text-[11px] tracking-wider text-[#8B5E3C]/35">
                    {s.lot}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-[#8B5E3C]">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#8B5E3C]/70">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured decks */}
      <section className="border-y border-[#E1C699]/70 bg-[#E1C699]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="mb-10 flex items-end justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B5E3C]/45">
                本期精選
              </span>
              <h2 className="mt-3 font-serif text-2xl font-bold text-[#8B5E3C] md:text-3xl">
                本期上架牌組
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden text-sm font-medium text-[#8B5E3C]/70 hover:text-[#8B5E3C] sm:inline"
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
            <Link href="/products" className="text-sm font-medium text-[#8B5E3C]/70">
              查看全部 →
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery & payment */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B5E3C]/45">
              交易與出貨
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold text-[#8B5E3C]">
              付款及交易方式
            </h2>
            <dl className="mt-6 divide-y divide-[#E1C699]/40 rounded-xl border border-[#E1C699] bg-[#FFFFFF]">
              {DELIVERY.map((row) => (
                <div key={row.label} className="flex items-center justify-between px-5 py-4 text-sm">
                  <dt className="text-[#8B5E3C]/55">{row.label}</dt>
                  <dd className="font-medium text-[#8B5E3C]">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-center rounded-xl border border-[#E1C699] bg-[#FFFFFF] p-7">
              <Truck className="h-8 w-8 text-[#8B5E3C]" strokeWidth={1.25} />
              <h3 className="mt-4 font-serif text-lg font-bold text-[#8B5E3C]">
                下單後最快可當日寄出
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#8B5E3C]/75">
                牌組均附第一層卡套，並用氣泡紙及硬紙盒包裝，確保寄送過程中不會受損。
              </p>
              <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#8B5E3C]/10 px-3 py-1.5 text-xs font-semibold text-[#8B5E3C]">
                <Gift className="h-3.5 w-3.5" strokeWidth={1.75} />
                滿額免運活動持續中
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* After-sales */}
      <section className="border-y border-[#E1C699]/70 bg-[#E1C699]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B5E3C]/45">
              售後服務
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold text-[#8B5E3C] md:text-3xl">
              買了之後，我們還在
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {AFTER_SALES.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-xl border border-[#E1C699] bg-[#FFFFFF] p-7">
                  <item.icon className="h-8 w-8 text-[#8B5E3C]" strokeWidth={1.25} />
                  <h3 className="mt-4 font-serif text-base font-bold text-[#8B5E3C]">
                    {item.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-[#8B5E3C]/70">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="text-[#8B5E3C]">·</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-8">
            <div className="flex flex-col items-start gap-4 rounded-xl border border-[#8B5E3C]/30 bg-[#8B5E3C]/5 p-7 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#8B5E3C]/30 bg-[#FFFFFF]">
                <ShieldCheck className="h-7 w-7 text-[#8B5E3C]" strokeWidth={1.5} />
              </div>
              <p className="text-sm leading-relaxed text-[#8B5E3C]/85">
                <strong className="text-[#8B5E3C]">全額保障：</strong>
                任何在構築所購買的商品皆有保障，若商品送達後有缺卡或嚴重受損，可全額退款或更換商品。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Competitive proof */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Link
            href="/tier-list"
            className="group rounded-xl border border-[#E1C699] bg-[#FFFFFF] p-7 transition-shadow hover:shadow-[0_10px_30px_-14px_rgba(139,94,60,0.35)]"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B5E3C]/45">
              環境情報
            </span>
            <h3 className="mt-3 flex items-center gap-2 font-serif text-xl font-bold text-[#8B5E3C]">
              上位卡表
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#8B5E3C]/70">
              彙整近期各大賽事牌組使用率，一線、二線、三線分級，構築與購買前先看這頁。
            </p>
          </Link>
          <Link
            href="/tournament-results"
            className="group rounded-xl border border-[#E1C699] bg-[#FFFFFF] p-7 transition-shadow hover:shadow-[0_10px_30px_-14px_rgba(139,94,60,0.35)]"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B5E3C]/45">
              環境情報
            </span>
            <h3 className="mt-3 flex items-center gap-2 font-serif text-xl font-bold text-[#8B5E3C]">
              近期上位戰績
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#8B5E3C]/70">
              各大賽事的上位入賞戰績與對應牌組，掌握目前真正在贏的構築。
            </p>
          </Link>
        </Reveal>
      </section>

      {/* Closing CTA */}
      <section className="bg-kraft-texture">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="card-mounted mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-[#8B5E3C]/10 px-8 py-12 text-center">
            <WreathMark className="h-12 w-12 text-[#8B5E3C]" />
            <h2 className="font-serif text-2xl font-bold text-[#8B5E3C] md:text-3xl">
              私訊預購最新牌組
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#8B5E3C]/75">
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
                LINE 官方帳號 @881djjb
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
