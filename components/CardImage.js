import Image from 'next/image'
import { shimmer, toBase64 } from '../utils'
import IconBookmarkEmpty from './icons/IconBookmarkEmpty'

export default function CardImage({ isTrending, src, title }) {
  return (
    <div className={isTrending ? 'card-image-trending' : 'card-image-normal'}>
      <div
        className={
          isTrending
            ? 'overlay-after image-wrapper-trending'
            : 'image-wrapper-normal'
        }
      >
        <Image
          className="rounded-lg"
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(240, 140)
          )}`}
        />
      </div>
      <div className="group absolute top-2 right-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-app-dark-blue opacity-50 hover:bg-app-pure-white hover:opacity-100">
        <IconBookmarkEmpty className="group-hover:app-transition fill-transparent stroke-app-pure-white group-hover:stroke-black" />
      </div>
    </div>
  )
}
