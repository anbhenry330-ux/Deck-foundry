import Image from "next/image";
import { CheckCircle2, XCircle } from "lucide-react";

interface CompositionItem {
  image: string;
  label: string;
  count: string;
}

const COMPOSITION: CompositionItem[] = [
  { image: "/card-types/pokemon.png", label: "寶可夢卡", count: "12–15" },
  { image: "/card-types/trainer.png", label: "訓練家卡", count: "30" },
  { image: "/card-types/energy.png", label: "能量卡", count: "10–12" },
];

const TRAINER_BREAKDOWN: CompositionItem[] = [
  { image: "/card-types/item.png", label: "物品", count: "12" },
  { image: "/card-types/tool.png", label: "道具", count: "2–4" },
  { image: "/card-types/supporter.png", label: "支援者", count: "12" },
  { image: "/card-types/stadium.png", label: "競技場", count: "2–4" },
];

interface Method {
  no: string;
  title: string;
  pros: string[];
  cons: string[];
}

const METHODS: Method[] = [
  {
    no: "01",
    title: "開卡包或收購單卡自行構築",
    pros: ["可依照自身喜好蒐集卡牌"],
    cons: ["需花費大量時間與金錢"],
  },
  {
    no: "02",
    title: "購買官方戰術牌組自行構築",
    pros: ["不用花費心力蒐集大部分卡牌"],
    cons: [
      "若要調整成較完整的上位構築，需自行額外收購其他單卡",
      "牌組類型有限，且無法客製化",
    ],
  },
  {
    no: "03",
    title: "實體卡牌店購買",
    pros: ["可客製化、便利性高"],
    cons: ["價格較高，需以高於市價價格溢價購買"],
  },
  {
    no: "04",
    title: "線上通路購買",
    pros: ["可客製化、便利性高、價格實惠"],
    cons: ["詐騙盛行、卡況不易檢視"],
  },
];

export function DeckBuildFlow() {
  return (
    <div className="space-y-16">
      {/* composition */}
      <div>
        <h3 className="text-center font-serif text-2xl font-bold text-[#3C382F]">
          建議牌組配置
          <span className="ml-2 font-mono text-xs font-normal uppercase tracking-[0.15em] text-[#3C382F]/40">
            共 60 張
          </span>
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {COMPOSITION.map((c) => (
            <div
              key={c.label}
              className="rounded-xl border border-[#D9CEB4] bg-[#FBF8F1] p-6 text-center"
            >
              <div className="relative mx-auto aspect-[5/7] w-20 overflow-hidden rounded-md shadow-sm">
                <Image src={c.image} alt={c.label} fill sizes="80px" className="object-cover" />
              </div>
              <p className="mt-3 text-sm text-[#3C382F]/70">{c.label}</p>
              <div className="mt-1 font-serif text-2xl font-black text-[#3C382F]">
                {c.count}
                <span className="ml-1 text-sm font-normal text-[#3C382F]/50">張</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-[#3C382F]/40">
          訓練家卡 30 張細項
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {TRAINER_BREAKDOWN.map((t) => (
            <div
              key={t.label}
              className="rounded-lg border border-[#D9CEB4]/60 bg-[#F2ECE0] p-4 text-center"
            >
              <div className="relative mx-auto aspect-[5/7] w-14 overflow-hidden rounded-md shadow-sm">
                <Image src={t.image} alt={t.label} fill sizes="56px" className="object-cover" />
              </div>
              <p className="mt-2 text-xs text-[#3C382F]/60">{t.label}</p>
              <div className="mt-0.5 font-serif text-base font-bold text-[#3C382F]">
                {t.count}
                <span className="ml-0.5 text-xs font-normal text-[#3C382F]/50">張</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* build methods */}
      <div>
        <h3 className="text-center font-serif text-2xl font-bold text-[#3C382F]">
          獲取完整牌組的方式
        </h3>
        <ol className="relative mt-6">
          {METHODS.map((m, i) => {
            const isLast = i === METHODS.length - 1;
            return (
              <li key={m.no} className="relative flex gap-5 pb-8 last:pb-0">
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute left-6 top-14 h-[calc(100%-3rem)] w-px bg-[#D9CEB4]"
                  />
                )}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D9CEB4] bg-[#F2ECE0]">
                  <span className="font-mono text-lg font-bold text-[#3C382F]/70">{m.no}</span>
                </div>
                <div className="flex-1 rounded-lg border border-[#D9CEB4]/60 bg-[#F2ECE0] p-4">
                  <h4 className="font-serif text-base font-bold text-[#3C382F]">{m.title}</h4>
                  <ul className="mt-2 space-y-1.5">
                    {m.pros.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2 text-sm leading-relaxed text-[#3C382F]/80"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#4B5741]"
                          strokeWidth={1.75}
                        />
                        {p}
                      </li>
                    ))}
                    {m.cons.map((c) => (
                      <li
                        key={c}
                        className="flex gap-2 text-sm leading-relaxed text-[#3C382F]/70"
                      >
                        <XCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#A6553A]"
                          strokeWidth={1.75}
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
