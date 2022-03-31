import Link from 'next/link'
import { getUrl } from '../../lib/tmdb'
import { TMDB_API_KEY, TMDB_ENDPOINT } from '../../utils'

export default function discover({ data }) {
  return (
    <div>
      <h1>Discover</h1>
      <ul>
        {data.genres.map(genre => (
          <Link key={genre.id} href={`/discover/${genre.id}`} passHref>
            <li>{genre.name}</li>
          </Link>
        ))}
      </ul>
    </div>
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
