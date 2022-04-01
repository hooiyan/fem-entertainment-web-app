import { useRouter } from 'next/router'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import SearchBar from '../../../components/SearchBar'
import { fetcher } from '../../../utils'

export default function SearchedTV() {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(`/api/search/tv/${id}`, fetcher)

  if (error) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <>
      <SearchBar placeholder="Search for TV series" searchPath="/search/tv/" />
      {data ? (
        <CollectionSearch
          arr={data ? data.results : []}
          media_type="tv"
          searchTerm={id}
          totalResult={data.total_results}
        />
      ) : null}
    </>
  )
}
