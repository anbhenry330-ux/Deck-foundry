import { ShieldAlert, Landmark, Link2Off, KeyRound, PhoneCall } from "lucide-react";

const WARNINGS = [
  {
    icon: Landmark,
    title: "不會提供交貨便匯款連結",
    desc: "下單方式僅有貨到付款，任何假冒構築所官方要求您匯款某特定帳號或是交貨便連結皆為詐騙，請勿相信，避免受騙。",
  },
  {
    icon: KeyRound,
    title: "不會向買家要求提供銀行或信用卡帳號密碼",
    desc: "取貨付款流程不需提供任何銀行及信用卡帳號密碼，若有假冒客服要求您提供，皆為詐騙，請勿提供資訊以免受騙。",
  },
  {
    icon: Link2Off,
    title: "只透過官方網域下單",
    desc: "下單前請確認網址列是 myship.7-11.com.tw，不要點擊簡訊、社群訊息或來源不明的連結。",
  },
];

export function FraudAwareness() {
  return (
    <div className="rounded-lg border border-[#A6553A]/50 bg-[#A6553A]/5 p-6">
      <div className="flex items-center gap-2">
        <ShieldAlert className="h-5 w-5 text-[#A6553A]" strokeWidth={1.5} />
        <h2 className="font-serif text-xl font-bold text-[#3C382F]">防詐提醒</h2>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-[#3C382F]/75">
        近期詐騙猖獗，請訓練家特別留意以下幾點，避免落入詐騙陷阱。
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {WARNINGS.map((w) => (
          <div
            key={w.title}
            className="rounded-md border border-[#A6553A]/30 bg-[#F2ECE0] p-4"
          >
            <w.icon className="h-5 w-5 text-[#A6553A]" strokeWidth={1.5} />
            <h3 className="mt-2 font-serif text-sm font-bold text-[#3C382F]">{w.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-[#3C382F]/70">{w.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-2 rounded-md bg-[#F2ECE0] px-4 py-3 text-sm text-[#3C382F]/80">
        <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-[#A6553A]" strokeWidth={1.5} />
        <span>
          如果遇到可疑來電或訊息，可撥打
          <strong className="mx-1 font-mono text-[#3C382F]">165</strong>
          反詐騙諮詢專線查證，
          <br />
          或直接透過構築所官方管道聯繫我們確認。
        </span>
      </div>
    </div>
  );
}
