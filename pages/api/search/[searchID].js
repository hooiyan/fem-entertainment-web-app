import { searchMulti } from '../../../lib/tmdb'

export default async function handler(req, res) {
  const { searchID } = req.query
  
  try {
    const response = await fetch(searchMulti(searchID))
    const data = await response.json()
    res.status(200).json(data.results)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
