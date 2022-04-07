import { useRouter } from 'next/router'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

export default function CardNormal({ id, category, rating, src, title, year }) {
  const router = useRouter()

  const handleClick = () => {
    if (category === 'movie') {
      router.push(`/movie/${id}`)
    } else if (category === 'tv') {
      router.push(`/tv/${id}`)
    }
  }

  return (
    <div
      className="single-card-wrapper-normal card-hover-animation"
      onClick={handleClick}>
      <CardImage src={src} />
      <CardInfo
        id={id}
        category={category}
        rating={rating}
        title={title}
        year={year}
      />
    </div>
  )
}
