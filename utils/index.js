import { v4 as uuidv4 } from 'uuid'

// CONSTANTS
export const TMDB_ENDPOINT = process.env.TMDB_ENDPOINT
export const TMDB_API_KEY = process.env.TMDB_API_KEY
export const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original'

// Search path
export const pathToSearchAll = '/search/'
export const pathToSearchMovie = '/search/movie/'
export const pathToSearchTV = '/search/tv/'

// Fetcher for SWR
export const fetcher = url => fetch(url).then(res => res.json())

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

// Render results
export const renderResults = (array, Component, media_type) => {
  return array.map(item => (
    <Component
      key={item.id || uuidv4()}
      id={item.id}
      category={item.media_type || media_type}
      rating={item.adult}
      src={
        item.backdrop_path
          ? `${TMDB_IMAGE_ENDPOINT}/${item.backdrop_path}`
          : `${TMDB_IMAGE_ENDPOINT}/${item.poster_path}`
      }
      title={
        item.title ? item.title : item.original_name || item.original_title
      }
      year={item.release_date || item.first_air_date}
    />
  ))
}

// Slice array
export const sliceArray = (arr, limit) => {
  return arr.slice(0, limit)
}
