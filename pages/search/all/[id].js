import { useRouter } from 'next/router'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import LoadMore from '../../../components/LoadMore'
import SearchBar from '../../../components/SearchBar'
import { fetcher, pathToSearchAll } from '../../../utils'

export default function SearchedAll() {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(`/api/search/${id}`, fetcher)
  const filteredResults = data
    ? data.results.filter(item => item.media_type !== 'person')
    : []

  if (error) return <div>Error occurred</div>

  return (
    <>
      <SearchBar
        placeholder="Search for movies or TV series"
        searchPath={pathToSearchAll}
      />
      {data ? (
        <>
          <CollectionSearch
            arr={filteredResults}
            searchTerm={id}
            totalResult={data.total_results}
          />
          <LoadMore />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
