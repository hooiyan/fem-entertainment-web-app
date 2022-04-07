import { useRouter } from 'next/router'
import useSWR from 'swr'
import { getTvDetail } from '../../lib/tmdb'
import { fetcher } from '../../utils'

export default function TV() {
  const router = useRouter()
  const { id } = router.query
  const url = getTvDetail(id)
  const { data, error } = useSWR(url, fetcher)

  return <section>{console.log(data)}</section>
}
