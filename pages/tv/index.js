import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import Genres from '../../components/Genres'
import SearchBar from '../../components/SearchBar'
import { currentPageAtom } from '../../lib/recoil-atoms'
import { genreTV, getUrl } from '../../lib/tmdb'
import { pathToSearchTV } from '../../utils'

export default function TV({ data }) {
  const setCurrentPage = useSetRecoilState(currentPageAtom)

  useEffect(() => {
    setCurrentPage(1)
  })

  return (
    <>
      <SearchBar
        placeholder="Search for TV series"
        searchPath={pathToSearchTV}
      />
      <Genres arr={data.genres} media_type="tv" oddBgColor="odd:bg-teal-700" />
    </>
  )
}

export async function getStaticProps() {
  const url = getUrl(genreTV)
  const res = await fetch(url)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
