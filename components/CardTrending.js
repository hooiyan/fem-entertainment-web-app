import CardImage from './CardImage'
import CardInfo from './CardInfo'

export default function CardTrending({ category, rating, src, title, year }) {
  return (
    <div className="single-card-wrapper-trending">
      <CardImage isTrending src={src} />
      <CardInfo
        isTrending
        category={category}
        rating={rating}
        title={title}
        year={year}
      />
    </div>
  )
}
