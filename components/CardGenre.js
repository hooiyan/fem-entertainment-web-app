import React from 'react'

const CardGenre = React.forwardRef(({ onClick, href, text }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className="card-hover-animation m-2 flex h-44 w-44 grow items-center justify-center rounded-lg p-8 text-center text-xl font-medium odd:bg-app-greyish-blue even:bg-app-semi-dark-blue">
      {text}
    </a>
  )
})

CardGenre.displayName = 'CardGenre'
export default CardGenre

// odd:bg-gradient-to-b even:from-app-greyish-blue even:bg-gradient-to-b odd:from-pink-700
