import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import CollectionSearch from '../../components/CollectionSearch'
import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'
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

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  // TODO: Error handling
  if (error) return <div>Error occurred</div>

  return (
    <>
      <Head>
        <title>{id} - Search Results | Entertainment App</title>
      </Head>
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
              currentPage={Number(page) + 1}
              prevHref={`${pathToSearchAll}${id}?page=${currentPage - 1}`}
              nextHref={`${pathToSearchAll}${id}?page=${currentPage + 1}`}
              isFirst={isFirst}
              isLast={isLast}
              goToPreviousPage={prevPage}
              goToNextPage={nextPage}
              totalPages={data.total_pages}
            />
          </div>
          {/* <Link
            href={`${pathToSearchAll}${id}?page=${currentPage - 1}`}
            as={`${pathToSearchAll}${id}?page=${currentPage - 1}`}>
            <a onClick={prevPage}>Previous page</a>
          </Link>
          <Link
            href={`${pathToSearchAll}${id}?page=${currentPage + 1}`}
            as={`${pathToSearchAll}${id}?page=${currentPage + 1}`}>
            <a onClick={nextPage}>Next page</a>
          </Link> */}
          <Pagination
            currentPage={Number(page)}
            prevHref={`${pathToSearchAll}${id}?page=${currentPage - 1}`}
            nextHref={`${pathToSearchAll}${id}?page=${currentPage + 1}`}
            isFirst={isFirst}
            isLast={isLast}
            goToPreviousPage={prevPage}
            goToNextPage={nextPage}
            totalPages={data.total_pages}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
