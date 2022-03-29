/** @type {import('next').NextConfig} */
const nextConfig = {
  dangerouslyAllowSVG: true,
  images: {
    domains: ['source.unsplash.com', 'image.tmdb.org'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
