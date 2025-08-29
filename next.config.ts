import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // ignoreBuildErrors: true, //<-- 에러가 있더라도 빌드를 생성하고 싶으면 설정
  // experimental: {
  //   ppr: "incremental",
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/300/400",
      },
    ],
  },
};

export default nextConfig;
