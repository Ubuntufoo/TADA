// App.jsx

import Background from './components/Background'
import Headline from './components/Headline'
import UserInput from './components/UserInput'
import ResponseView from './components/ResponseView'
import Sidebar from './components/Sidebar'
import InfoButton from './components/InfoButton'
import './index.css'

import { useState, useEffect } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [chatBotResponses, setChatBotResponses] = useState([])
  const [currentResponse, setCurrentResponse] = useState('')

  const handleUserInput = (newInput) => {
    setUserInput(newInput)
  }

  const handleCurrentResponse = (index) => {
    setCurrentResponse(chatBotResponses[index].response)
  }
  console.log('current response:', currentResponse)

  useEffect(() => {
    // Ensure there's user input before making the API call
    if (!userInput) return
    try {
      setIsLoading(true)
      const options = {
        method: 'POST',
        body: JSON.stringify({ message: userInput }),
        headers: {
          'Content-Type': 'application/json',
        },
      }

      fetch('/api/generate', options)
        .then((res) => {
          console.log('res:', res)
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
              index: prev.length,
              response: data.response,
              summary: data.summary,
            },
          ])
          setCurrentResponse(data.response)
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
      <main className="mt-10 sm:mt-16 flex flex-col gap-y-12 sm:gap-y-16">
        <Background />
        <Headline shiftHeadline={userInput} />
        <UserInput handleUserInput={handleUserInput} isDisabled={isLoading} />
        <ResponseView currentResponse={currentResponse} isLoading={isLoading} />
        <Sidebar
          chatBotResponses={chatBotResponses}
          handleCurrentResponse={handleCurrentResponse}
        />
        <InfoButton />
      </main>
    </>
  )
}

export default App
