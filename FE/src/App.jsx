// my App.jsx

import Background from './components/Background'
import Headline from './components/Headline'
import UserInput from './components/UserInput'
import ResponseView from './components/ResponseView'
import './index.css'

import { useState, useEffect } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [chatBotResp, setChatBotResp] = useState('')


  setTimeout(() => {
    setIsVisible(true)
  }, 2000)

  const handleUserInput = (newInput) => {
    setUserInput(newInput)
  }

  useEffect(() => {
    if (!userInput) return

    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({ message: userInput }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      console.log('🚀 ~ useEffect ~ request body:', options.body)

      fetch('/api/generate', options)
        .then((res) => res.json())
        .then((data) => {
          console.log('🚀 ~ useEffect ~ data:', data)
          setChatBotResp(data.response)
        })
    } catch (error) {
      console.error(error)
    }
  }, [userInput])

  return (
    <>
      <section className="my-16">
        <Background />
        <Headline isVisible={isVisible} />
        <UserInput isVisible={isVisible} handleUserInput={handleUserInput} />
        <ResponseView chatBotResp={chatBotResp} />
      </section>
    </>
  )
}

export default App
