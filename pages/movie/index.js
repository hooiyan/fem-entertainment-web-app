import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import CardNormal from '../../components/CardNormal'
import Collection from '../../components/Collection'
import CollectionSearch from '../../components/CollectionSearch'
import Heading from '../../components/Heading'
import SearchBar from '../../components/SearchBar'
import {
  movieResultAtom,
  queryAtom,
  queryHistoryAtom,
} from '../../lib/recoil-atoms'
import { fetcher, renderResults, sliceArray } from '../../utils'
import { useRouter } from 'next/router'

export default function Movie() {
  const router = useRouter()
  const [query, setQuery] = useRecoilState(queryAtom)
  const [queryHistory, setQueryHistory] = useRecoilState(queryHistoryAtom)
  const [movieResult, setMovieResult] = useRecoilState(movieResultAtom)
  const { data, error } = useSWR(`/api/search/movie/${query}`, fetcher)
  const [lastItem] = queryHistory.slice(-1)

  const searchMovie = e => {
    e.preventDefault()
    if (query.length === 0) {
      return
    } else {
      data ? setMovieResult(data.results) : setMovieResult([])
      data
        ? setQueryHistory([
            ...queryHistory,
            { searchTerm: query, totalResult: data.total_results },
          ])
        : null
      setQuery('')
    }
  }

  return (
    <>
      {console.log('movieResult: ', movieResult)}
      {console.log('query: ', query)}
      {console.log('data: ', data)}
      <SearchBar handleSubmit={searchMovie} placeholder="Search for movies" />
      <CollectionSearch
        arr={movieResult}
        href="/"
        searchTerm={lastItem.searchTerm}
        totalResult={lastItem.totalResult}
      />
    </>
  )
}
