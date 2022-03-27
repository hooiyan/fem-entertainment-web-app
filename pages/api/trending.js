const TMDB_ENDPOINT = process.env.TMDB_ENDPOINT
const TMDB_API_KEY = process.env.TMDB_API_KEY

export default async function handler(req, res) {
  const url = `${TMDB_ENDPOINT}/trending/all/day?api_key=${TMDB_API_KEY}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.status(200).json(data.results)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// const movie =
// `${TMDB_ENDPOINT}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=2`

// const upcoming =
// '${TMDB_ENDPOINT}/movie/upcoming?api_key=7${TMDB_API_KEY}&language=en-US&page=1'

// const tv =
// '${TMDB_ENDPOINT}/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1'
