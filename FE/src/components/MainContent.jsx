// user input form
/* eslint-disable react/prop-types */

export default function MainContent({ isVisible, handleUserInput }) {
  // const handleInput = (e) => {
  //   setUserMessage(e.target.value)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleUserInput(e.target.elements.UserInput.value)
    e.target.reset()
  }

  return (
    <main className="">
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <input
            name='UserInput'
            className={`
              mt-40 w-96 rounded-full border-2 border-white bg-white p-4 text-center text-xl transition-opacity duration-1000 ease-in focus:border-white focus:outline-none focus:ring-2 focus:ring-white
              ${isVisible ? 'opacity-100' : 'opacity-0'}
              `}
            placeholder="One thing I've done today is . . ."
            type="text"
          />
        </form>
      </div>
    </main>
  )
}
