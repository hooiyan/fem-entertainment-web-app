import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import Collection from '../../../components/Collection'
import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import LoadMore from '../../../components/LoadMore'
import SearchBar from '../../../components/SearchBar'
import { pageAtom, totalResultAtom } from '../../../lib/recoil-atoms'
import {
  discoverMovie,
  genreMovie,
  getUrl,
  searchMovie,
} from '../../../lib/tmdb'
import { fetcher } from '../../../utils'
import Pagination from '../../../components/Pagination'

export default function Genre({ result, genreID, endpoint, query }) {
  const [currentPage, setCurrentPage] = useRecoilState(pageAtom)
  const [totalResult, setTotalResult] = useRecoilState(totalResultAtom)
  const url = endpoint + `&page=${currentPage}` + query
  console.log(url)
  const { data, error } = useSWR(url, fetcher)

  const addPage = () => {
    setCurrentPage(currentPage + 1)
    setTotalResult([...totalResult, ...data.results])
  }

  const isFirst = result && result.page === 1

  return (
    <div>
      <SearchBar placeholder="Search for movies" searchPath={searchMovie} />
      {result ? (
        <>
          <section>
            <CollectionSearch arr={result.results} isGenre />
            {data && currentPage > 1 ? (
              <CollectionSearch arr={totalResult} isGenre />
            ) : (
              <Loading />
            )}
            {/* {data && currentPage === data.total_pages ? (
              <p>You have reached the end</p>
            ) : null} */}
          </section>
          <Pagination
            isFirst={isFirst}
            previousPageNumber={currentPage - 1}
            nextPageNumber={currentPage + 1}
          />
          {data ? console.log(data) : null}
          {/* <LoadMore onClick={addPage} /> */}
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
    props: { result, genreID, query, endpoint },
  }
}
