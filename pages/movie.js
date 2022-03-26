import SearchBar from '../components/SearchBar'

export default function movie() {
  return (
    <>
      <SearchBar placeholder="Search for movies" />
      <section>
        <h2 className="section-title">Movies</h2>
      </section>
    </>
  )
}
