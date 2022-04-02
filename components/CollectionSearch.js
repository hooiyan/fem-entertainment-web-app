import { renderResults, sliceArray } from '../utils'
import CardNormal from './CardNormal'

export default function CollectionSearch({
  arr,
  media_type = 'movie',
  searchTerm,
  totalResult,
}) {
  return (
    <section>
      <h1 className="md:heading-lg mb-6 text-xl font-light">{`Found ${totalResult} results for '${searchTerm}'`}</h1>
      <section className="card-collection-wrapper">
        {renderResults(sliceArray(arr, 20), CardNormal, media_type)}
      </section>
    </section>
  )
}