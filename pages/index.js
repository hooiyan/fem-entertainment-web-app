import useSWR from 'swr'
import CardNormal from '../components/CardNormal'
import CardTrending from '../components/CardTrending'
import SearchBar from '../components/SearchBar'

const fetcher = url => fetch(url).then(res => res.json())

export default function Home() {
  // const { data, error } = useSWR('/api/trending', fetcher)
  const { data, error } = useSWR('/api/upcoming', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading trending...</div>

  const upcomingResults = data.map((item, index) => {
    return (
      <CardNormal
        key={item.id}
        // category={item.media_type}
        rating={item.adult}
        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
        // title={item.original_name || item.original_title}
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
        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
        // title={item.original_name || item.original_title}
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
      <section className="overflow-hidden w-full h-full mb-6">
        <h2 className="section-title">Trending</h2>
        <section className="h-scroll flex relative overflow-x-scroll">
          {trendingResults}
        </section>
      </section>
      <section>
        <h2 className="section-title">Recommended for you</h2>
        <section className="card-normal-collection">{upcomingResults}</section>
      </section>
    </>
  )
}
