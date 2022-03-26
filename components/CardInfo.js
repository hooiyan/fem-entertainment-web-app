import IconCategoryMovie from './icons/IconCategoryMovie'
import IconCategoryTv from './icons/IconCategoryTv'

export default function CardInfo({
  category,
  isTrending,
  rating,
  title,
  year,
}) {
  return (
    <div className={isTrending ? 'card-trending-full-info' : null}>
      <div className={isTrending ? 'card-trending-info' : 'card-normal-info'}>
        <p>{year}</p>
        <div
          className={
            isTrending ? 'card-trending-info-3in1' : 'card-normal-info-3in1'
          }>
          {category === 'Movie' ? (
            <IconCategoryMovie className="pl-1 text-base" />
          ) : (
            <IconCategoryTv className="pl-1 text-base" />
          )}
          <p
            className={
              isTrending
                ? 'card-trending-info-category'
                : 'card-normal-info-category'
            }>
            {category}
          </p>
        </div>
        <p>{rating}</p>
      </div>
      <h2 className="font-bold text-app-pure-white text-sm capitalize text-ellipsis truncate pr-1 mr-6 w-[164px]">
        {title}
      </h2>
    </div>
  )
}
