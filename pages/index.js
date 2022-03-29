import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import Trending from '../components/Trending'
import UpcomingMovies from '../components/UpcomingMovies'

export default function Home() {
  return (
    <>
      <SearchBar />
      <section className="overflow-hidden w-full h-full mb-6 lg:overflow-visible md:mb-10">
        <h2 className="section-title">Trending</h2>
        <section className="h-scroll flex relative overflow-x-scroll 2xs:ml-2 2xs:mt-2">
          <Trending />
        </section>
      </section>
      <section>
        <h2 className="section-title">Upcoming Movies</h2>
        <section className="card-collection-wrapper">
          <UpcomingMovies />
        </section>
        <Footer />
      </section>
    </>
  )
}
