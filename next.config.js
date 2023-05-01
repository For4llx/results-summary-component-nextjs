/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@acme/ui', 'lodash-es','react-countup', 'countup.js'],
}


module.exports = nextConfig
