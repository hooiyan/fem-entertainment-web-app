import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import { resultAtom } from '../atoms/resultAtom'
import { searchAtom } from '../atoms/searchAtom'
import CardNormal from '../components/CardNormal'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import Trending from '../components/Trending'
import { fetcher, renderResults } from '../utils'
import UpcomingMovies from '../components/UpcomingMovies'

export default function Home() {
  const [searchQuery, setSearchQuery] = useRecoilState(searchAtom)
  const [result, setResult] = useRecoilState(resultAtom)

  const { data, error } = useSWR(`/api/search/${searchQuery}`, fetcher)

  const searchMovieTv = e => {
    e.preventDefault()
    const value = e.target[0].value
    setSearchQuery(encodeURIComponent(value))
    setResult(data)
    console.log('data: ', data)
  }

  return (
    <>
      <SearchBar handleSearch={searchMovieTv} />
      <section className="overflow-hidden w-full h-full mb-6 lg:overflow-visible md:mb-10">
        <h2 className="section-title">Trending Today</h2>
        <section className="h-scroll flex relative overflow-x-scroll 2xs:ml-2 2xs:mt-2">
          <Trending />
        </section>
      </section>
      <section>
        <h2 className="section-title">Upcoming Movies</h2>
        <section className="card-collection-wrapper">
          <UpcomingMovies />
        </section>
      </section>
      {/* {renderResults(result, CardNormal)} */}
      <Footer />
    </>
  )
}
