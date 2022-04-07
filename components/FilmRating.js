import { FaRegStar, FaStar } from 'react-icons/fa'
import Rating from 'react-rating'

export default function FilmRating({ number }) {
  return (
    <div className="mb-6 flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
      <p className="mb-2 text-4xl font-medium md:mr-4 md:mb-0">{number}</p>
      <Rating
        className="flex self-center align-center"
        initialRating={number}
        emptySymbol={<FaRegStar />}
        fullSymbol={<FaStar />}
        readonly
      />
    </div>
  )
}
