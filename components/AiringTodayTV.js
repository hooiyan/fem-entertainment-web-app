import useSWR from 'swr'
import { fetcher, renderResults } from '../utils'
import CardNormal from './CardNormal'

export default function AiringTodayTV() {
  const { data, error } = useSWR('/api/airing-today', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return <>{renderResults(data, CardNormal)}</>
}
