import SearchBar from '../components/SearchBar'

export default function Bookmark() {
  return (
    <>
      <SearchBar placeholder="Search for bookmarked shows" />
      <section>
        <h2 className="section-title">Bookmarked Movies</h2>
      </section>
      <section>
        <h2 className="section-title">Bookmarked TV Series</h2>
      </section>
    </>
  )
}
