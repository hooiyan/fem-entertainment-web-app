import { getTvDetail } from '../../../lib/tmdb'

export default async function handler(req, res) {
  const { tvId } = req.query

  try {
    const response = await fetch(getTvDetail(tvId))
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
