import Link from 'next/link'
import CardGenre from '../../components/CardGenre'
import SearchBar from '../../components/SearchBar'
import { getUrl } from '../../lib/tmdb'
import { searchMovie } from '../../utils'

export default function Movie({ data }) {
  return (
    <>
      <SearchBar placeholder="Search for movies" searchPath={searchMovie} />
      <ul className="flex flex-wrap justify-between mb-10">
        {data.genres.map(genre => (
          <Link key={genre.id} href={`/movie/discover/${genre.id}`} passHref>
            <CardGenre text={genre.name} />
          </Link>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const url = getUrl('genre/movie/list')
  const res = await fetch(url)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
