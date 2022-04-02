import CollectionSearch from '../../../components/CollectionSearch'
import SearchBar from '../../../components/SearchBar'
import {
  discoverMovie,
  genreMovie,
  getUrl,
  searchMovie,
} from '../../../lib/tmdb'
import Loading from '../../../components/Loading'

export default function Genre({ data }) {
  return (
    <div>
      <SearchBar placeholder="Search for movies" searchPath={searchMovie} />
      {data ? <CollectionSearch arr={data.results} isGenre /> : <Loading />}
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
  const url = getUrl(discoverMovie, `&with_genres=${params.id}`)
  const res = await fetch(url)
  const data = await res.json()

  return {
    props: { data },
  }
}
