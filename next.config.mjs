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
    ],
  },
};

export default nextConfig;
