import React, { useContext } from 'react'
import { AppContext } from '../App'

const Key = ( {keyVal, bigKey} ) => {
  const { board, setBoard, currentAttempt, setCurrentAttempt } = useContext(AppContext)
  const selectLetter = () => {
    // Return if the current attempt is complete
    if(currentAttempt.letterPosition >= board[currentAttempt.attempt].length) return
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal
    setBoard(newBoard)
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})
  }

  return (
    <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
        {keyVal}
    </div>
  )
}

export default Key