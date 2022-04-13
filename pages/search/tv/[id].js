import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import PaginationImproved from '../../../components/PaginationImproved'
import SearchBar from '../../../components/SearchBar'
import { searchTv } from '../../../lib/tmdb'
import { fetcher, pathToSearchTV } from '../../../utils'

export default function SearchedTV() {
  const router = useRouter()
  const { id, page } = router.query
  const [currentPage, setCurrentPage] = useState(Number(page))
  const url = searchTv(id) + `&page=${currentPage}`
  const { data, error } = useSWR(url, fetcher)
  const isFirst = currentPage === 1
  const isLast = data ? currentPage === data.total_pages : false

  // TODO: Error handling
  if (error) return <div>Error occurred</div>

  return (
    <>
      <Head>
        <title>{id} - Search Results | Entertainment App</title>
      </Head>
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
          <PaginationImproved
            currentPageAdvance={currentPage + 1}
            currentPage={currentPage}
            prevHref={`${pathToSearchTV}${id}?page=${currentPage - 1}`}
            nextHref={`${pathToSearchTV}${id}?page=${currentPage + 1}`}
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
