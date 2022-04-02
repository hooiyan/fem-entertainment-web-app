import useSWR from 'swr'
import { fetcher } from '../utils'

export default function Hero() {
  const { data, error } = useSWR('/api/latest-movie', fetcher)

  if (error) return <div>Error occurred</div>

  return <div>{data ? data.original_title : null}</div>
}
