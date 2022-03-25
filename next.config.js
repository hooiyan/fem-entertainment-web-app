/** @type {import('next').NextConfig} */
const nextConfig = {
  dangerouslyAllowSVG: true,
  images: {
    domains: ['source.unsplash.com'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
