import useSWR from 'swr'
import { fetcher, renderResults, sliceArray } from '../utils'
import CardNormal from './CardNormal'
import Heading from './Heading'
import Loading from './Loading'

export default function Collection({
  arr,
  Component = CardNormal,
  endpoint = null,
  href = '/movie',
  isTrending,
  limit = 8,
  media_type = 'movie',
  title,
}) {
  const { data, error } = useSWR(`/api/${endpoint}`, fetcher)

  if (error) return <div>Error occurred</div>

  return (
    <>
      {data ? (
        <section
          className={
            isTrending
              ? `mb-6 h-full w-full overflow-hidden md:mb-10 lg:overflow-visible`
              : null
          }>
          <Heading title={title} href={href} />
          <section
            className={
              isTrending
                ? `h-scroll relative flex overflow-x-scroll 2xs:ml-2 2xs:mt-2`
                : `card-collection-wrapper`
            }>
            {renderResults(
              sliceArray(data.results || arr, limit),
              Component,
              media_type
            )}
          </section>
        </section>
      ) : (
        <Loading />
      )}
    </>
  )
}
