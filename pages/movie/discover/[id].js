import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import PageTitle from '../../../components/PageTitle'
import Pagination from '../../../components/Pagination'
import SearchBar from '../../../components/SearchBar'
import { discoverMovie, genreMovie, getUrl } from '../../../lib/tmdb'
import { fetcher, pathToSearchMovie } from '../../../utils'

export default function GenreMovie({ endpoint, genreID, query, result }) {
  const [currentPage, setCurrentPage] = useState(1)
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
        <title>{genreName} Movies</title>
      </Head>
      <SearchBar
        placeholder="Search for movies"
        searchPath={pathToSearchMovie}
      />
      <PageTitle title={genreName} />
      {data ? (
        <>
          <CollectionSearch isGenre arr={data.results || []} />
          <div style={{ display: 'none' }}>
            <Pagination
              currentPage={currentPage + 1}
              isFirst={isFirst}
              isLast={isLast}
              goToPreviousPage={() => setCurrentPage(currentPage - 1)}
              goToNextPage={() => setCurrentPage(currentPage + 1)}
              totalPages={result.total_pages}
            />
          </div>
          <Pagination
            currentPage={currentPage}
            isFirst={isFirst}
            isLast={isLast}
            goToPreviousPage={() => setCurrentPage(currentPage - 1)}
            goToNextPage={() => setCurrentPage(currentPage + 1)}
            totalPages={result.total_pages}
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
