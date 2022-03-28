import IconCategoryMovie from './icons/IconCategoryMovie'
import IconCategoryTv from './icons/IconCategoryTv'

export default function CardInfo({
  category = 'movie',
  isTrending,
  rating,
  title,
  year,
}) {
  const displayYear = year.substring(0, 4)
  const renderCategoryIcon =
    category === 'movie' ? (
      <IconCategoryMovie className="pl-1 text-base" />
    ) : (
      <IconCategoryTv className="pl-1 text-base" />
    )
  const renderCategoryText =
    category === 'movie'
      ? category.charAt(0).toUpperCase() + category.slice(1)
      : 'TV Series'
  const renderRating = rating === true ? '18+' : 'E'

  return (
    <div className={isTrending ? 'card-info-wrapper-trending' : null}>
      <div
        className={
          isTrending
            ? 'card-info-first-line-trending'
            : 'card-info-first-line-normal'
        }>
        <p>{displayYear}</p>
        <div
          className={
            isTrending
              ? 'card-info-category-2in1-trending'
              : 'card-info-category-2in1-normal'
          }>
          {renderCategoryIcon}
          <p
            className={
              isTrending
                ? 'card-info-category-text-trending'
                : 'card-info-category-text-normal'
            }>
            {renderCategoryText}
          </p>
        </div>
        <p>{renderRating}</p>
      </div>
      <h2 className="font-bold text-app-pure-white text-sm capitalize text-ellipsis truncate pr-1 mr-6 w-[164px]">
        {title}
      </h2>
    </div>
  )
}