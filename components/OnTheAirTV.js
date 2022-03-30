import useSWR from 'swr'
import { fetcher, renderResults, sliceArray } from '../utils'
import CardNormal from './CardNormal'

export default function OnTheAirTV() {
  const { data, error } = useSWR('/api/on-the-air', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return <>{renderResults(sliceArray(data.results, 8), CardNormal, 'tv')}</>
}
