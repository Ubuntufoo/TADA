// the response from the request to chat completions API
/* eslint-disable react/prop-types */

export default function ResponseView({ chatBotResp }) {
  return (
    <div className="text-center mt-20">
      <p className="text-2xl">{chatBotResp}</p>
    </div>
  )
}