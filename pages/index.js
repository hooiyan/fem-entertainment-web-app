import CardTrending from '../components/CardTrending'
import Collection from '../components/Collection'
import SearchBar from '../components/SearchBar'

export default function Home() {
  const limitNormal = 8
  const limitTrending = 10

  return (
    <>
      <SearchBar searchPath="/search/" />
      <Collection
        isTrending
        Component={CardTrending}
        endpoint="trending"
        limit={limitTrending}
        title="Trending today"
      />
      <Collection
        endpoint="upcoming-movies"
        href="/movie/upcoming"
        limit={limitNormal}
        title="Upcoming movies"
      />
      <Collection
        endpoint="popular-movies"
        href="/movie/popular"
        limit={limitNormal}
        title="Popular movies"
      />
      <Collection
        endpoint="top-rated-movies"
        href="/movie/top-rated"
        limit={limitNormal}
        title="Top rated movies"
      />
      <Collection
        endpoint="airing-today"
        href="/tv/airing-today"
        limit={limitNormal}
        media_type="tv"
        title="TV airing today"
      />
      <Collection
        endpoint="on-the-air"
        href="/tv/on-the-air"
        limit={limitNormal}
        media_type="tv"
        title="TV on the air"
      />
    </>
  )
}
