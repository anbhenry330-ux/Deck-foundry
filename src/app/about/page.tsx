import { Hammer, ShoppingBag, Wrench, MessagesSquare, SlidersHorizontal, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const PILLARS = [
  {
    icon: Hammer,
    title: "現環境牌組及牌料販售",
    desc: "緊盯日本上位環境的比賽結果與牌表變化，把當下真正在贏的主流、強勢牌組現貨供應，同時販售構築常用的核心牌料。",
  },
  {
    icon: ShoppingBag,
    title: "牌組周邊販售",
    desc: "卡套、對戰墊、收納卡冊等周邊一應俱全，讓你的牌組從裡到外都準備齊全。",
  },
  {
    icon: Wrench,
    title: "客製化訂製",
    desc: "告訴我們你手上有什麼、預算多少、想打什麼風格，構築所依需求客製組牌，價格實惠不加價。",
  },
];

const AFTER_SALES = [
  { icon: MessagesSquare, title: "牌組對戰策略詢問", desc: "新手入坑組牌教學，也接長期玩家的意見討論。" },
  { icon: SlidersHorizontal, title: "構築調整與意見回饋", desc: "買了之後打起來不順手？告訴我們，我們會針對意見優化構築。" },
  { icon: TrendingUp, title: "賽場環境趨勢分析", desc: "整理國外賽事環境分布與主流牌組強度研究，讓你抓對下一波環境。" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-kraft-texture">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <Reveal mode="load" className="card-mounted mx-auto max-w-2xl rounded-2xl border border-[#3C382F]/10 px-8 py-12 text-center">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-[#3C382F]">
              關於我們
            </span>
            <h1 className="mt-3 font-serif text-3xl font-black leading-snug text-[#3C382F] md:text-4xl">
              牌組構築專門店
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-[#3C382F]/80">
              構築所專注於 Pokémon TCG 牌組構築——鎖定日本上位環境的主流、強勢牌組及牌料，同時販售牌組周邊，並提供客製化訂製，價格實惠、下單最快可當日寄出。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal className="max-w-xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/45">
            我們在做的事
          </span>
          <h2 className="mt-3 font-serif text-2xl font-bold text-[#3C382F]">三件事，做得專精</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full rounded-xl border border-[#D9CEB4] bg-[#FBF8F1] p-7">
                <p.icon className="h-8 w-8 text-[#3C382F]" strokeWidth={1.25} />
                <h3 className="mt-4 font-serif text-lg font-bold text-[#3C382F]">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#3C382F]/75">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[#D9CEB4]/70 bg-[#D9CEB4]/40">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/45">
              售後服務
            </span>
            <h2 className="mt-3 font-serif text-2xl font-bold text-[#3C382F]">買了之後，我們還在</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#3C382F]/75">
              任何在構築所購買的商品皆有保障：若商品送達後有缺卡或嚴重受損，可全額退款或更換商品。
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {AFTER_SALES.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <div className="h-full rounded-xl border border-[#D9CEB4] bg-[#FBF8F1] p-7">
                  <a.icon className="h-8 w-8 text-[#3C382F]" strokeWidth={1.25} />
                  <h3 className="mt-4 font-serif text-base font-bold text-[#3C382F]">{a.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#3C382F]/70">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
