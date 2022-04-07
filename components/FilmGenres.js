export default function FilmGenres({ genres }) {
  return (
    <div className="mb-6">
      <h3 className="mb-2 md:text-lg">Genres</h3>
      <ul className="flex text-xs font-light md:text-sm">
        {genres.map(genre => {
          return (
            <li
              key={genre.id}
              className="mr-2 mb-2 rounded-md border-none bg-app-pure-white py-px px-2 font-medium text-app-dark-blue">
              {genre.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}