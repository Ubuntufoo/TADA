// sidebar to hold previous API responses
/* eslint-disable react/prop-types */

import { useState } from 'react'

export default function Drawer({ chatBotResponses, setCurrentResponse }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const updateResponseArray = (index) => {
    setCurrentResponse(index)
  }

  return (
    <div className="flex">
      <input
        type="checkbox"
        id="drawer-toggle"
        className="peer sr-only relative"
        checked={isOpen}
        onChange={toggleDrawer}
      />
      <label
        htmlFor="drawer-toggle"
        className={`${chatBotResponses.length > 0 && isOpen===false ? 'animate-[bounce_2s_ease-in-out_infinite]' : ''} absolute bottom-8 right-8 inline-block rounded-lg bg-black p-4 transition-all ease-in-out duration-500 peer-checked:right-1/4 peer-checked:rotate-180 cursor-pointer`}
      >
        <div className="mb-3 h-1 w-6 -rotate-45 rounded-lg bg-white"></div>
        <div className="h-1 w-6 rotate-45 rounded-lg bg-white"></div>
      </label>
      <div
        className={`fixed bottom-0 right-4 z-20 h-fit w-fit transform transition-all duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-transparent peer-checked:translate-x-0`}
      >
        <div className="px-6 py-4 text-center">
          <h2 className="text-xl font-bold">Your Accomplishments</h2>
          <div className="my-8 leading-10">
            {chatBotResponses.map((response, index) => (
              <p key={index}
                className="text-gray-400 hover:text-white text-lg tracking-tight animate-pulse cursor-zoom-in"
                onClick={() => updateResponseArray(index)}
              >
                {response.summary}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
