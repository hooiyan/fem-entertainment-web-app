import SearchBar from '../../components/SearchBar'
import { searchMovie } from '../../utils'

export default function Movie() {
  return (
    <>
      <SearchBar placeholder="Search for movies" searchPath={searchMovie} />
    </>
  )
}
