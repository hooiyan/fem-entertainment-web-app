import Image from 'next/image'
import { shimmer, toBase64 } from '../utils'
import IconBookmarkEmpty from './icons/IconBookmarkEmpty'

export default function CardImage({ isTrending, src, title }) {
  return (
    <div className={isTrending ? 'card-image-trending' : 'card-image-normal'}>
      <div className={isTrending ? 'overlay' : null}>
        <Image
          className="rounded-lg relative"
          src={src}
          alt={title}
          width={240}
          height={140}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(240, 140)
          )}`}
        />
      </div>
      <div className="cursor-pointer rounded-full flex items-center justify-center bg-app-dark-blue opacity-50 h-8 w-8 absolute top-2 right-2 group hover:bg-app-pure-white hover:opacity-100">
        <IconBookmarkEmpty className="fill-transparent stroke-app-pure-white group-hover:stroke-black group-hover:app-transition" />
      </div>
    </div>
  )
}
