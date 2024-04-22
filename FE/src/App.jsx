// my App.jsx

import Background from './components/Background'
import Headline from './components/Headline'
import MainContent from './components/MainContent'
import './index.css'

function App() {

  return (
    <>
      <section className="my-14">
        <Background />
        <Headline />
        <MainContent />
      </section>
    </>
  )
}

export default App

