import {
  ShoppingBag,
  ExternalLink,
  UserPlus,
  Store,
  BellRing,
  PackageCheck,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

interface Step {
  no: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  highlight?: boolean;
}

const STEPS: Step[] = [
  {
    no: "01",
    icon: ShoppingBag,
    title: "瀏覽商品目錄",
    desc: "在構築所網站瀏覽有興趣的商品。",
  },
  {
    no: "02",
    icon: ExternalLink,
    title: "點擊「前往賣貨便下單」",
    desc: "商品下方與現有商品頁面皆有前往下單按鈕，點擊便會前往賣貨便賣場。",
  },
  {
    no: "03",
    icon: UserPlus,
    title: "完成 7-11 會員登入／註冊",
    desc: "未使用過的買家需先註冊 7-11 OPEN POINT 會員，\n使用過及剛註冊完的買家需先登入會員，才能繼續下單。",
    highlight: true,
  },
  {
    no: "04",
    icon: Store,
    title: "選擇取貨門市與付款方式",
    desc: "填寫收件資訊，選擇「貨到付款」，並指定要取貨的 7-11 門市。",
  },
  {
    no: "05",
    icon: BellRing,
    title: "等待到貨通知",
    desc: "商品抵達取件門市後，系統會發送簡訊及email通知。",
  },
  {
    no: "06",
    icon: PackageCheck,
    title: "至門市取貨並付款",
    desc: "前往取件門市，確認商品後現場付款取貨。",
  },
  {
    no: "07",
    icon: CheckCircle2,
    title: "交易完成",
    desc: "取貨付款後，訂單便完成，若對商品有任何疑慮可聯繫客服。",
  },
];

export function OrderFlow() {
  return (
    <ol className="relative">
      {STEPS.map((step, i) => {
        const Icon = step.icon;
        const isLast = i === STEPS.length - 1;
        return (
          <li key={step.no} className="relative flex gap-5 pb-8 last:pb-0">
            {/* connecting line */}
            {!isLast && (
              <span
                aria-hidden
                className="absolute left-6 top-14 h-[calc(100%-3rem)] w-px bg-[#D9CEB4]"
              />
            )}
            <div
              className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${
                step.highlight
                  ? "border-[#3C382F] bg-[#3C382F]/10"
                  : "border-[#D9CEB4] bg-[#F2ECE0]"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${step.highlight ? "text-[#3C382F]" : "text-[#3C382F]/70"}`}
                strokeWidth={1.5}
              />
            </div>
            <div
              className={`flex-1 rounded-lg border p-4 ${
                step.highlight
                  ? "border-[#3C382F] bg-[#3C382F]/5"
                  : "border-[#D9CEB4]/60 bg-[#F2ECE0]"
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="inline-block w-6 shrink-0 font-mono text-base text-[#3C382F]/40">
                  {step.no}
                </span>
                <h3 className="font-serif text-base font-bold text-[#3C382F]">{step.title}</h3>
                {step.highlight && (
                  <span className="rounded-full bg-[#3C382F] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#F2ECE0]">
                    首次購買必看
                  </span>
                )}
              </div>
              <p className="mt-1.5 whitespace-pre-line pl-8 text-sm leading-relaxed text-[#3C382F]/75">
                {step.desc}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
