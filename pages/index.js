import Image from 'next/image'
import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import { loadingAtom } from '../atoms/loadingAtom'
import CardNormal from '../components/CardNormal'
import CardTrending from '../components/CardTrending'
import SearchBar from '../components/SearchBar'
import IconTMDBLong from '../assets/icon-tmdb-long.svg'

export default function Home() {
  const fetcher = url => fetch(url).then(res => res.json())
  const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original'
  const [loading, setLoading] = useRecoilState(loadingAtom)

  // const { data, error } = useSWR('/api/trending', fetcher)
  const { data, error } = useSWR('/api/upcoming', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

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
      <section className="overflow-hidden w-full h-full mb-6 lg:overflow-visible md:mb-10">
        <h2 className="section-title">Trending</h2>
        <section className="h-scroll flex relative overflow-x-scroll 2xs:ml-2 2xs:mt-2">
          {trendingResults}
        </section>
      </section>
      <section>
        <h2 className="section-title">Upcoming</h2>
        <section className="flex flex-col items-center 2xs:flex-row 2xs:flex-wrap 2xs:justify-between mb-10">
          {upcomingResults}
        </section>
        <footer className="text-center text-app-greyish-blue text-xs lg:mb-6">
          <p>Powered by</p>
          <a
            href="https://www.themoviedb.org/about/logos-attribution"
            target="_blank"
            rel="noreferrer">
            <Image
              src={IconTMDBLong}
              width={150}
              height={20}
              alt="powered by TMDB"
            />
          </a>
        </footer>
      </section>
    </>
  )
}
