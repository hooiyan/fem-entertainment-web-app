import { getUrl, tvAiringToday } from '../../lib/tmdb'

export default async function handler(req, res) {
  try {
    const response = await fetch(getUrl(tvAiringToday))
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
