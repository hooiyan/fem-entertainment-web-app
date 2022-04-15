import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import CollectionSearch from '../../components/CollectionSearch'
import Loading from '../../components/Loading'
import PageTitle from '../../components/PageTitle'
import PaginationImproved from '../../components/PaginationImproved'
import SearchBar from '../../components/SearchBar'
import { getUrl, trendingTvDay } from '../../lib/tmdb'
import { fetcher, pathToSearchTV } from '../../utils'

export default function TrendingTV() {
  const router = useRouter()
  const { page } = router.query
  const [currentPage, setCurrentPage] = useState(Number(page))
  const url = getUrl(trendingTvDay) + `&page=${currentPage}`
  const { data, error } = useSWR(url, fetcher)
  const isFirst = currentPage === 1
  const isLast = data ? currentPage === data.total_pages : false

  return (
    <div>
      <Head>
        <title>Trending TV Series</title>
      </Head>
      <SearchBar
        placeholder='Search for TV series'
        searchPath={pathToSearchTV}
      />
      <PageTitle title='trending tv series' />
      {data ? (
        <>
          <CollectionSearch isGenre arr={data.results} media_type='tv' />
          <PaginationImproved
            currentPageAdvance={currentPage + 1}
            currentPage={currentPage}
            prevHref={`/tv/trending?page=${currentPage - 1}`}
            nextHref={`/tv/trending?page=${currentPage + 1}`}
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
