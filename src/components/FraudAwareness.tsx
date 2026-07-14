import { ShieldAlert, PhoneOff, Link2Off, KeyRound, PhoneCall } from "lucide-react";

const WARNINGS = [
  {
    icon: PhoneOff,
    title: "官方不會打電話要你去 ATM 操作",
    desc: "任何自稱「客服」「物流」，要求你到 ATM 或網路銀行「解除分期」「取消重複訂單」的來電，一律是詐騙，請直接掛斷。",
  },
  {
    icon: KeyRound,
    title: "不會要求提供密碼或 OTP 驗證碼",
    desc: "正常取貨付款流程不需要提供信用卡卡號、OTP 簡訊驗證碼、網路銀行帳號密碼給任何人，包含自稱平台或門市人員者。",
  },
  {
    icon: Link2Off,
    title: "只透過官方網域下單",
    desc: "下單前請確認網址列是 myship.7-11.com.tw，不要點擊簡訊、社群訊息或不明來源分享的相似連結。",
  },
];

export function FraudAwareness() {
  return (
    <div className="rounded-lg border border-[#9B4A3F]/50 bg-[#9B4A3F]/5 p-6">
      <div className="flex items-center gap-2">
        <ShieldAlert className="h-5 w-5 text-[#9B4A3F]" strokeWidth={1.5} />
        <h2 className="font-serif text-xl font-bold text-[#8B5E3C]">防詐提醒</h2>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-[#8B5E3C]/75">
        近期常見假冒物流／客服名義的詐騙電話與簡訊，請訓練家下單時特別留意以下幾點：
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {WARNINGS.map((w) => (
          <div
            key={w.title}
            className="rounded-md border border-[#9B4A3F]/30 bg-[#FFFDD0] p-4"
          >
            <w.icon className="h-5 w-5 text-[#9B4A3F]" strokeWidth={1.5} />
            <h3 className="mt-2 font-serif text-sm font-bold text-[#8B5E3C]">{w.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-[#8B5E3C]/70">{w.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-2 rounded-md bg-[#FFFDD0] px-4 py-3 text-sm text-[#8B5E3C]/80">
        <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-[#9B4A3F]" strokeWidth={1.5} />
        <span>
          如果遇到可疑來電或訊息，可撥打
          <strong className="mx-1 font-mono text-[#8B5E3C]">165</strong>
          反詐騙諮詢專線查證，或直接透過構築所官方管道聯繫我們確認訂單狀態。
        </span>
      </div>
    </div>
  );
}
