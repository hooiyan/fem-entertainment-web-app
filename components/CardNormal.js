import CardImage from './CardImage'
import CardInfo from './CardInfo'

export default function CardNormal({ category, rating, src, title, year }) {
  const handleClick = e => {
    console.log('CardNormal was clicked!')
    console.log(e)
  }

  return (
    <div
      className="single-card-wrapper-normal card-hover-animation"
      onClick={handleClick}>
      <CardImage src={src} />
      <CardInfo category={category} rating={rating} title={title} year={year} />
    </div>
  )
}
