import useSWR from 'swr'
import { fetcher, renderResults, sliceArray } from '../utils'
import CardNormal from './CardNormal'
import Heading from './Heading'

export default function Collection({
  Component = CardNormal,
  endpoint,
  isTrending,
  limit = 8,
  title,
}) {
  const { data, error } = useSWR(`/api/${endpoint}`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <section
      className={
        isTrending
          ? `overflow-hidden w-full h-full mb-6 lg:overflow-visible md:mb-10`
          : null
      }>
      <Heading title={title} />
      <section
        className={
          isTrending
            ? `h-scroll flex relative overflow-x-scroll 2xs:ml-2 2xs:mt-2`
            : `card-collection-wrapper`
        }>
        {renderResults(sliceArray(data.results, limit), Component)}
      </section>
    </section>
  )
}
