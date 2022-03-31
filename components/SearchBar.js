import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { queryAtom } from '../lib/recoil-atoms'
import IconSearch from './icons/IconSearch'
import SearchButton from './SearchButton'

export default function SearchBar({
  handleSubmit,
  placeholder = 'Search for movies or TV series',
}) {
  const [query, setQuery] = useRecoilState(queryAtom)
  const [input, setInput] = useState('')

  return (
    <form onSubmit={handleSubmit} className="flex pb-6 lg:mt-9 md:pb-10">
      <IconSearch className="h-6 w-6 md:h-8 md:w-8" />
      <input
        className="bg-app-dark-blue caret-app-red w-full rounded-none pb-[8px] mx-4 border-b border-app-dark-blue text-base font-light placeholder:text-app-placeholder placeholder:text-base focus:outline-none focus:border-b focus:border-app-greyish-blue md:heading-md md:placeholder:heading-md"
        type="text"
        placeholder={placeholder}
        onChange={e => setQuery(e.target.value)}
        value={query}
      />
      <SearchButton />
    </form>
  )
}
