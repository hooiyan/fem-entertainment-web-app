import { useRouter } from 'next/router'

export default function TV() {
  const router = useRouter()
  const { tvID } = router.query

  return <p>TV: {tvID}</p>
}
