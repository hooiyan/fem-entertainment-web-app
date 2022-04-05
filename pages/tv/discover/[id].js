import CollectionSearch from '../../../components/CollectionSearch'
import Loading from '../../../components/Loading'
import LoadMore from '../../../components/LoadMore'
import SearchBar from '../../../components/SearchBar'
import { discoverTV, genreTV, getUrl } from '../../../lib/tmdb'
import { pathToSearchTV } from '../../../utils'

export default function Genre({ data }) {
  return (
    <div>
      <SearchBar
        placeholder="Search for TV series"
        searchPath={pathToSearchTV}
      />
      {data ? (
        <section>
          <CollectionSearch arr={data.results} isGenre media_type="tv" />
          <LoadMore />
        </section>
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
  const url = getUrl(discoverTV, `&with_genres=${params.id}`)
  const res = await fetch(url)
  const data = await res.json()

  return {
    props: { data },
  }
}
