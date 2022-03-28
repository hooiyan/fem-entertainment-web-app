// To create a smoother loading effect
// Reference: https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/shimmer.js
export const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>
`

export const toBase64 = str =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

// CONSTANTS for environment variables
export const TMDB_ENDPOINT = process.env.TMDB_ENDPOINT
export const TMDB_API_KEY = process.env.TMDB_API_KEY

// Render results
export const renderResults = (array, component) => {
  return array.map(item => {
    return component(item)
  })
}
