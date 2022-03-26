import Card from '../components/Card'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <>
      <SearchBar />
      <section>
        <h2 className="section-title">Trending</h2>
      </section>
      <section>
        <h2 className="section-title">Recommended for you</h2>
        <Card />
      </section>
    </>
  )
}
