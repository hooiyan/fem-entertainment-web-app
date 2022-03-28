import IconSearch from './icons/IconSearch'

export default function SearchBar({
  placeholder = 'Search for movies or TV series',
}) {
  return (
    <form className="flex pb-6 lg:mt-9">
      <IconSearch className="h-6 w-6" />
      <input
        className="bg-app-dark-blue caret-app-red w-full rounded-none pb-[8px] ml-4 border-b border-app-dark-blue text-base font-light placeholder:text-app-placeholder placeholder:text-base focus:outline-none focus:border-b focus:border-app-greyish-blue"
        type="text"
        placeholder={placeholder}
      />
    </form>
  )
}
