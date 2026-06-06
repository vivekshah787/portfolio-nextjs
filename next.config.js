/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vmshah.netlify.app',
      },
    ],
  },
};

module.exports = nextConfig;
