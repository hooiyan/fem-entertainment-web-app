import useSWR from 'swr'
import CardNormal from '../components/CardNormal'
import CardTrending from '../components/CardTrending'
import SearchBar from '../components/SearchBar'

const fetcher = url => fetch(url).then(res => res.json())
const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original'

export default function Home() {
  const { data, error } = useSWR('/api/trending', fetcher)
  // const { data, error } = useSWR('/api/upcoming', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading trending...</div>

  const upcomingResults = data.map((item, index) => {
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

  const trendingResults = data.map((item, index) => {
    return (
      <CardTrending
        key={item.id}
        category={item.media_type}
        rating={item.adult}
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
      <SearchBar />
      <section className="overflow-hidden w-full h-full mb-6 lg:overflow-visible">
        <h2 className="section-title">Trending</h2>
        <section className="h-scroll flex relative overflow-x-scroll">
          {trendingResults}
        </section>
      </section>
      <section>
        <h2 className="section-title">Upcoming</h2>
        <section className="flex flex-col items-center 2xs:flex-row 2xs:flex-wrap 2xs:justify-between">
          {upcomingResults}
          {upcomingResults}
        </section>
      </section>
    </>
  )
}
