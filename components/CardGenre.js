export default function CardGenre({ text }) {
  return (
    <li
      className={`odd:to-grey-500 card-hover-animation m-2 flex h-44 w-44 grow items-center justify-center rounded-lg text-2xl font-medium odd:bg-app-greyish-blue even:bg-app-semi-dark-blue`}>
      {text}
    </li>
  )
}

// odd:bg-gradient-to-b even:from-app-greyish-blue even:bg-gradient-to-b odd:from-pink-700
