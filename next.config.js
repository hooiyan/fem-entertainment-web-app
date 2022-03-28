/** @type {import('next').NextConfig} */
const nextConfig = {
  dangerouslyAllowSVG: true,
  images: {
    // deviceSizes: [320, 375, 425, 768, 1024, 1200, 1600],
    domains: ['source.unsplash.com', 'image.tmdb.org'],
    // imageSizes: [300, 300, 300, 300, 300, 300, 300, 300],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
