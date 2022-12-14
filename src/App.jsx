import './App.css'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { createContext, useState, useEffect } from 'react'
import { boardDefault, generateWordSet } from './components/Words'
import GameOver from './components/GameOver'

export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefault)
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0})
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])
  const [correctWord, setCorrectWord] = useState('')
  const [gameOver, setGameOver] = useState({
    gameOver: false, 
    guessedWord: false
  })

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onSelectedLetter = (keyVal) => {
    if(currentAttempt.letterPosition >= board[currentAttempt.attempt].length) return
  
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal
    setBoard(newBoard)
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})
  }
  
  const onSelectedEnter = () => {
    if(currentAttempt.letterPosition !== 5) return

    let currentWord = ''
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i]
    }

    if(wordSet.has(currentWord.toLowerCase())) { 
      setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPosition: 0})
    } else {
      alert('This word is not in the dictionary!')
    }

    if(currentWord == correctWord) {
      setGameOver({...gameOver, gameOver: true, guessedWord: true})
      return
    }

    if(currentAttempt.attempt === 5) {
      setGameOver({...gameOver, gameOver: true, guessedWord: false})
      return
    }
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
        value={{ 
          board, 
          setBoard, 
          currentAttempt, 
          setCurrentAttempt, 
          onSelectedLetter, 
          onSelectedEnter, 
          onSelectedDelete,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver
        }}
      >
        <Board />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </AppContext.Provider>
    </div>
  )
}

export default App
