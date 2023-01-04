import './App.css'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { createContext, useState } from 'react'
import { boardDefault } from './Words'

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefault)
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0})
  return (
    <div className="App">
      <nav>
        <h1>Guess the word!</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currentAttempt, setCurrentAttempt }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App
