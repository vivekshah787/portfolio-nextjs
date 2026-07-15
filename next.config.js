/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vivekshah.netlify.app',
      },
    ],
  },
};

module.exports = nextConfig;
