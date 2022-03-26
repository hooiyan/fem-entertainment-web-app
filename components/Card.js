import Image from 'next/image'
import EarthUntouched from '../assets/thumbnails/earths-untouched/regular/small.jpg'
import IconBookmarkEmpty from './icons/IconBookmarkEmpty'
// import IconCategoryMovie from './icons/IconCategoryMovie'
import IconCategoryTv from './icons/IconCategoryTv'

export default function Card() {
  return (
    <div>
      <div className="rounded-lg relative">
        <Image
          className="rounded-lg relative"
          src={EarthUntouched}
          alt="earth untouched thumbnail"
        />
        <div className="cursor-pointer rounded-full flex items-center justify-center bg-app-dark-blue opacity-50 h-8 w-8 absolute top-0 right-0">
          <IconBookmarkEmpty />
        </div>
      </div>
      <div className="flex text-app-grey text-[11px] font-light mt-2 mb-1">
        <p>2019</p>
        <div className="flex items-center px-[6px] before:content-['•'] after:content-['•']">
          <IconCategoryTv className="pl-1 text-base" />
          <p className="pl-1 pr-1">TV Series</p>
        </div>
        <p>E</p>
      </div>
      <h2 className="font-bold text-app-pure-white text-sm capitalize">
        The Great Lands
      </h2>
    </div>
  )
}
