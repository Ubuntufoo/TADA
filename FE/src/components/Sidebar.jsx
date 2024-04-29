// sidebar to hold previous API responses

import React, { useState } from 'react'

export default function Drawer({ chatBotResponses }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
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
        className="absolute bottom-10 right-10 inline-block rounded-lg bg-black p-4 transition-all duration-500 peer-checked:right-64 peer-checked:rotate-180"
      >
        <div className="mb-3 h-1 w-6 -rotate-45 rounded-lg bg-white"></div>
        <div className="h-1 w-6 rotate-45 rounded-lg bg-white"></div>
      </label>
      <div
        className={`fixed bottom-0 right-0 z-20 h-1/2 w-64 transform transition-all duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-transparent peer-checked:translate-x-0`}
      >
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold">Your Accomplishments:</h2>
          <div className="mt-4">
            {chatBotResponses.map((response, index) => (
              <p key={index} className="text-gray-500">
                {response.summary}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
