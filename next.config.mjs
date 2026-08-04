/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myship.7-11.com.tw",
        pathname: "/i/cgdm/**",
      },
    ],
    // 賣貨便的圖床（CloudFront）會擋掉 Vercel 圖片最佳化伺服器發出的請求
    // （回 401/403，導致 Vercel 502 OPTIMIZED_EXTERNAL_IMAGE_REQUEST_UNAUTHORIZED），
    // 但瀏覽器直接請求該圖床是正常的，所以改成不經 Vercel 代理最佳化，
    // 讓瀏覽器直接跟賣貨便要圖。
    unoptimized: true,
  },
};

export default nextConfig;
