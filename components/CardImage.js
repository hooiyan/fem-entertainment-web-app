import Image from 'next/image'
import EarthUntouched from '../assets/thumbnails/earths-untouched/regular/small.jpg'
import IconBookmarkEmpty from './icons/IconBookmarkEmpty'

export default function CardImage({ isTrending, title }) {
  return (
    <div className={isTrending ? 'card-trending-image' : 'card-normal-image'}>
      <Image className="rounded-lg" src={EarthUntouched} alt={title} />
      <div className="cursor-pointer rounded-full flex items-center justify-center bg-app-dark-blue opacity-50 h-8 w-8 absolute top-2 right-2 group hover:bg-app-pure-white hover:opacity-100">
        <IconBookmarkEmpty className="fill-transparent stroke-app-pure-white group-hover:stroke-black group-hover:app-transition" />
      </div>
    </div>
  )
}
