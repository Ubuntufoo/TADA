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
          className={`${
            shiftInput
              ? 'mt-12 text-base w-1/4'
              : 'mt-40 text-2xl w-1/2'
          } rounded-lg p-3 text-center font-semibold transition-all duration-1000 ease-in-out hover:ring-2 hover:ring-white focus:outline-none focus:ring-2 focus:ring-white`}
          placeholder={`${
            shiftInput ? 'One thing...' : "One thing I've done today is..."
          }`}
          type="text"
        />
      </form>
    </div>
  );
}
