import Image from 'next/image'
import { useRouter } from 'next/router'
import { FaImdb, FaLink, FaPlay, FaStar, FaRegStar } from 'react-icons/fa'
import useSWR from 'swr'
import Loading from '../../components/Loading'
import SearchBar from '../../components/SearchBar'
import { getMovieDetail, getUrl } from '../../lib/tmdb'
import {
  fetcher,
  pathToSearchMovie,
  shimmer,
  TMDB_IMAGE_ENDPOINT,
  toBase64,
} from '../../utils'

export default function Movie() {
  const router = useRouter()
  const { id } = router.query
  const url = getMovieDetail(id)
  const getCasts = getUrl(`movie/${id}/credits`)
  const { data: movie } = useSWR(url, fetcher)
  const { data: credits } = useSWR(getCasts, fetcher)

  const img = movie && movie.poster_path
  const title = movie && movie.title
  const tagline = movie && movie.tagline
  const runtime = movie && movie.runtime
  // const releaseYear = movie.release_date
  //   ? movie.release_date.substring(0, 4)
  //   : 'Unknown'
  const genres = movie && movie.genres
  const synopsis = movie && movie.overview
  const casts = credits && credits.cast

  return (
    <>
      <SearchBar
        placeholder="Search for movies"
        searchPath={pathToSearchMovie}
      />
      {movie && credits ? (
        <section className="flex flex-col sm:mx-8 md:mx-0 md:flex-row md:items-start lg:justify-center">
          <section className="px-20 text-center md:pr-8 md:pl-0 lg:w-2/5">
            <Image
              className="rounded-lg"
              // src={`${TMDB_IMAGE_ENDPOINT}/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg`}
              src={`${TMDB_IMAGE_ENDPOINT}/${img}`}
              alt={title}
              width={350}
              height={530}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(350, 530)
              )}`}
            />
          </section>
          <section className="md:w-3/5">
            <div className="mt-6 mb-2 text-center md:mt-0 md:text-left md:mb-4">
              <h1 className="mb-1 text-3xl font-light md:text-5xl md:mb-3">{title}</h1>
              <h2 className="text-xs font-light sm:text-sm md:text-lg text-app-placeholder">{tagline}</h2>
            </div>
            <div className="mb-6 flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
              <p className="mb-2 text-4xl font-medium md:mr-4 md:mb-0">8.0</p>
              <div className="flex">
                <FaStar className="text-xs" />
                <FaStar className="text-xs" />
                <FaStar className="text-xs" />
              </div>
            </div>
            <div className="mb-6 flex items-center justify-between text-left text-sm lg:w-3/5">
              <div>
                <p className="mb-1 text-app-placeholder">Length</p>
                <p className="text-app-pure-white">180 min.</p>
              </div>
              <div>
                <p className="mb-1 text-app-placeholder">Language</p>
                <p className="text-app-pure-white">English</p>
              </div>
              <div>
                <p className="mb-1 text-app-placeholder">Year</p>
                <p className="text-app-pure-white">2021</p>
              </div>
              <div>
                <p className="mb-1 text-app-placeholder">Status</p>
                <p className="text-app-pure-white">Released</p>
              </div>
            </div>
            {/* <div>
            <h3>The genres</h3>
            <ul>
              {genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>
              })}
            </ul>
          </div> */}
            <div className="mb-6">
              <h3 className="mb-2">Genres</h3>
              <ul className="flex text-xs font-light">
                <li className="mr-2 rounded-md border-none bg-app-pure-white py-px px-2 font-medium text-app-dark-blue">
                  Action
                </li>
                <li className="mr-2 rounded-md border-none bg-app-pure-white py-px px-2 font-medium text-app-dark-blue">
                  Comedy
                </li>
                <li className="mr-2 rounded-md border-none bg-app-pure-white py-px px-2 font-medium text-app-dark-blue">
                  Family
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="mb-1">Synopsis</h3>
              <p className="font-light">{synopsis}</p>
            </div>
            {/* <div>
            <h3>The cast</h3>
            <ul>
              {casts.map(cast => {
                return <li key={cast.id}>{cast.name}</li>
              })}
            </ul>
          </div> */}
            <div className="mb-10">
              <h3 className="mb-2">Casts</h3>
              <ul className="flex flex-wrap text-xs">
                {/* <li className="mr-2 h-10 w-10 rounded-full">
                <Image
                  className="rounded-full"
                  // src={`${TMDB_IMAGE_ENDPOINT}/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg`}
                  src={`${TMDB_IMAGE_ENDPOINT}/${img}`}
                  alt={title}
                  width={44}
                  height={44}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(40, 40)
                  )}`}
                />
              </li>
              <li className="mr-2 h-10 w-10 rounded-full">
                <Image
                  className="rounded-full"
                  // src={`${TMDB_IMAGE_ENDPOINT}/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg`}
                  src={`${TMDB_IMAGE_ENDPOINT}/${img}`}
                  alt={title}
                  width={44}
                  height={44}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(40, 40)
                  )}`}
                />
              </li>
              <li className="mr-2 h-10 w-10 rounded-full">
                <Image
                  className="rounded-full"
                  // src={`${TMDB_IMAGE_ENDPOINT}/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg`}
                  src={`${TMDB_IMAGE_ENDPOINT}/${img}`}
                  alt={title}
                  width={44}
                  height={44}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(40, 40)
                  )}`}
                />
              </li> */}
                <li className="mr-2 mb-2 rounded-md border-[1px] py-px px-2 font-medium text-app-pure-white">
                  Ralph Fiennes
                </li>
                <li className="mr-2 mb-2 rounded-md border-[1px] py-px px-2 font-medium text-app-pure-white">
                  Harris Dickinson
                </li>
                <li className="mr-2 mb-2 rounded-md border-[1px] py-px px-2 font-medium text-app-pure-white">
                  Gemma Arterton
                </li>
                <li className="mr-2 mb-2 rounded-md border-[1px] py-px px-2 font-medium text-app-pure-white">
                  Rhys Ifans
                </li>
              </ul>
            </div>
            <div className="mb-20 flex w-full flex-wrap">
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
          </section>
        </section>
      ) : (
        <Loading />
      )}
    </>
  )
}
