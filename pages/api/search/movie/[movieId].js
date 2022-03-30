import { searchMovie } from '../../../../lib/tmdb'

export default async function handler(req, res) {
  const { movieId } = req.query

  try {
    const response = await fetch(searchMovie(movieId))
    const data = await response.json()
    res
      .status(200)
      .json({
        results: data.results,
        total_pages: data.total_pages,
        total_results: data.total_results,
      })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
