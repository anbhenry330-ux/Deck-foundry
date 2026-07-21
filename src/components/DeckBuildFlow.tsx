import {
  PawPrint,
  Users,
  Zap,
  Package,
  Wrench,
  UserSquare2,
  Landmark,
  Boxes,
  Package2,
  Store,
  Globe,
  CheckCircle2,
  XCircle,
  type LucideIcon,
} from "lucide-react";

interface CompositionItem {
  icon: LucideIcon;
  label: string;
  count: string;
}

const COMPOSITION: CompositionItem[] = [
  { icon: PawPrint, label: "寶可夢卡", count: "12–15" },
  { icon: Users, label: "訓練家卡", count: "30" },
  { icon: Zap, label: "能量卡", count: "10–12" },
];

const TRAINER_BREAKDOWN: CompositionItem[] = [
  { icon: Package, label: "物品", count: "12" },
  { icon: Wrench, label: "道具", count: "2–4" },
  { icon: UserSquare2, label: "支援者", count: "12" },
  { icon: Landmark, label: "場地", count: "2–4" },
];

interface Method {
  no: string;
  icon: LucideIcon;
  title: string;
  pros: string[];
  cons: string[];
}

const METHODS: Method[] = [
  {
    no: "01",
    icon: Boxes,
    title: "開卡包或收購單卡自行構築",
    pros: ["可依照自身喜好蒐集卡牌"],
    cons: ["需花費大量時間與金錢"],
  },
  {
    no: "02",
    icon: Package2,
    title: "購買官方戰術牌組自行構築",
    pros: ["不用花費心力蒐集大部分卡牌"],
    cons: [
      "若要調整成較完整的上位構築，需自行額外收購其他單卡",
      "牌組類型有限，且無法客製化",
    ],
  },
  {
    no: "03",
    icon: Store,
    title: "實體卡牌店購買",
    pros: ["可客製化、便利性高"],
    cons: ["價格較高，需以高於市價價格溢價購買"],
  },
  {
    no: "04",
    icon: Globe,
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
        <h3 className="text-center font-serif text-lg font-bold text-[#3C382F]">
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
              <c.icon className="mx-auto h-8 w-8 text-[#3C382F]" strokeWidth={1.25} />
              <div className="mt-3 font-serif text-2xl font-black text-[#3C382F]">
                {c.count}
                <span className="ml-1 text-sm font-normal text-[#3C382F]/50">張</span>
              </div>
              <p className="mt-1 text-sm text-[#3C382F]/70">{c.label}</p>
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
              <t.icon className="mx-auto h-5 w-5 text-[#3C382F]/70" strokeWidth={1.5} />
              <div className="mt-2 font-serif text-base font-bold text-[#3C382F]">
                {t.count}
                <span className="ml-0.5 text-xs font-normal text-[#3C382F]/50">張</span>
              </div>
              <p className="mt-0.5 text-xs text-[#3C382F]/60">{t.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* build methods */}
      <div>
        <h3 className="text-center font-serif text-lg font-bold text-[#3C382F]">
          組牌的四種方式
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {METHODS.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.no}
                className="rounded-xl border border-[#D9CEB4] bg-[#FBF8F1] p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9CEB4] bg-[#F2ECE0]">
                    <Icon className="h-5 w-5 text-[#3C382F]/70" strokeWidth={1.5} />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs text-[#3C382F]/40">{m.no}</span>
                    <h4 className="font-serif text-base font-bold text-[#3C382F]">{m.title}</h4>
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5">
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
