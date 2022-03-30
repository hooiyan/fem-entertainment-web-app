import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import Collection from '../../components/Collection'
import SearchBar from '../../components/SearchBar'
import { queryAtom, tvResultAtom } from '../../recoil/atoms'
import { fetcher } from '../../utils'

export default function TV() {
  const [query, setQuery] = useRecoilState(queryAtom)
  const [tvResult, setTVResult] = useRecoilState(tvResultAtom)
  const { data, error } = useSWR(`/api/search/tv/${query}`, fetcher)

  const searchTV = e => {
    e.preventDefault()
    if (query.length === 0) {
      return
    } else {
      data ? setTVResult(data.results) : setTVResult(tvResultAtom)
      setQuery('')
    }
  }

  return (
    <>
      {console.log(tvResult)}
      <SearchBar handleSubmit={searchTV} placeholder="Search for TV series" />
      <Collection
        endpoint="airing-today"
        media_type="tv"
        title="Airing today"
      />
      <Collection endpoint="on-the-air" media_type="tv" title="On the air" />I
    </>
  )
}
