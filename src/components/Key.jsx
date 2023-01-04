import React, { useContext } from 'react'
import { AppContext } from '../App'

const Key = ( {keyVal, bigKey} ) => {
  const { board, setBoard, currentAttempt, setCurrentAttempt } = useContext(AppContext)
  const selectLetter = () => {
    if(keyVal === 'ENTER') {
      // Return if the current attempt is not complete
      if(currentAttempt.letterPosition !== 5) return
      setCurrentAttempt({...currentAttempt, attempt: currentAttempt.attempt + 1, letterPosition: 0})

    } else if(keyVal === 'DELETE') {
      // Return if the current attempt is complete
      if(currentAttempt.letterPosition === 0) return
      const newBoard = [...board]
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = ''
      setBoard(newBoard)
      setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition - 1})
    } else {
      // Return if the current attempt is complete
      if(currentAttempt.letterPosition >= board[currentAttempt.attempt].length) return
  
      const newBoard = [...board]
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal
      setBoard(newBoard)
      setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})
    }
  }

  return (
    <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
        {keyVal}
    </div>
  )
}

export default Key