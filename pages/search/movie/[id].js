import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import SearchBar from '../../../components/SearchBar'
import { queryHistoryAtom } from '../../../lib/recoil-atoms'
import { fetcher } from '../../../utils'

export default function SearchedMovie() {
  const router = useRouter()
  const { id } = router.query
  const [queryHistory, setQueryHistory] = useRecoilState(queryHistoryAtom)
  const [lastItem] = queryHistory.slice(-1)
  const { data, error } = useSWR(`/api/search/movie/${id}`, fetcher)

  // setQueryHistory([
  //   ...queryHistory,
  //   { searchTerm: id, totalResult: data.total_results },
  // ])

  if (error) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <>
    <SearchBar placeholder="Search for movies" searchPath="/search/movie/" />
      {data ? (
        <CollectionSearch
          arr={data ? data.results : []}
          searchTerm={id}
          totalResult={data.total_results}
        />
      ) : null}
    </>
  )
}

// enter value from the SearchBar component
// save the entered value in a recoil state
// direct the user to this page
// use that saved recoil state and pass it in the api call that we're going to do here
// update the ui with the response we get from the api
