import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import useSWR from 'swr'
import Collection from '../../../components/Collection'
import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import LoadMore from '../../../components/LoadMore'
import SearchBar from '../../../components/SearchBar'
import {
  currentResultAtom,
  pageAtom,
  totalResultAtom,
} from '../../../lib/recoil-atoms'
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
  const [currentResult, setCurrentResult] = useRecoilState(currentResultAtom)

  const url = endpoint + `&page=${currentPage}` + query
  const { data, error } = useSWR(url, fetcher)

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
    setTotalResult([...totalResult, ...data.results])
    // const startIndex = currentPage * 20 - 20
    // const endIndex = startIndex + 20
    // const finalResult = totalResult.slice(startIndex, endIndex)
    // setCurrentResult([...finalResult])
    // console.log(finalResult)
  }

  const goToPreviousPage = () => {
    setCurrentPage(page => page - 1)
  }

  const goToNextPage = () => {
    setCurrentPage(page => page + 1)
    setTotalResult([...totalResult, ...data.results])
  }

  const getPaginationData = arr => {
    const dataLimit = 20
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return arr.slice(startIndex, endIndex)
  }

  return (
    <div>
      <SearchBar placeholder="Search for movies" searchPath={searchMovie} />
      {result ? (
        <>
          <section>
            <CollectionSearch arr={result.results} isGenre />
            {data ? (
              <>
                <CollectionSearch isGenre arr={totalResult} limit={20001} />
                <LoadMore onClick={nextPage} />
                {console.log(currentResult)}
              </>
            ) : (
              <Loading />
            )}
          </section>
          {/* <Pagination            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
          /> */}
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
  console.log(data)

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
