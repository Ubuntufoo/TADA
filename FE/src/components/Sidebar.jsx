// sidebar to hold previous API responses

import React, { useState } from 'react'

function Drawer() {
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
        className="absolute left-0 top-0 inline-block rounded-lg bg-indigo-500 p-4 transition-all duration-500 peer-checked:left-64 peer-checked:rotate-180"
      >
        <div className="mb-3 h-1 w-6 -rotate-45 rounded-lg bg-white"></div>
        <div className="h-1 w-6 rotate-45 rounded-lg bg-white"></div>
      </label>
      <div
        className={`fixed left-0 top-0 z-20 h-full w-64 transform transition-all duration-500 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white shadow-lg peer-checked:translate-x-0`}
      >
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold">Drawer</h2>
          <p className="text-gray-500">This is a drawer.</p>
        </div>
      </div>
    </div>
  )
}

export default Drawer

