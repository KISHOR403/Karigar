import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.karigar.craft',
      },
    ],
  },
  transpilePackages: ['@karigar/ui', '@karigar/types', '@karigar/config', '@karigar/validation'],
};

export default nextConfig;
