import { TMDB_ENDPOINT, TMDB_API_KEY } from '../utils'

export function getUrl(endpoint, pageNumber = 1, optional = '') {
  return `${TMDB_ENDPOINT}/${endpoint}?api_key=${TMDB_API_KEY}&page=${pageNumber}${optional}`
}

export function getMovieDetail(id) {
  return `${TMDB_ENDPOINT}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos,images`
}

export function getTvDetail(id) {
  return `${TMDB_ENDPOINT}/tv/${id}?api_key=${TMDB_API_KEY}`
}

export function searchAll(query) {
  return `${TMDB_ENDPOINT}/search/multi?api_key=${TMDB_API_KEY}&query=${query}`
}

export function searchMovie(query) {
  return `${TMDB_ENDPOINT}/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
}

export function searchTv(query) {
  return `${TMDB_ENDPOINT}/search/tv?api_key=${TMDB_API_KEY}&query=${query}`
}

export const discover = `${TMDB_ENDPOINT}/genre/movie/list?api_key=${TMDB_API_KEY}`

// Trending
const trendingAllDay = 'trending/all/day'
const trendingAllWeek = 'trending/all/week'
const trendingMovieDay = 'trending/movie/day'
const trendingMovieWeek = 'trending/movie/week'
const trendingTvDay = 'trending/tv/day'
const trendingTvWeek = 'trending/tv/week'

// Movie
const movieNowPlaying = 'movie/now_playing'
const moviePopular = 'movie/popular'
const movieTopRated = 'movie/top_rated'
const movieUpcoming = 'movie/upcoming'
const movieLatest = 'movie/latest'

// TV
const tvAiringToday = 'tv/airing_today'
const tvOnTheAir = 'tv/on_the_air'

// Discover
const discoverMovie = '/discover/movie?with_genres=18'

export {
  trendingAllDay,
  trendingAllWeek,
  trendingMovieDay,
  trendingMovieWeek,
  trendingTvDay,
  trendingTvWeek,
  movieNowPlaying,
  moviePopular,
  movieTopRated,
  movieUpcoming,
  movieLatest,
  tvAiringToday,
  tvOnTheAir,
  discoverMovie,
}
