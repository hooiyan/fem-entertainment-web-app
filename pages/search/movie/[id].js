import { useRouter } from 'next/router'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import LoadMore from '../../../components/LoadMore'
import SearchBar from '../../../components/SearchBar'
import { fetcher, pathToSearchMovie } from '../../../utils'

export default function SearchedMovie() {
  const router = useRouter()
  const { id } = router.query
  const { data, error } = useSWR(`/api/search/movie/${id}`, fetcher)

  if (error) return <div>Error occurred</div>

  return (
    <>
      <SearchBar placeholder="Search for movies" searchPath={pathToSearchMovie} />
      {data ? (
        <>
          <CollectionSearch
            arr={data ? data.results : []}
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
