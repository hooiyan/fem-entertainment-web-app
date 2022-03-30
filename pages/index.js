import { useRecoilState } from 'recoil'
import useSWR from 'swr'
import { resultAtom } from '../atoms/resultAtom'
import { searchAtom } from '../atoms/searchAtom'
import Footer from '../components/Footer'
import Heading from '../components/Heading'
import SearchBar from '../components/SearchBar'
import Trending from '../components/Trending'
import UpcomingMovies from '../components/UpcomingMovies'
import { fetcher } from '../utils'

export default function Home() {
  const [searchQuery, setSearchQuery] = useRecoilState(searchAtom)
  const [result, setResult] = useRecoilState(resultAtom)

  const { data, error } = useSWR(`/api/search/${searchQuery}`, fetcher)

  const searchMovieTv = e => {
    e.preventDefault()
    const value = e.target[0].value
    setSearchQuery(encodeURIComponent(value))
    setResult(data)
  }

  return (
    <>
      <SearchBar handleSearch={searchMovieTv} />
      {console.log(result)}
      {/* {renderResults(result, CardNormal)} */}
      <section className="overflow-hidden w-full h-full mb-6 lg:overflow-visible md:mb-10">
        <Heading title="Trending today" />
        <section className="h-scroll flex relative overflow-x-scroll 2xs:ml-2 2xs:mt-2">
          <Trending />
        </section>
      </section>
      <section>
        <Heading title="Upcoming movies" />
        <section className="card-collection-wrapper">
          <UpcomingMovies />
        </section>
      </section>
      <Footer />
    </>
  )
}
