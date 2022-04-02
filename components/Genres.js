import Link from 'next/link'
import CardGenre from './CardGenre'

export default function Genres({ arr, media_type }) {
  return (
    <section className="mb-10 flex flex-wrap justify-between">
      {arr.map(genre => (
        <Link
          key={genre.id}
          href={`/${media_type}/discover/${genre.id}`}
          passHref>
          <CardGenre text={genre.name} />
        </Link>
      ))}
    </section>
  )
}
