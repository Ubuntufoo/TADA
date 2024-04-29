// the response from the request to chat completions API
/* eslint-disable react/prop-types */

export default function ResponseView({ chatBotResponses, isLoading }) {
  return (
    <div className="mt-20 mx-auto w-1/2">
      {isLoading ? (
        <div className="flex items-center justify-center">
          {/* Add additional classes to specify the animation */}
          <div className="h-12 w-24 animate-spin rounded-full border-b-4 border-t-4 border-white"></div>
        </div>
      ) : (
        chatBotResponses.length > 0 &&
        chatBotResponses.map((resp, index) => (
          <div key={index} className="mt-4">
            <p className="text-2xl">{resp.response}</p>
          </div>
        ))
      )}
    </div>
  )
}
