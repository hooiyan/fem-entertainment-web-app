import { useRouter } from 'next/router'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import SearchBar from '../../../components/SearchBar'
import { fetcher } from '../../../utils'

export default function SearchedMovie() {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(`/api/search/movie/${id}`, fetcher)

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
