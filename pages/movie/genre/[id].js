import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import PageTitle from '../../../components/PageTitle'
import PaginationImproved from '../../../components/PaginationImproved'
import SearchBar from '../../../components/SearchBar'
import { discoverMovie, genreMovie, getUrl } from '../../../lib/tmdb'
import { fetcher, pathToSearchMovie } from '../../../utils'

export default function GenreMovie({ endpoint, genreID, query, result }) {
  const router = useRouter()
  const { page } = router.query
  const [currentPage, setCurrentPage] = useState(Number(page))
  const url = endpoint + query + `&page=${currentPage}`
  const { data, error } = useSWR(url, fetcher)
  const { data: data2, error: genresError } = useSWR(
    getUrl(genreMovie),
    fetcher
  )
  const genreName = data2
    ? data2.genres.filter(g => genreID.includes(g.id)).map(g => g.name)[0]
    : []
  const isFirst = currentPage === 1
  const isLast = currentPage === result.total_pages

  // TODO: Error handling

  return (
    <div>
      <Head>
        <title>{genreName} Movies | Entertainment App</title>
      </Head>
      <SearchBar
        placeholder="Search for movies"
        searchPath={pathToSearchMovie}
      />
      <PageTitle title={genreName} />
      {data ? (
        <>
          <CollectionSearch isGenre arr={data.results || []} />
          <PaginationImproved
            currentPageAdvance={currentPage + 1}
            currentPage={currentPage}
            prevHref={`/movie/genre/${genreID}?page=${currentPage - 1}`}
            nextHref={`/movie/genre/${genreID}?page=${currentPage + 1}`}
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

export async function getStaticPaths() {
  const url = getUrl(genreMovie)
  const res = await fetch(url)
  const data = await res.json()

  const paths = data.genres.map(genre => ({
    params: { id: genre.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const genreID = params.id
  const query = `&with_genres=${genreID}`
  const endpoint = getUrl(discoverMovie)
  const url = getUrl(discoverMovie, query)
  const res = await fetch(url)
  const result = await res.json()

  return {
    props: { endpoint, genreID, query, result },
  }
}
