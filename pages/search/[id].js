import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import CollectionSearch from '../../components/CollectionSearch'
import Loading from '../../components/Loading'
import PaginationImproved from '../../components/PaginationImproved'
import SearchBar from '../../components/SearchBar'
import { searchAll } from '../../lib/tmdb'
import { fetcher, pathToSearchAll } from '../../utils'

export default function SearchedAll() {
  const router = useRouter()
  const { id, page } = router.query
  const [currentPage, setCurrentPage] = useState(Number(page))
  const url = searchAll(id) + `&page=${page}`
  const { data, error } = useSWR(url, fetcher)
  const isFirst = currentPage === 1
  const isLast = data ? Number(page) === data.total_pages : false

  const filteredResults = data
    ? data.results.filter(item => item.media_type !== 'person')
    : []

  // TODO: Error handling
  if (error) return <div>Error occurred</div>

  return (
    <>
      <Head>
        <title>{id} - Search Results | Entertainment App</title>
      </Head>
      <SearchBar
        placeholder='Search for movies or TV series'
        searchPath={pathToSearchAll}
      />
      {data ? (
        <>
          <CollectionSearch
            arr={filteredResults}
            searchTerm={id}
            totalResult={data.total_results}
          />
          <PaginationImproved
            currentPageAdvance={currentPage + 1}
            currentPage={currentPage}
            prevHref={`${pathToSearchAll}${id}?page=${currentPage - 1}`}
            nextHref={`${pathToSearchAll}${id}?page=${currentPage + 1}`}
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
