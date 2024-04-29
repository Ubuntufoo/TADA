// user input form
/* eslint-disable react/prop-types */

import { useState } from 'react'

export default function MainContent({ handleUserInput }) {
  const [shiftInput, setShiftInput] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleUserInput(e.target.elements.UserInput.value)
    e.target.reset()
    setShiftInput(true)
  }

  return (
    <main className="text-center">
      <form onSubmit={handleSubmit} className={`mx-auto`}>
        <input
          name="UserInput"
          className={`mt-${shiftInput ? '20' : '40'} text-${shiftInput ?  'base' : 'xl'} border-1 w-${shiftInput ? 'fit' : '1/2'}
          rounded-full border-white bg-white p-4 text-center transition-opacity duration-1000 ease-in focus:border-white focus:outline-none focus:ring-2 focus:ring-white`}
          placeholder="One thing I've done today is . . ."
          type="text"
        />
      </form>
    </main>
  )
}
