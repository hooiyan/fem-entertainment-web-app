import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import { queryAtom } from '../atoms/queryAtom'
import { resultAtom } from '../atoms/resultAtom'
import CardNormal from '../components/CardNormal'
import CardTrending from '../components/CardTrending'
import Collection from '../components/Collection'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import { fetcher } from '../utils'

export default function Home() {
  const [query, setQuery] = useRecoilState(queryAtom)
  const [result, setResult] = useRecoilState(resultAtom)

  const { data, error } = useSWR(`/api/search/${query}`, fetcher)

  const searchMovieTv = e => {
    e.preventDefault()
    const value = e.target[0].value
    setQuery(encodeURIComponent(value))
    setResult(data)
  }

  return (
    <>
      <SearchBar handleSearch={searchMovieTv} />
      {console.log(result)}
      {/* {renderResults(result, CardNormal)} */}
      <Collection
        isTrending
        Component={CardTrending}
        endpoint="trending"
        limit={10}
        title="Trending today"
      />
      <Collection
        Component={CardNormal}
        endpoint="upcoming-movies"
        title="Upcoming movies"
      />
      <Footer />
    </>
  )
}
