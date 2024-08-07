// the response from the request to chat completions API
/* eslint-disable react/prop-types */

// ResponseView.js

export default function ResponseView({ currentResponse, isLoading }) {
  return (
    <div className="mx-auto w-4/5 sm:w-2/3 2xl:w-1/3">
      {isLoading ? (
        <div className="flex items-center justify-center mt-32">
          <div className="h-12 w-24 animate-spin rounded-full border-b-4 border-t-4 border-white"></div>
        </div>
      ) : (
        currentResponse && (
          <div>
            <div className="service-card group flex cursor-pointer snap-start flex-col items-start rounded-lg bg-white p-4 xl:p-6 2xl:p-8 text-center italic transition-all duration-300 hover:bg-gray-800">
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 320"
                fill="#000000"
              >
                <path d="M82.87 129.48S77.32 98.96 114.31 74c-12.95 0-89.7 30.52-89.7 113.74 0 33.09 27.59 59.73 61.01 58.19 29.85-1.37 54.07-25.6 55.44-55.45 1.54-33.41-25.1-61-58.19-61zm154.26 0S231.58 98.96 268.57 74c-12.95 0-89.7 30.52-89.7 113.74 0 33.09 27.58 59.73 61.01 58.19 29.85-1.37 54.07-25.6 55.44-55.45 1.54-33.41-25.1-61-58.19-61z"></path>
              </svg>
              <p className=" mx-auto text-pretty font-serif text-sm sm:text-lg 2xl:text-xl font-semibold tracking-wide	text-slate-500">
                {currentResponse}
              </p>
              <svg
                className="ms-auto h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 320"
                fill="#000000"
              >
                <path d="M239.64 74.01c-32.16-.89-59.56 23.76-61.9 55.85-2.59 35.43 25.38 64.97 60.26 64.97 0 0 0 15.82-10.97 34.02-5.9 9.79 4.91 21.1 15.04 15.8 30.22-15.81 62.45-48.71 56.36-110.25-3.24-32.64-26.45-59.5-58.79-60.39zm-156.74 0c-32.16-.89-59.56 23.76-61.9 55.85-2.59 35.43 25.38 64.97 60.26 64.97 0 0 0 15.82-10.97 34.02-5.9 9.79 4.91 21.1 15.04 15.8 30.22-15.81 62.45-48.71 56.36-110.25-3.25-32.64-26.45-59.5-58.79-60.39z"></path>
              </svg>
            </div>
          </div>
        )
      )}
    </div>
  )
}
