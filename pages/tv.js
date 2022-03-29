import AiringTodayTV from '../components/AiringTodayTV'
import Footer from '../components/Footer'
import OnTheAirTV from '../components/OnTheAirTV'
import SearchBar from '../components/SearchBar'

export default function TV() {
  return (
    <>
      <SearchBar placeholder="Search for TV series" />
      <section>
        <h2 className="section-title">Airing Today</h2>
        <section className="card-collection-wrapper">
          <AiringTodayTV />
        </section>
      </section>
      <section>
        <h2 className="section-title">On The Air</h2>
        <section className="card-collection-wrapper">
          <OnTheAirTV />
        </section>
      </section>
      <Footer />
    </>
  )
}
