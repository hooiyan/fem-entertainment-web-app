import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import CardTrending from '../components/CardTrending'
import Collection from '../components/Collection'
import SearchBar from '../components/SearchBar'
import { queryAtom, resultAtom } from '../lib/recoil-atoms'
import { fetcher } from '../utils'

export default function Home() {
  const [query, setQuery] = useRecoilState(queryAtom)
  const [result, setResult] = useRecoilState(resultAtom)
  const { data, error } = useSWR(`/api/search/${query}`, fetcher)

  const searchAll = e => {
    e.preventDefault()
    if (query.length === 0) {
      return
    } else {
      data ? setResult(data.results) : setResult([])
      setQuery('')
    }
  }

  return (
    <>
      <SearchBar handleSubmit={searchAll} />
      <Collection
        isTrending
        Component={CardTrending}
        endpoint="trending"
        limit={10}
        title="Trending today"
      />
      <Collection
        endpoint="upcoming-movies"
        href="/movie/upcoming"
        title="Upcoming movies"
      />
      <Collection
        endpoint="popular-movies"
        href="/movie/popular"
        title="Popular"
      />
      <Collection
        endpoint="top-rated-movies"
        href="/movie/top-rated"
        title="Top rated"
      />
    </>
  )
}
