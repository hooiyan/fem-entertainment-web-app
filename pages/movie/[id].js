import { useRouter } from 'next/router'
import useSWR from 'swr'
import FilmCasts from '../../components/FilmCasts'
import FilmGenres from '../../components/FilmGenres'
import FilmHeading from '../../components/FilmHeading'
import FilmImage from '../../components/FilmImage'
import FilmInfo from '../../components/FilmInfo'
import FilmRating from '../../components/FilmRating'
import FilmResources from '../../components/FilmResources'
import FilmSynopsis from '../../components/FilmSynopsis'
import Loading from '../../components/Loading'
import SearchBar from '../../components/SearchBar'
import { getMovieDetail, getUrl } from '../../lib/tmdb'
import { fetcher, pathToSearchMovie } from '../../utils'

export default function Movie() {
  const router = useRouter()
  const { id } = router.query
  const url = getMovieDetail(id)
  const getCasts = getUrl(`movie/${id}/credits`)
  const { data: movie, error: movieError } = useSWR(url, fetcher)
  const { data: credits, error: creditsError } = useSWR(getCasts, fetcher)

  return (
    <>
      <SearchBar
        placeholder="Search for movies"
        searchPath={pathToSearchMovie}
      />
      {console.log(movie)}
      {movie ? (
        <section className="flex flex-col sm:mx-8 md:mx-0 md:flex-row md:items-start lg:justify-center">
          <FilmImage src={movie.poster_path} title={movie.title} />
          <section className="md:w-3/5">
            <FilmHeading tagline={movie.tagline} title={movie.title} />
            <FilmRating number={movie.vote_average} />
            <FilmInfo
              language={renderLanguage(movie.spoken_languages)}
              length={renderLength(movie.runtime)}
              status={movie.status}
              year={renderYear(movie.release_date)}
            />
            <FilmGenres genres={movie.genres} />
            <FilmSynopsis synopsis={movie.overview} />
            <FilmCasts casts={credits ? credits.cast : []} />
            <FilmResources />
          </section>
        </section>
      ) : (
        <Loading />
      )}
    </>
  )
}

function renderLength(runtime) {
  if (runtime !== 0) {
    return runtime
  } else {
    return 'Unknown'
  }
}

function renderLanguage(languages) {
  if (languages.length !== 0) {
    return languages[0].name
  } else {
    return 'Unknown'
  }
}

function renderYear(year) {
  if (year.length !== 0) {
    return year.substring(0, 4)
  } else {
    return 'Unknown'
  }
}
