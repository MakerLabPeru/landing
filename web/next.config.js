/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    ramda: {
      transform: 'ramda/es/{{member}}',
      preventFullImport: true,
    },
  },
  transpilePackages: ['@accesible/disclosure', 'ramda'],
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
