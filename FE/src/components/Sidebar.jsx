// sidebar to hold previous API responses
/* eslint-disable react/prop-types */

import { useState } from 'react'

export default function Drawer({ chatBotResponses, handleCurrentResponse }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const updateResponse = (index) => {
    handleCurrentResponse(index)
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
        className={`${chatBotResponses.length > 0 && isOpen === false ? 'sm:animate-[bounce_2s_ease-in-out_infinite]' : ''} absolute bottom-5 right-5 z-50 inline-block cursor-pointer rounded-lg bg-black p-3 transition-all duration-500 ease-in-out peer-checked:rotate-180 sm:bottom-8 sm:right-8 sm:p-4 sm:peer-checked:right-[390px]`}
      >
        <div className="mb-3 h-1 w-6 -rotate-45 rounded-lg bg-white"></div>
        <div className="h-1 w-6 rotate-45 rounded-lg bg-white"></div>
      </label>
      <div
        className={` fixed bottom-0 right-0 z-20 h-fit w-fit rounded-tl-lg border-l-4 border-t-4 border-black pb-10 transition-all duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-[101%]'
        } bg-blue-200 peer-checked:translate-x-0`}
      >
        <div className="p-2 sm:p-6 2xl:p-8">
          <h2 className=" text-center text-xl font-bold underline decoration-double underline-offset-8 sm:text-3xl 2xl:text-4xl">
            Your TADA! List
          </h2>
          <div className="my-8 me-4 leading-6 tracking-tight sm:leading-10">
            {chatBotResponses.map((response, index) => (
              <p
                key={index}
                className="cursor-pointer capitalize text-lg text-zinc-800 hover:text-white lg:text-xl 2xl:text-2xl"
                onClick={() => updateResponse(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2 inline-block size-5 md:size-6 2xl:size-8 text-green-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  transform="scale(1, -1)"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 13.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414L11 10.414l-3.293 3.293a1 1 0 0 1-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>

                {response.summary}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
