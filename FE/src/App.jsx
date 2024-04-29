// App.jsx

import Background from './components/Background'
import Headline from './components/Headline'
import UserInput from './components/UserInput'
import ResponseView from './components/ResponseView'
import './index.css'

import { useState, useEffect } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [chatBotResponses, setChatBotResponses] = useState([])

  const handleUserInput = (newInput) => {
    setUserInput(newInput)
  }

  useEffect(() => {
    // Ensure there's user input before making the API call
    if (!userInput) return
    try {
      setIsLoading(true) // Set loading state to true before making the API call
      const options = {
        method: 'POST',
        body: JSON.stringify({ message: userInput }),
        headers: {
          'Content-Type': 'application/json',
        },
      }

      fetch('/api/generate', options)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok')
          }
          return res.json()
        })
        .then((data) => {
          // Prevent dependency array warning by using a callback function
          setChatBotResponses((prev) => [
            ...prev,
            {
              response: data.response,
              summary: data.summary,
            },
          ])
          setIsLoading(false) // Set loading state to false after successful response
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          setIsLoading(false) // Set loading state to false in case of error
        })
    } catch (error) {
      console.error('Error in API call:', error)
    }
  }, [userInput])

  return (
    <>
      <section className="my-16">
        <Background />
        <Headline />
        <UserInput handleUserInput={handleUserInput} />
        <ResponseView
          chatBotResponses={chatBotResponses}
          isLoading={isLoading}
        />
      </section>
    </>
  )
}

export default App
