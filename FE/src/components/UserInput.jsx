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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="UserInput"
            className={`mt-${shiftInput ? '20' : '40'} text-${shiftInput ? 'base' : '2xl'} w-${shiftInput ? '80' : '1/2'} ${shiftInput ? 'border-2' : 'border-8 '}
            rounded-full border-white bg-white p-4 text-center transition-all duration-1000 ease-in-out focus:border-white focus:outline-none focus:ring-2 focus:ring-white`}
            placeholder="One thing I've done today is . . ."
            type="text"
          />
        </form>
      </div>
    </main>
  )
}
