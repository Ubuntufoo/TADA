// user input form
/* eslint-disable react/prop-types */

import { useState } from 'react'

export default function MainContent({ handleUserInput, isDisabled }) {
  const [shiftInput, setShiftInput] = useState(false);
  const [userInput, setUserInput] = useState(''); // New state to store user input

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if userInput is empty before submitting (optional)
    if (userInput.trim() === '') {
      return; // Prevent form submission if empty (optional)
    }
    handleUserInput(userInput);
    e.target.reset();
    setShiftInput(true);
  }

  return (
    <div className="text-center">
      <form
        disabled={isDisabled || userInput.trim() === ''} // Disable based on isDisabled or empty userInput
        className={`${
          shiftInput ? '2xl:flex-col' : 'flex-col '
        } flex mx-auto w-5/6 xl:w-2/3 xl:text-xl 2xl:text-2xl place-items-center place-content-center transition duration-500 gap-4 xl:gap-10`}
        onSubmit={handleSubmit}
      >
        <input
          name="UserInput"
          className={`sm:w-2/3 2xl:w-1/2 rounded-lg px-6 py-3 text-center font-semibold transition-all duration-500 ease-in-out hover:ring-4 hover:ring-white focus:outline-none focus:ring-4 focus:ring-white`}
          placeholder={`${
            shiftInput ? 'One thing...' : 'One thing I did today is...'
          }`}
          type="text"
          value={userInput}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={isDisabled || userInput.trim() === ''}
          className="rounded-lg w-1/4 xl:w-1/5 2xl:w-[12%] mx-auto bg-blue-500 p-3 font-semibold text-white transition-all duration-500 ease-in-out hover:bg-blue-600 hover:ring-4 hover:ring-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
}


