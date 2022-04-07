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

  if (movieError) return <div>{movieError}</div>
  if (!movie) return <div>{movieError}</div>

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
            <FilmRating number={renderRating(movie.vote_average)} />
            <FilmInfo
              language={renderLanguage(movie.spoken_languages)}
              length={renderLength(movie.runtime)}
              status={movie.status}
              year={renderYear(movie.release_date)}
            />
            <FilmGenres genres={movie.genres} />
            <FilmSynopsis synopsis={movie.overview} />
            <FilmCasts casts={credits ? credits.cast : []} />
            <FilmResources website={movie.homepage} imdb={movie.imdb_id} />
          </section>
        </section>
      ) : (
        <Loading />
      )}
    </>
  )
}

function renderRating(rating) {
  if (rating !== undefined) {
    return rating.toFixed(1)
  } else {
    return 0
  }
}

function renderLength(runtime) {
  if (runtime !== 0) {
    return runtime
  } else {
    return 'Unknown'
  }
}

function renderLanguage(languages) {
  if (!languages && languages.length === 0) {
    return 'Unknown'
  } else {
    return languages[0].name
  }
}

function renderYear(year) {
  if (!year) {
    return 'Unknown'
  } else {
    return year.substring(0, 4)
  }
}
