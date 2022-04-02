import Genres from '../../components/Genres'
import SearchBar from '../../components/SearchBar'
import { genreTV, getUrl } from '../../lib/tmdb'
import { searchTV } from '../../utils'

export default function TV({ data }) {
  return (
    <>
      <SearchBar placeholder="Search for TV series" searchPath={searchTV} />
      <Genres arr={data.genres} media_type="tv" />
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
