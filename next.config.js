/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.de',
      },
      {
        protocol: 'https',
        hostname: '*.com',
      },
    ],
  },
};

module.exports = nextConfig;
