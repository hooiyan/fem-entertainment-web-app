import SearchBar from '../../components/SearchBar'
import { searchTV } from '../../utils'

export default function TV() {
  return (
    <>
      <SearchBar placeholder="Search for TV series" searchPath={searchTV} />
    </>
  )
}
