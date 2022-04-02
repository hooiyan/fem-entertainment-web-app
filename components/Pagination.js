import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'

export default function Pagination() {
  return (
    <div className="mb-10 flex justify-center">
      <button className="mr-3 flex items-center justify-center rounded-lg border-2 py-2 pl-4 pr-6 font-medium hover:bg-app-pure-white hover:text-app-dark-blue">
        <TiArrowLeftThick className="mr-2" />
        <span>Page 1</span>
      </button>
      <button className="ml-3 flex items-center justify-center rounded-lg border-2 py-2 pr-4 pl-6 font-medium hover:bg-app-pure-white hover:text-app-dark-blue">
        <span>Page 2</span>
        <TiArrowRightThick className="ml-2" />
      </button>
    </div>
  )
}
