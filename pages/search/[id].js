import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import CollectionSearch from '../../components/CollectionSearch'
import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'
import SearchBar from '../../components/SearchBar'
import { currentPageAtom } from '../../lib/recoil-atoms'
import { searchAll } from '../../lib/tmdb'
import { fetcher, pathToSearchAll } from '../../utils'

export default function SearchedAll() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageAtom)
  const router = useRouter()
  const { id } = router.query
  const url = searchAll(id) + `&page=${currentPage}`
  const { data, error } = useSWR(url, fetcher)
  const isFirst = currentPage === 1
  const isLast = data ? currentPage === data.total_pages : false

  const filteredResults = data
    ? data.results.filter(item => item.media_type !== 'person')
    : []

  // TODO: Error handling
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
