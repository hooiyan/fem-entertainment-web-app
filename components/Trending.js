import useSWR from 'swr'
import { fetcher, renderResults } from '../utils'
import CardTrending from './CardTrending'

export default function Trending() {
  const { data, error } = useSWR('/api/trending', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return <>{renderResults(data.results, CardTrending)}</>
}
