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
    desc: "在構築所網站選定想要的牌組、單卡或配件。",
  },
  {
    no: "02",
    icon: ExternalLink,
    title: "點擊「前往賣貨便下單」",
    desc: "商品頁與商品卡片上都有這個按鈕，會開新分頁跳轉到賣貨便（myship.7-11.com.tw）。",
  },
  {
    no: "03",
    icon: UserPlus,
    title: "完成 7-11 會員登入／註冊",
    desc: "第一次使用的買家，系統會請你先註冊／登入 7-11 OPEN POINT 會員，才能繼續下單。",
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
    desc: "商品到店後，系統會發送簡訊／APP 通知，告知可以取貨的時間。",
  },
  {
    no: "06",
    icon: PackageCheck,
    title: "至門市取貨並付款",
    desc: "攜帶取貨憑證到指定門市，確認商品後現場付款取貨。",
  },
  {
    no: "07",
    icon: CheckCircle2,
    title: "交易完成",
    desc: "取貨付款完成，訂單即結束，如有問題可聯繫構築所客服。",
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
                className="absolute left-6 top-14 h-[calc(100%-3rem)] w-px bg-[#E1C699]"
              />
            )}
            <div
              className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${
                step.highlight
                  ? "border-[#8B5E3C] bg-[#8B5E3C]/10"
                  : "border-[#E1C699] bg-[#FFFDD0]"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${step.highlight ? "text-[#8B5E3C]" : "text-[#8B5E3C]/70"}`}
                strokeWidth={1.5}
              />
            </div>
            <div
              className={`flex-1 rounded-lg border p-4 ${
                step.highlight
                  ? "border-[#8B5E3C] bg-[#8B5E3C]/5"
                  : "border-[#E1C699]/60 bg-[#FFFDD0]"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#8B5E3C]/40">{step.no}</span>
                <h3 className="font-serif text-base font-bold text-[#8B5E3C]">{step.title}</h3>
                {step.highlight && (
                  <span className="rounded-full bg-[#8B5E3C] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#FFFDD0]">
                    首次購買必看
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-[#8B5E3C]/75">{step.desc}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
