export default function FilmInfo({ language, length, status, year }) {
  return (
    <div className="mb-6 flex items-center justify-between text-left text-sm md:text-lg lg:w-3/5">
      <div>
        <p className="mb-1 text-app-placeholder">Length</p>
        <p className="text-app-pure-white">{length} min.</p>
      </div>
      <div>
        <p className="mb-1 text-app-placeholder">Language</p>
        <p className="text-app-pure-white">{language}</p>
      </div>
      <div>
        <p className="mb-1 text-app-placeholder">Year</p>
        <p className="text-app-pure-white">{year}</p>
      </div>
      <div>
        <p className="mb-1 text-app-placeholder">Status</p>
        <p className="text-app-pure-white">{status}</p>
      </div>
    </div>
  )
}
