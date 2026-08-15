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
  },
};

export default nextConfig;
