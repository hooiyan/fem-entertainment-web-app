import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import PageTitle from '../../../components/PageTitle'
import Pagination from '../../../components/Pagination'
import SearchBar from '../../../components/SearchBar'
import { discoverTV, genreTV, getUrl } from '../../../lib/tmdb'
import { fetcher, pathToSearchTV } from '../../../utils'

export default function GenreTV({ endpoint, genreID, query, result }) {
  const [currentPage, setCurrentPage] = useState(1)
  const url = endpoint + query + `&page=${currentPage}`
  const { data, error } = useSWR(url, fetcher)
  const { data: data2, error: genresError } = useSWR(getUrl(genreTV), fetcher)
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
        placeholder="Search for TV series"
        searchPath={pathToSearchTV}
      />
      <PageTitle title={genreName} />
      {data ? (
        <>
          <CollectionSearch
            isGenre
            arr={data.results || []}
            limit={99999}
            media_type="tv"
          />
          {/* <div style={{ display: 'none' }}>
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
          /> */}
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export async function getStaticPaths() {
  const url = getUrl(genreTV)
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
  const endpoint = getUrl(discoverTV)
  const url = getUrl(discoverTV, query)
  const res = await fetch(url)
  const result = await res.json()

  return {
    props: { endpoint, genreID, query, result },
  }
}
