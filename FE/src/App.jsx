// my App.jsx

import Background from "./components/Background";
import Headline from "./components/Headline";
import MainContent from "./components/MainContent";
import "./index.css";

import { useState, useEffect } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [userInput, setUserInput] = useState("");

  setTimeout(() => {
    setIsVisible(true);
  }, 2000);

  const handleUserInput = (newInput) => {
    setUserInput(newInput);
    console.log(newInput)
  }

  useEffect(() => {
    if (!userInput) return;
    try {
      fetch('http://localhost:5000/api/generate')
        .then((res) => res.json())
        .then((data) => console.log(data))
    } catch (error) {
      console.error(error);
    }
  }
  , [userInput]);

  return (
    <>
      <section className="my-16">
        <Background />
        <Headline isVisible={isVisible} />
        <MainContent isVisible={isVisible} handleUserInput={handleUserInput} />
      </section>
    </>
  );
}

export default App;
