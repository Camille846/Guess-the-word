import React, { useContext } from 'react'
import { useEffect } from 'react'
import { AppContext } from '../App'

const Letter = ({letterPos, attemptVal}) => {
    const { board, correctWord, currentAttempt, setDisabledLetters } = useContext(AppContext)
    const letter = board[attemptVal][letterPos]
    const correct = correctWord.toUpperCase()[letterPos] === letter
    const almost = !correct && letter !== ' ' && correctWord.toUpperCase().includes(letter)
    // we just want to set the colors after the user has made an attempt
    const letterState = currentAttempt.attempt > attemptVal && (correct ? 'correct' : almost ? 'almost' : 'error')

    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
          console.log(letter);
          setDisabledLetters((prev) => [...prev, letter]);
        }
      }, [currentAttempt.attempt]);

    return (
        <div className='letter' id={letterState}>{letter}</div>
    )
}

export default Letter