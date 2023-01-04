import './App.css'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { createContext, useState } from 'react'
import { boardDefault } from './Words'

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefault)
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0})

  const onSelectedLetter = (keyVal) => {
    if(currentAttempt.letterPosition >= board[currentAttempt.attempt].length) return
  
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal
    setBoard(newBoard)
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})
  }
  
  const onSelectedEnter = () => {
    if(currentAttempt.letterPosition !== 5) return
    setCurrentAttempt({...currentAttempt, attempt: currentAttempt.attempt + 1, letterPosition: 0})
  }

  const onSelectedDelete = () => {
    if(currentAttempt.letterPosition === 0) return
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = ''
    setBoard(newBoard)
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition - 1})
  }

  return (
    <div className="App">
      <nav>
        <h1>Guess the word!</h1>
      </nav>
      <AppContext.Provider 
        value={{ board, setBoard, currentAttempt, setCurrentAttempt, onSelectedLetter, onSelectedEnter, onSelectedDelete }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  )
}

export default App
