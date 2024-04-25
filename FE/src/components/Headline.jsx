// the header component of the application using CloudyFont
/* eslint-disable react/prop-types */

export default function Headline({ isVisible }) {
  return (
    <header>
      <h1
        className={`
        mx-auto w-max text-center text-3xl leading-loose tracking-wide text-white transition-opacity duration-1000 ease-in text-shadow shadow-slate-50
        ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        Every moment is a gift. <br /> What have you done with your moments
        today?
      </h1>
    </header>
  );
}
