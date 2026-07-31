// 網站正式網域。部署到 Vercel 後，若綁定自訂網域，把下面這行換成正式網域，
// 否則會 fallback 用 Vercel 配的預設網址（VERCEL_URL），本機開發則 fallback 到 localhost。
const PRODUCTION_URL = "https://deck-foundry.vercel.app";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ??
  (process.env.NODE_ENV === "production" ? PRODUCTION_URL : "http://localhost:3000");
