export default function CardGenre({ bgColor, text }) {
  return (
    <li
      className={`odd:to-grey-500 card-hover-animation m-2 flex h-44 w-44 grow items-center justify-center rounded-lg p-8 text-center text-xl font-medium ${bgColor} odd:border-4 odd:border-app-semi-dark-blue even:bg-app-semi-dark-blue `}>
      {text}
    </li>
  )
}

// odd:bg-gradient-to-b even:from-app-greyish-blue even:bg-gradient-to-b odd:from-pink-700
