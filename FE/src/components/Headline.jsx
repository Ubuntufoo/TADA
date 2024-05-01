// the header component of the application using CloudyFont
/* eslint-disable react/prop-types */

export default function Headline({ shiftHeadline }) {
  return (
    <header>
      <h1
        className={`
        mx-auto w-max text-center text-${shiftHeadline ? 'lg' : '3xl'} shadow-slate-5 leading-loose tracking-wide text-white opacity-100 transition-all  duration-1000 ease-in-out
        text-shadow
        `}
      >
        Celebrate a &apos;TA-DA&apos;. <br /> Share thing&apos;s you&apos;ve
        done today:
      </h1>
    </header>
  )
}
