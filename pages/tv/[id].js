import { useRouter } from 'next/router'

export default function TV() {
  const router = useRouter()
  const { id } = router.query

  return <p>TV: {id}</p>
}
