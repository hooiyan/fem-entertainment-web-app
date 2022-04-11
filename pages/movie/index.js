import Head from 'next/head'
import Genres from '../../components/Genres'
import SearchBar from '../../components/SearchBar'
import { genreMovie, getUrl } from '../../lib/tmdb'
import { pathToSearchMovie } from '../../utils'

export default function Movie({ data }) {
  return (
    <>
      <Head>
        <title>Movies | Entertainment App</title>
      </Head>
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
