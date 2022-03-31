import { renderResults, sliceArray } from '../utils'
import CardNormal from './CardNormal'
import Heading from './Heading'

export default function CollectionSearch({
  arr,
  href,
  searchTerm,
  totalResult,
}) {
  return (
    <section>
      <Heading
        title={`Found ${totalResult} results for '${searchTerm}'`}
        href={href}
      />
      <section className="card-collection-wrapper">
        {renderResults(sliceArray(arr, 20), CardNormal)}
      </section>
    </section>
  )
}
