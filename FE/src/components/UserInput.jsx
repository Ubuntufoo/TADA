// user input form
/* eslint-disable react/prop-types */

import { useState } from 'react'

export default function MainContent({ handleUserInput, isDisabled }) {
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
         disabled={isDisabled}
          name="UserInput"
          className={`${
            shiftInput
              ? 'sm:text-base sm:w-1/4'
              : 'sm:text-xl sm:w-1/2'
          } text-sm rounded-lg px-6 py-2 text-center font-semibold transition-all duration-1000 ease-in-out hover:ring-4 hover:ring-white focus:outline-none focus:ring-4 focus:ring-white`}
          placeholder={`${
            shiftInput ? 'One thing...' : "One thing I did today is..."
          }`}
          type="text"
        />
      </form>
    </div>
  );
}
