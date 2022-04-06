import { useRouter } from 'next/router'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import LoadMore from '../../../components/LoadMore'
import SearchBar from '../../../components/SearchBar'
import { fetcher, pathToSearchTV } from '../../../utils'

export default function SearchedTV() {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(`/api/search/tv/${id}`, fetcher)

  if (error) return <div>Error occurred</div>

  return (
    <>
      <SearchBar
        placeholder="Search for TV series"
        searchPath={pathToSearchTV}
      />
      {data ? (
        <>
          <CollectionSearch
            arr={data ? data.results : []}
            media_type="tv"
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
