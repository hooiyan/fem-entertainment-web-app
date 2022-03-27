import CardImage from './CardImage'
import CardInfo from './CardInfo'

export default function Card({ category, rating, src, title, year }) {
  return (
    <div>
      <CardImage src={src} />
      <CardInfo category={category} rating={rating} title={title} year={year} />
    </div>
  )
}
