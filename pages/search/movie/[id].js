import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import LoadMore from '../../../components/LoadMore'
import Pagination from '../../../components/Pagination'
import SearchBar from '../../../components/SearchBar'
import { currentPageAtom } from '../../../lib/recoil-atoms'
import { searchMovie } from '../../../lib/tmdb'
import { fetcher, pathToSearchMovie } from '../../../utils'

export default function SearchedMovie() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom)
  const router = useRouter()
  const { id } = router.query
  const url = searchMovie(id) + `&page=${currentPage}`
  const { data, error } = useSWR(url, fetcher)
  const isFirst = currentPage === 1
  const isLast = data ? currentPage === data.total_pages : false

  // TODO: Error handling
  if (error) return <div>Error occurred</div>

  return (
    <>
      <SearchBar
        placeholder="Search for movies"
        searchPath={pathToSearchMovie}
      />
      {data ? (
        <>
          <CollectionSearch
            arr={data ? data.results : []}
            searchTerm={id}
            totalResult={data.total_results}
          />
          <div style={{ display: 'none' }}>
            <Pagination
              currentPage={currentPage + 1}
              isFirst={isFirst}
              isLast={isLast}
              goToPreviousPage={() => setCurrentPage(currentPage - 1)}
              goToNextPage={() => setCurrentPage(currentPage + 1)}
              totalPages={data.total_pages}
            />
          </div>
          <Pagination
            currentPage={currentPage}
            isFirst={isFirst}
            isLast={isLast}
            goToPreviousPage={() => setCurrentPage(currentPage - 1)}
            goToNextPage={() => setCurrentPage(currentPage + 1)}
            totalPages={data.total_pages}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
