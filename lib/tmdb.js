import { TMDB_ENDPOINT, TMDB_API_KEY } from '../utils'

export function getUrl(endpoint, pageNumber = 3) {
  return `${TMDB_ENDPOINT}/${endpoint}?api_key=${TMDB_API_KEY}&page=${pageNumber}`
}

export function getMovieDetail(id) {
  return `${TMDB_ENDPOINT}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos,images`
}

export function getTvDetail(id) {
  return `${TMDB_ENDPOINT}/tv/${id}?api_key=${TMDB_API_KEY}`
}

export function searchMulti(query) {
  return `${TMDB_ENDPOINT}/search/multi?api_key=${TMDB_API_KEY}&query=${query}`
}

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
}
