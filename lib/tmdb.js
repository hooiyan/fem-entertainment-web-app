import { TMDB_ENDPOINT, TMDB_API_KEY } from '../utils'

export function getUrl(endpoint) {
  return `${TMDB_ENDPOINT}/${endpoint}?api_key=${TMDB_API_KEY}`
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
  tvAiringToday,
  tvOnTheAir,
}
