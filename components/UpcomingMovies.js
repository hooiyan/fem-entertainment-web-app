import useSWR from 'swr'
import { fetcher, renderResults, sliceArray } from '../utils'
import CardNormal from './CardNormal'

export default function UpcomingMovies() {
  const { data, error } = useSWR('/api/upcoming-movies', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return <>{renderResults(sliceArray(data.results, 11), CardNormal)}</>
}
