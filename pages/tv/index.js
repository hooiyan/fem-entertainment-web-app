import Collection from '../../components/Collection'
import SearchBar from '../../components/SearchBar'

export default function TV() {
  return (
    <>
      <SearchBar placeholder="Search for TV series" />
      <Collection
        endpoint="airing-today"
        media_type="tv"
        title="Airing today"
      />
      <Collection endpoint="on-the-air" media_type="tv" title="On the air" />I
    </>
  )
}
