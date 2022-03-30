import { getUrl, movieUpcoming } from '../../lib/tmdb'

export default async function handler(req, res) {
  try {
    const response = await fetch(getUrl(movieUpcoming))
    const data = await response.json()
    res.status(200).json({
      date: data.date,
      results: data.results,
      total_pages: data.total_pages,
      total_results: data.total_results,
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
