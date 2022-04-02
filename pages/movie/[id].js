import { useRouter } from 'next/router'
import useSWR from 'swr'
import { fetcher } from '../../utils'

export default function Movie() {
  const router = useRouter()
  const { id } = router.query
  const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original'
  const { data, error } = useSWR(`/api/movie/${id}`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return <h1 className="text-5xl">{data.backdrop_path}</h1>
}
