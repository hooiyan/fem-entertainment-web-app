import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import CollectionSearch from '../../components/CollectionSearch'
import Loading from '../../components/Loading'
import PageTitle from '../../components/PageTitle'
import Pagination from '../../components/Pagination'
import SearchBar from '../../components/SearchBar'
import { getUrl, moviePopular } from '../../lib/tmdb'
import { fetcher, pathToSearchMovie } from '../../utils'

export default function Popular() {
  const [currentPage, setCurrentPage] = useState(1)
  const url = getUrl(moviePopular) + `&page=${currentPage}`
  const { data, error } = useSWR(url, fetcher)
  const isFirst = currentPage === 1
  const isLast = data ? currentPage === data.total_pages : false

  return (
    <div>
      <Head>
        <title>Popular Movies | Entertainment App</title>
      </Head>
      <SearchBar
        placeholder="Search for movies"
        searchPath={pathToSearchMovie}
      />
      <PageTitle title="popular movies" />
      {data ? (
        <>
          <CollectionSearch isGenre arr={data.results} />
          {/* <div style={{ display: 'none' }}>
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
          /> */}
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}
