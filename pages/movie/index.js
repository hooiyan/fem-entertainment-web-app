import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import Collection from '../../components/Collection'
import SearchBar from '../../components/SearchBar'
import { movieResultAtom, queryAtom } from '../../recoil/atoms'
import { fetcher } from '../../utils'

export default function Movie() {
  const [query, setQuery] = useRecoilState(queryAtom)
  const [movieResult, setMovieResult] = useRecoilState(movieResultAtom)
  const { data, error } = useSWR(`/api/search/movie/${query}`, fetcher)

  const searchMovie = e => {
    e.preventDefault()
    if (query.length === 0) {
      return
    } else {
      data ? setMovieResult(data.results) : setMovieResult(movieResultAtom)
      setQuery('')
    }
  }

  return (
    <>
      {console.log(movieResult)}
      <SearchBar handleSubmit={searchMovie} placeholder="Search for movies" />
      <Collection endpoint="now-playing-movies" title="Now playing" />
      <Collection endpoint="popular-movies" title="Popular" />
      <Collection endpoint="top-rated-movies" title="Top rated" />
    </>
  )
}
