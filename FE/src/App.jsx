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

  return (
    <>
      <section className="my-16">
        <Background />
        <Headline isVisible={isVisible} />
        <MainContent isVisible={isVisible} />
      </section>
    </>
  );
}

export default App;
