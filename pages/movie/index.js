import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import Genres from '../../components/Genres'
import SearchBar from '../../components/SearchBar'
import { pageAtom, totalResultAtom } from '../../lib/recoil-atoms'
import { genreMovie, getUrl } from '../../lib/tmdb'
import { pathToSearchMovie } from '../../utils'

export default function Movie({ data }) {
  const setPage = useSetRecoilState(pageAtom)
  const setTotalResult = useSetRecoilState(totalResultAtom)

  useEffect(() => {
    setPage(2)
    setTotalResult([])
  })

  return (
    <>
      <SearchBar
        placeholder="Search for movies"
        searchPath={pathToSearchMovie}
      />
      <Genres
        arr={data.genres}
        media_type="movie"
        oddBgColor="odd:bg-cyan-700"
      />
    </>
  )
}

export async function getStaticProps() {
  const url = getUrl(genreMovie)
  const res = await fetch(url)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
