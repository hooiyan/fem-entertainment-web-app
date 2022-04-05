import { TMDB_ENDPOINT, TMDB_API_KEY } from '../utils'

// export function getUrl(endpoint, pageNumber = 1, optional = '') {
//   return `${TMDB_ENDPOINT}/${endpoint}?api_key=${TMDB_API_KEY}&page=${pageNumber}${optional}`
// }

export function getUrl(endpoint, optional = '') {
  return `${TMDB_ENDPOINT}/${endpoint}?api_key=${TMDB_API_KEY}${optional}`
}

export function getMovieDetail(id) {
  return `${TMDB_ENDPOINT}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos,images`
}

export function getTvDetail(id) {
  return `${TMDB_ENDPOINT}/tv/${id}?api_key=${TMDB_API_KEY}`
}

// Search for movies and tv series
export function searchAll(query) {
  return `${TMDB_ENDPOINT}/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
    query
  )}`
}

// Search for movies only
export function searchMovie(query) {
  return `${TMDB_ENDPOINT}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
    query
  )}`
}

// Search for tv series only
export function searchTv(query) {
  return `${TMDB_ENDPOINT}/search/tv?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
    query
  )}`
}

// Trending
export const trendingAllDay = 'trending/all/day'
export const trendingAllWeek = 'trending/all/week'
export const trendingMovieDay = 'trending/movie/day'
export const trendingMovieWeek = 'trending/movie/week'
export const trendingTvDay = 'trending/tv/day'
export const trendingTvWeek = 'trending/tv/week'

// Movie
export const movieNowPlaying = 'movie/now_playing'
export const moviePopular = 'movie/popular'
export const movieTopRated = 'movie/top_rated'
export const movieUpcoming = 'movie/upcoming'
export const movieLatest = 'movie/latest'

// TV
export const tvAiringToday = 'tv/airing_today'
export const tvOnTheAir = 'tv/on_the_air'

// Genre
export const genreMovie = '/genre/movie/list'
export const genreTV = '/genre/tv/list'

// Discover
export const discoverMovie = 'discover/movie'
export const discoverTV = 'discover/tv'
