// https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1

const TMDB_ENDPOINT = process.env.TMDB_ENDPOINT
const TMDB_API_KEY = process.env.TMDB_API_KEY

export default async function handler(req, res) {
  const url = `${TMDB_ENDPOINT}/movie/upcoming?api_key=${TMDB_API_KEY}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    res.status(200).json(data.results)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
