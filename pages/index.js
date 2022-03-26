import CardNormal from '../components/CardNormal'
import CardTrending from '../components/CardTrending'
import SearchBar from '../components/SearchBar'
import * as data from '../data.json'

export default function Home() {
  const resultNormal = Array.from(data).map((item, index) => {
    return (
      <CardNormal
        key={index}
        category={item.category}
        rating={item.rating}
        // src={item.thumbnail.regular.small}
        title={item.title}
        year={item.year}
      />
    )
  })

  const resultTrending = Array.from(data).map((item, index) => {
    return (
      <CardTrending
        key={index}
        category={item.category}
        rating={item.rating}
        // src={item.thumbnail.regular.small}
        title={item.title}
        year={item.year}
      />
    )
  })

  return (
    <>
      <SearchBar />
      <section className="overflow-hidden w-full h-full mb-6">
        <h2 className="section-title">Trending</h2>
        <section className="h-scroll flex relative overflow-x-scroll">
          <CardTrending
            category={`Movie`}
            rating={`18+`}
            title={`Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic`}
            year={`1995`}
          />
          <CardTrending
            category={`Movie`}
            rating={`18+`}
            title={`Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic`}
            year={`1995`}
          />
          <CardTrending
            category={`Movie`}
            rating={`18+`}
            title={`Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic`}
            year={`1995`}
          />
          <CardTrending
            category={`Movie`}
            rating={`18+`}
            title={`Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic`}
            year={`1995`}
          />
          <CardTrending
            category={`Movie`}
            rating={`18+`}
            title={`Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic Titanic`}
            year={`1995`}
          />
        </section>
      </section>
      <section>
        <h2 className="section-title">Recommended for you</h2>
        <section className="card-normal-collection">{resultNormal}</section>
      </section>
    </>
  )
}
