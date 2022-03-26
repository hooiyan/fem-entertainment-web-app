import SearchBar from '../components/SearchBar'

export default function bookmark() {
  return (
    <>
      <SearchBar placeholder="Search for bookmarked shows" />
      <section>
        <h2 className="section-title">Bookmarked shows</h2>
      </section>
    </>
  )
}
