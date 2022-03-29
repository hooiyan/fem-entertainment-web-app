import Footer from '../../components/Footer'
import NowPlayingMovies from '../../components/NowPlayingMovies'
import PopularMovies from '../../components/PopularMovies'
import SearchBar from '../../components/SearchBar'
import TopRatedMovies from '../../components/TopRatedMovies'

export default function Movie() {
  return (
    <>
      <SearchBar placeholder="Search for movies" />
      <section>
        <h2 className="section-title">Now Playing</h2>
        <section className="card-collection-wrapper">
          <NowPlayingMovies />
        </section>
      </section>
      <section>
        <h2 className="section-title">Popular</h2>
        <section className="card-collection-wrapper">
          <PopularMovies />
        </section>
      </section>
      <section>
        <h2 className="section-title">Top Rated</h2>
        <section className="card-collection-wrapper">
          <TopRatedMovies />
        </section>
      </section>
      <Footer />
    </>
  )
}
