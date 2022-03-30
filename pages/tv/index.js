import Collection from '../../components/Collection'
import Footer from '../../components/Footer'
import SearchBar from '../../components/SearchBar'

export default function TV() {
  return (
    <>
      <SearchBar placeholder="Search for TV series" />
      <Collection endpoint="airing-today" title="Airing today" />
      <Collection endpoint="on-the-air" title="On the air" />
      <Footer />
    </>
  )
}
