import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import CollectionSearch from '../../components/CollectionSearch'
import Loading from '../../components/Loading'
import PageTitle from '../../components/PageTitle'
import Pagination from '../../components/Pagination'
import SearchBar from '../../components/SearchBar'
import { getUrl, trendingMovieDay } from '../../lib/tmdb'
import { fetcher, pathToSearchMovie } from '../../utils'

export default function Trending() {
  const router = useRouter()
  const { page } = router.query
  const [currentPage, setCurrentPage] = useState(Number(page))
  const url = getUrl(trendingMovieDay) + `&page=${page}`
  const { data, error } = useSWR(url, fetcher)
  const isFirst = currentPage === 1
  const isLast = data ? Number(page) === data.total_pages : false

  console.log(data);
  console.log(page);

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div>
      <Head>
        <title>Trending Movies | Entertainment App</title>
      </Head>
      <SearchBar
        placeholder="Search for movies"
        searchPath={pathToSearchMovie}
      />
      <PageTitle title="trending movies" />
      {data ? (
        <>
          <CollectionSearch isGenre arr={data.results} />
          <div style={{ display: 'none' }}>
            <Pagination
              currentPage={Number(page) + 1}
              prevHref={`${pathToSearchMovie}trending?page=${currentPage - 1}`}
              nextHref={`${pathToSearchMovie}trending?page=${currentPage + 1}`}
              isFirst={isFirst}
              isLast={isLast}
              goToPreviousPage={() => setCurrentPage(currentPage - 1)}
              goToNextPage={() => setCurrentPage(currentPage + 1)}
              totalPages={data.total_pages}
            />
          </div>
          <Pagination
            currentPage={Number(page)}
            prevHref={`${pathToSearchMovie}trending?page=${currentPage - 1}`}
            nextHref={`${pathToSearchMovie}trending?page=${currentPage + 1}`}
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
