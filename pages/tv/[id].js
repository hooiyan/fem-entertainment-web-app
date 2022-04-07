import Head from 'next/head'
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
import { getTvDetail, getUrl } from '../../lib/tmdb'
import { fetcher, pathToSearchTV } from '../../utils'

export default function TV() {
  const router = useRouter()
  const { id } = router.query
  const url = getTvDetail(id)
  const getCasts = getUrl(`tv/${id}/credits`)
  const { data: tv, error: tvError } = useSWR(url, fetcher)
  const { data: credits, error: creditsError } = useSWR(getCasts, fetcher)

  if (tvError) return <div>{tvError}</div>
  if (!tv) return <div>{tvError}</div>

  return (
    <>
      <Head>
        <title>{tv.name}</title>
      </Head>
      <SearchBar
        placeholder="Search for TV series"
        searchPath={pathToSearchTV}
      />
      {tv ? (
        <section className="flex flex-col sm:mx-8 md:mx-0 md:flex-row md:items-start lg:justify-center">
          <FilmImage src={tv.poster_path} title={tv.name} />
          <section className="md:w-3/5">
            <FilmHeading tagline={tv.tagline} title={tv.name} />
            <FilmRating number={renderRating(tv.vote_average)} />
            <FilmInfo
              media_type="tv"
              language={renderLanguage(tv.spoken_languages || [])}
              firstAir={tv.first_air_date}
              lastAir={tv.last_air_date}
              status={tv.status}
            />
            <FilmGenres genres={tv.genres} />
            <FilmSynopsis synopsis={tv.overview} />
            <FilmCasts casts={credits ? credits.cast : []} />
            <FilmResources website={tv.homepage} imdb={tv.imdb_id} />
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
    return (rating / 2).toFixed(1)
  } else {
    return 0
  }
}

function renderLanguage(languages) {
  if (!languages && languages.length === 0) {
    return 'Unknown'
  } else {
    return languages[0].name
  }
}
