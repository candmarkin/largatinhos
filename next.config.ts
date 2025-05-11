import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'placecats.com',
    },{
      protocol: 'https',
      hostname: 'storage.googleapis.com',
    }]
  },

};
export default nextConfig;
