import AiringTodayTV from '../../components/AiringTodayTV'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import OnTheAirTV from '../../components/OnTheAirTV'
import SearchBar from '../../components/SearchBar'

export default function TV() {
  return (
    <>
      <SearchBar placeholder="Search for TV series" />
      <section>
        <Heading title="Airing Today" />
        <section className="card-collection-wrapper">
          <AiringTodayTV />
        </section>
      </section>
      <section>
        <Heading title="On The Air" />
        <section className="card-collection-wrapper">
          <OnTheAirTV />
        </section>
      </section>
      <Footer />
    </>
  )
}
