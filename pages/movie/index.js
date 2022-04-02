import Genres from '../../components/Genres'
import SearchBar from '../../components/SearchBar'
import { genreMovie, getUrl } from '../../lib/tmdb'
import { searchMovie } from '../../utils'

export default function Movie({ data }) {
  return (
    <>
      <SearchBar placeholder="Search for movies" searchPath={searchMovie} />
      {/* <Hero /> */}
      <Genres arr={data.genres} media_type="movie" />
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
