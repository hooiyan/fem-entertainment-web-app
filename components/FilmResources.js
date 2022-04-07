import { FaImdb, FaLink, FaPlay } from 'react-icons/fa'

export default function FilmResources() {
  return (
    <div className="mb-20 flex flex-wrap">
      <div
        href="/"
        className="mb-4 flex w-full cursor-pointer items-center justify-between rounded-md border-none bg-app-semi-dark-blue py-4 px-8 text-sm font-medium text-app-pure-white hover:bg-app-greyish-blue">
        <p>Website</p>
        <FaLink className="text-base" />
      </div>
      <div
        href="/"
        className="mb-4 flex w-full cursor-pointer items-center justify-between rounded-md border-none bg-app-semi-dark-blue py-4 px-8 text-sm font-medium text-app-pure-white hover:bg-app-greyish-blue">
        <p>IMDB</p>
        <FaImdb className="text-base" />
      </div>
      <div
        href="/"
        className="mb-4 flex w-full cursor-pointer items-center justify-between rounded-md border-none bg-app-semi-dark-blue py-4 px-8 text-sm font-medium text-app-pure-white hover:bg-app-greyish-blue">
        <p>Trailer</p>
        <FaPlay className="text-base" />
      </div>
    </div>
  )
}
