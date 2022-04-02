import { getMovieDetail } from '../../../lib/tmdb'

export default async function handler(req, res) {
  const { id } = req.query

  try {
    const response = await fetch(getMovieDetail(id))
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
