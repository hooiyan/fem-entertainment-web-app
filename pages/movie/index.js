import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import { queryAtom } from '../../atoms/queryAtom'
import { resultAtom } from '../../atoms/resultAtom'
import CardNormal from '../../components/CardNormal'
import Collection from '../../components/Collection'
import Footer from '../../components/Footer'
import SearchBar from '../../components/SearchBar'
import { fetcher, renderResults } from '../../utils'

export default function Movie() {
  const [query, setQuery] = useRecoilState(queryAtom)
  const [result, setResult] = useRecoilState(resultAtom)

  const { data, error } = useSWR(`/api/search/movie/${query}`, fetcher)

  const searchMovie = e => {
    e.preventDefault()

    if (query.length === 0) {
      return
    } else {
      data ? setResult(data.results) : setResult([])
      data ? console.log(data.total_results) : console.log(0)
      setQuery('')
    }
  }

  return (
    <>
      <SearchBar
        handleChange={e => setQuery(e.target.value)}
        handleSubmit={searchMovie}
        placeholder="Search for movies"
      />
      <div>{renderResults(result, CardNormal)}</div>
      {result.map(item => {
        console.log(typeof item.release_date)
      })}
      <Collection endpoint="now-playing-movies" title="Now playing" />
      <Collection endpoint="popular-movies" title="Popular" />
      <Collection endpoint="top-rated-movies" title="Top rated" />
      <Footer />
    </>
  )
}
