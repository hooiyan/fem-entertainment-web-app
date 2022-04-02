import { getUrl } from '../../../lib/tmdb'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Genre({ data }) {
  // const router = useRouter()
  // const { id } = router.query
  // const [result, setResult] = useState(null)
  // const [isLoading, setLoading] = useState(false)
  // const url = getUrl(`discover/movie`, `&with_genres=${id}`)

  // useEffect(() => {
  //   setLoading(true)
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       setResult(data)
  //       setLoading(false)
  //     }, [])

  //   if (isLoading) return <p>Loading...</p>
  //   if (!data) return <p>No profile data</p>

  return <div>{console.log(data.results)}</div>
  // })
}

export async function getStaticPaths() {
  const url = getUrl('genre/movie/list')
  const res = await fetch(url)
  const data = await res.json()

  const paths = data.genres.map(genre => ({
    params: { id: genre.id.toString(), name: genre.name },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const url = getUrl(`discover/movie`, `&with_genres=${params.id}`)
  const res = await fetch(url)
  const data = await res.json()

  return {
    props: { data },
  }
}

// export async function getStaticProps() {
//   const url = getUrl('genre/movie/list')
//   const res = await fetch(url)
//   const data = await res.json()

//   return {
//     props: {
//       data,
//     },
//   }
// }
