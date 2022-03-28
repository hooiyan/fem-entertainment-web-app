import useSWR from 'swr'
import CardNormal from '../components/CardNormal'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

export default function Movie() {
  const fetcher = url => fetch(url).then(res => res.json())
  const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original'
  const { data, error } = useSWR('/api/movie', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const latestMovies = data.map((item, index) => {
    return (
      <CardNormal
        key={item.id}
        // category={item.media_type}
        rating={item.adult}
        // src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
        src={
          item.backdrop_path
            ? `${TMDB_IMAGE_ENDPOINT}/${item.backdrop_path}`
            : `${TMDB_IMAGE_ENDPOINT}/${item.poster_path}`
        }
        title={
          item.title ? item.title : item.original_name || item.original_title
        }
        year={item.release_date || item.first_air_date}
      />
    )
  })

  return (
    <>
      <SearchBar placeholder="Search for movies" />
      <section>
        <h2 className="section-title">Movies</h2>
        <section className="flex flex-col items-center 2xs:flex-row 2xs:flex-wrap 2xs:justify-between mb-10">
          {latestMovies}
        </section>
      </section>
      <Footer />
    </>
  )
}
