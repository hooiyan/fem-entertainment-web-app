import { getUrl, movieNowPlaying, movieTopRated } from '../../lib/tmdb'

export default async function handler(req, res) {
  try {
    const response = await fetch(getUrl(movieNowPlaying))
    const data = await response.json()
    res.status(200).json(data.results)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
