// the header component of the application using CloudyFont
/* eslint-disable react/prop-types */

export default function Headline({ shiftHeadline }) {
  return (
    <header>
      <h1
        className={`
        mx-auto text-center ${shiftHeadline ? 'sm:text-3xl 2xl:text-4xl' : 'sm:text-4xl 2xl:text-5xl'} text-xl leading-loose tracking-wide text-white opacity-100 transition-all duration-1000 ease-in-out
        text-shadow
        `}
      >
        Celebrate your TADA!
      </h1>
    </header>
  )
}
