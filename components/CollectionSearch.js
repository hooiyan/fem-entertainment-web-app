import { renderResults, sliceArray } from '../utils'
import CardNormal from './CardNormal'

export default function CollectionSearch({
  arr,
  isGenre,
  limit = 20,
  media_type = 'movie',
  searchTerm = '',
  totalResult = 0,
}) {
  return (
    <section>
      {!isGenre ? (
        <h1 className="md:heading-lg mb-6 text-xl font-light">{`Found ${totalResult} results for '${searchTerm}'`}</h1>
      ) : null}
      <section className="card-collection-wrapper">
        {renderResults(sliceArray(arr, limit), CardNormal, media_type)}
      </section>
    </section>
  )
}
