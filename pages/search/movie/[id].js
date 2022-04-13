import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import PaginationImproved from '../../../components/PaginationImproved'
import SearchBar from '../../../components/SearchBar'
import { searchMovie } from '../../../lib/tmdb'
import { fetcher, pathToSearchMovie } from '../../../utils'

export default function SearchedMovie() {
  const router = useRouter()
  const { id, page } = router.query
  const [currentPage, setCurrentPage] = useState(Number(page))
  const url = searchMovie(id) + `&page=${currentPage}`
  const { data, error } = useSWR(url, fetcher)
  const isFirst = currentPage === 1
  const isLast = data ? currentPage === data.total_pages : false

  console.log(data)

  // TODO: Error handling
  if (error) return <div>Error occurred</div>

  return (
    <>
      <Head>
        <title>{id} - Search Results | Entertainment App</title>
      </Head>
      <SearchBar
        placeholder="Search for movies"
        searchPath={pathToSearchMovie}
      />
      {data ? (
        <>
          <CollectionSearch
            arr={data ? data.results || [] : []}
            searchTerm={id}
            totalResult={data.total_results}
          />
          <PaginationImproved
            currentPageAdvance={currentPage + 1}
            currentPage={currentPage}
            prevHref={`${pathToSearchMovie}${id}?page=${currentPage - 1}`}
            nextHref={`${pathToSearchMovie}${id}?page=${currentPage + 1}`}
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
