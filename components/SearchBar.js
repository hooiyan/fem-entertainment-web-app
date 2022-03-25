import { FiSearch } from 'react-icons/fi'

export default function SearchBar() {
  return (
    <form className="flex pb-6">
      <FiSearch className="h-[18px] w-[18px] mt-1" />
      <input
        className="bg-app-dark-blue caret-app-red pb-[8px] ml-4 border-b border-app-dark-blue text-base placeholder:text-app-greyish-blue placeholder:text-app-body-md focus:outline-none focus:border-b focus:border-app-greyish-blue"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </form>
  )
}
