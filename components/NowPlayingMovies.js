import useSWR from 'swr'
import { fetcher, renderResults, sliceArray } from '../utils'
import CardNormal from './CardNormal'

export default function NowPlayingMovies() {
  const { data, error } = useSWR('/api/now-playing-movies', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return <>{renderResults(sliceArray(data.results, 8), CardNormal)}</>
}
