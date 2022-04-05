import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import LoadMore from '../../../components/LoadMore'
import SearchBar from '../../../components/SearchBar'
import { pageAtom, totalResultAtom } from '../../../lib/recoil-atoms'
import { discoverMovie, genreMovie, getUrl } from '../../../lib/tmdb'
import { fetcher, pathToSearchMovie } from '../../../utils'

export default function Genre({ endpoint, query, result }) {
  const [currentPage, setCurrentPage] = useRecoilState(pageAtom)
  const [totalResult, setTotalResult] = useRecoilState(totalResultAtom)

  const url = endpoint + `&page=${currentPage}` + query
  const { data, error } = useSWR(url, fetcher)

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
    setTotalResult([...totalResult, ...data.results])
  }

  return (
    <div>
      <SearchBar
        placeholder="Search for movies"
        searchPath={pathToSearchMovie}
      />
      {result ? (
        <>
          <section>
            <CollectionSearch arr={result.results} isGenre />
            {data ? (
              <>
                <CollectionSearch isGenre arr={totalResult} limit={20001} />
                <LoadMore onClick={nextPage} />
              </>
            ) : (
              <Loading />
            )}
          </section>
          {data && currentPage === data.total_pages ? (
            <p>You have reached the end</p>
          ) : null}
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
