import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import NowPlayingMovies from '../../components/NowPlayingMovies'
import PopularMovies from '../../components/PopularMovies'
import SearchBar from '../../components/SearchBar'
import TopRatedMovies from '../../components/TopRatedMovies'

export default function Movie() {
  return (
    <>
      <SearchBar placeholder="Search for movies" />
      <section>
        <Heading title="Now playing" />
        <section className="card-collection-wrapper">
          <NowPlayingMovies />
        </section>
      </section>
      <section>
        <Heading title="Popular" />
        <section className="card-collection-wrapper">
          <PopularMovies />
        </section>
      </section>
      <section>
        <Heading title="Top rated" />
        <section className="card-collection-wrapper">
          <TopRatedMovies />
        </section>
      </section>
      <Footer />
    </>
  )
}
