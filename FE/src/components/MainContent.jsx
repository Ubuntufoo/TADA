// the journal image and user input form
/* eslint-disable react/prop-types */

export default function MainContent({ isVisible }) {
  return (
    <main className="">
      <div className="text-center">
        <input
          className={`
        rounded-full bg-white text-xl border-2 border-white p-4 focus:border-white focus:outline-none focus:ring-2 focus:ring-white text-center mt-40 transition-opacity duration-1000 ease-in w-96
        ${isVisible ? "opacity-100" : "opacity-0"}
        `}
          placeholder="One thing I've done today is . . ."
        />
      </div>
    </main>
  );
}
