/** @type {import('next').NextConfig} */
const nextConfig = {
  dangerouslyAllowSVG: true,
  // env: {
  //   TMDB_ENDPOINT: process.env.TMDB_ENDPOINT,
  //   TMDB_API_KEY: process.env.TMDB_API_KEY,
  // },
  images: {
    domains: ['source.unsplash.com', 'image.tmdb.org'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
