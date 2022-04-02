import { useRouter } from 'next/router'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import SearchBar from '../../../components/SearchBar'
import { searchAll } from '../../../utils'
import { fetcher } from '../../../utils'

export default function SearchedAll() {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(`/api/search/${id}`, fetcher)
  const filteredResults = data
    ? data.results.filter(item => item.media_type !== 'person')
    : []

  if (error) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <>
      <SearchBar
        placeholder="Search for movies or TV series"
        searchPath={searchAll}
      />
      {data ? (
        <CollectionSearch
          arr={filteredResults}
          searchTerm={id}
          totalResult={data.total_results}
        />
      ) : null}
    </>
  )
}
