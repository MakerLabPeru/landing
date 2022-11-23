/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ['@accesible/disclosure'],
  },
};

module.exports = nextConfig;
