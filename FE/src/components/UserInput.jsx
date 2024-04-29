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
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <input
          name="UserInput"
          className={`mt-${shiftInput ? '14' : '40'} text-${shiftInput ? 'base' : '2xl'} w-${shiftInput ? '1/4' : '1/2'} ${shiftInput ? 'border-4' : 'border-6'} p-${shiftInput ? '2' : '4'} rounded-full
            border-white bg-white text-center font-semibold	transition-all duration-1000 ease-in-out focus:outline-none focus:ring-4 focus:ring-white`}
          placeholder={`${shiftInput ? 'One thing...' : "One thing I've done today is..."}`}
          type="text"
        />
      </form>
    </div>
  )
}
