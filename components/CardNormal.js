import CardImage from './CardImage'
import CardInfo from './CardInfo'

export default function CardNormal({ category, rating, src, title, year }) {
  return (
    <div className='single-card-wrapper-normal'>
      <CardImage src={src} />
      <CardInfo category={category} rating={rating} title={title} year={year} />
    </div>
  )
}
