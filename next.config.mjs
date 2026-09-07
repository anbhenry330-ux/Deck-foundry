/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myship.7-11.com.tw",
        pathname: "/i/cgdm/**",
      },
      {
        protocol: "https",
        hostname: "limitlesstcg.nyc3.cdn.digitaloceanspaces.com",
        pathname: "/tpci/**",
      },
      {
        protocol: "https",
        hostname: "asia.pokemon-card.com",
        pathname: "/tw/card-img/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "deck-foundry.vercel.app" }],
        destination: "https://deckfoundry-ptcg.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
