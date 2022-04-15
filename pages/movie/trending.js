import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import CollectionSearch from '../../components/CollectionSearch'
import Loading from '../../components/Loading'
import PageTitle from '../../components/PageTitle'
import PaginationImproved from '../../components/PaginationImproved'
import SearchBar from '../../components/SearchBar'
import { getUrl, trendingMovieDay } from '../../lib/tmdb'
import { fetcher, pathToSearchMovie } from '../../utils'

export default function TrendingMovies() {
  const router = useRouter()
  const { page } = router.query
  const [currentPage, setCurrentPage] = useState(Number(page))
  const url = getUrl(trendingMovieDay) + `&page=${currentPage}`
  const { data, error } = useSWR(url, fetcher)
  const isFirst = currentPage === 1
  const isLast = data ? currentPage === data.total_pages : false

  return (
    <div>
      <Head>
        <title>Trending Movies | Entertainment App</title>
      </Head>
      <SearchBar
        placeholder='Search for movies'
        searchPath={pathToSearchMovie}
      />
      <PageTitle title='trending movies' />
      {data ? (
        <>
          <CollectionSearch isGenre arr={data.results} />
          <PaginationImproved
            currentPageAdvance={currentPage + 1}
            currentPage={currentPage}
            prevHref={`/movie/trending?page=${currentPage - 1}`}
            nextHref={`/movie/trending?page=${currentPage + 1}`}
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
    </div>
  )
}
