// the header component of the application using CloudyFont

import { useState } from 'react'

export default function Headline() {
  const [isVisible, setIsVisible] = useState(false)

  setTimeout(() => {
    setIsVisible(true)
  }, 2000)

  return (
    <header>
      <h1
        className={`
        mx-auto w-max text-center text-5xl leading-loose tracking-wide text-white transition-opacity duration-1000 ease-in
        ${isVisible ? 'opacity-75' : 'opacity-0'}
        `}
      >
        Every moment is a gift. <br /> What have you done with your moments
        today?
      </h1>
    </header>
  )
}
