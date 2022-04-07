export default function FilmGenres({ genres }) {
  return (
    <div className="mb-6">
      <h3 className="mb-2">Genres</h3>
      <ul className="flex text-xs font-light">
        {genres.map(genre => {
          return (
            <li
              key={genre.id}
              className="mr-2 rounded-md border-none bg-app-pure-white py-px px-2 font-medium text-app-dark-blue">
              {genre.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
