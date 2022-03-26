import CardImage from './CardImage'
import CardInfo from './CardInfo'

export default function Card({ category, rating, title, year }) {
  return (
    <div>
      <CardImage />
      <CardInfo category={category} rating={rating} title={title} year={year} />
    </div>
  )
}
