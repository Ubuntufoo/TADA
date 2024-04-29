// App.jsx

import Background from './components/Background'
import Headline from './components/Headline'
import UserInput from './components/UserInput'
import ResponseView from './components/ResponseView'
import Sidebar from './components/Sidebar'
import './index.css'

import { useState, useEffect } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [chatBotResponses, setChatBotResponses] = useState([])

  const handleUserInput = (newInput) => {
    setUserInput(newInput)
  }

  const setCurrentResponse = (index) => {
    // move the object with the matching index to the end of the array
    const currentResponse = chatBotResponses.splice(index, 1)
    setChatBotResponses([...chatBotResponses, currentResponse[0]])
  }

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
  console.log(chatBotResponses)

  return (
    <>
      <section className="my-16">
        <Background />
        <Headline shiftHeadline={userInput} />
        <UserInput handleUserInput={handleUserInput} />
        <ResponseView
          chatBotResponses={chatBotResponses}
          isLoading={isLoading}
        />
        <Sidebar chatBotResponses={chatBotResponses} setCurrentResponse={setCurrentResponse} />
      </section>
    </>
  )
}

export default App
