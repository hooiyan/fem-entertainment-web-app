export default function FilmSynopsis({ synopsis }) {
  return (
    <div className="mb-6">
      <h3 className="mb-1 md:text-lg">Synopsis</h3>
      <p className="font-light md:text-lg">{synopsis}</p>
    </div>
  )
}
