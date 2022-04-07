import { FaStar } from 'react-icons/fa'

export default function FilmRating({ number }) {
  return (
    <div className="mb-6 flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
      <p className="mb-2 text-4xl font-medium md:mr-4 md:mb-0">
        {number}
      </p>
      <div className="flex">
        <FaStar className="text-xs" />
        <FaStar className="text-xs" />
        <FaStar className="text-xs" />
      </div>
    </div>
  )
}
