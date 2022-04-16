import Head from 'next/head'
import CardTrending from '../components/CardTrending'
import Collection from '../components/Collection'
import SearchBar from '../components/SearchBar'
import {
  movieNowPlaying,
  moviePopular,
  movieTopRated,
  movieUpcoming,
  trendingMovieDay,
  trendingTvDay,
  tvAiringToday,
  tvOnTheAir,
  tvPopular,
  tvTopRated,
} from '../lib/tmdb'
import { pathToSearchAll } from '../utils'

export default function Home() {
  const limitNormal = 8
  const limitTrending = 10

  return (
    <>
      <Head>
        <title>Home | Entertainment App</title>
      </Head>
      <SearchBar searchPath={pathToSearchAll} />

      {/* Collection of different groups of movies */}
      {/* <Collection
        isHomePage
        isTrending
        Component={CardTrending}
        endpoint={trendingMovieDay}
        href='/movie/trending?page=1'
        limit={limitTrending}
        title='Trending'
      /> */}
      {/* <Collection
        isHomePage
        endpoint={moviePopular}
        href='/movie/popular?page=1'
        limit={limitNormal}
        title='Popular'
      /> */}
      <Collection
        isHomePage
        endpoint={'/api/movie/now/1'}
        href='/movie/now/1'
        limit={limitNormal}
        title='Now playing'
      />
      {/* <Collection
        isHomePage
        endpoint={movieUpcoming}
        href='/movie/upcoming?page=1'
        limit={limitNormal}
        title='Upcoming'
      /> */}
      {/* <Collection
        isHomePage
        endpoint={movieTopRated}
        href='/movie/top?page=1'
        limit={limitNormal}
        title='Top rated'
      /> */}

      {/* Collection of different groups of tv series */}
      {/* <Collection
        isHomePage
        isTrending
        Component={CardTrending}
        endpoint={trendingTvDay}
        href='/tv/trending?page=1'
        limit={limitTrending}
        title='Trending'
        type='tv series'
      />
      <Collection
        isHomePage
        endpoint={tvPopular}
        href='/tv/popular?page=1'
        limit={limitNormal}
        media_type='tv'
        title='Popular'
        type='tv series'
      />
      <Collection
        isHomePage
        endpoint={tvAiringToday}
        href='/tv/airing?page=1'
        limit={limitNormal}
        media_type='tv'
        title='Airing today'
        type='tv series'
      />
      <Collection
        isHomePage
        endpoint={tvOnTheAir}
        href='/tv/onair?page=1'
        limit={limitNormal}
        media_type='tv'
        title='On air'
        type='tv series'
      />
      <Collection
        isHomePage
        endpoint={tvTopRated}
        href='/tv/top?page=1'
        limit={limitNormal}
        media_type='tv'
        title='Top rated'
        type='tv series'
      /> */}
    </>
  )
}
