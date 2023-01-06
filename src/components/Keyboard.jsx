import React, { useContext, useCallback, useEffect } from 'react'
import { AppContext } from '../App'
import Key from './Key'
import { FiDelete } from 'react-icons/fi'

const Keyboard = () => {
  const { onSelectedEnter, onSelectedDelete, onSelectedLetter, disabledLetters } = useContext(AppContext)
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

// Create a function to handle keyboard events
  const handleKeyboard = useCallback ((e) => {
    if(e.key === 'Enter') {
      onSelectedEnter()
    } else if(e.key === 'Backspace') {
      onSelectedDelete()
    } else{
      keys1.forEach((key) => { 
        if(e.key.toUpperCase() === key) {
          onSelectedLetter(key)
        }
      })
      keys2.forEach((key) => {
        if(e.key.toUpperCase() === key) {
          onSelectedLetter(key)
        }
      })
      keys3.forEach((key) => {
        if(e.key.toUpperCase() === key) {
          onSelectedLetter(key)
        }
      })
    }

  })

// using useEffect to handle keyboard events 
  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)

    return () => {
      document.removeEventListener('keydown', handleKeyboard)
    }
  }, [handleKeyboard])

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className="first_line">
        {keys1.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)}/>
        })} 
      </div>
      <div className="second_line">
        {keys2.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)}/>
        })}
      </div>
      <div className="third_line">
        <Key keyVal={'ENTER'} bigKey={true} />
        {keys3.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)}/>
        })}
        <Key keyVal={<FiDelete className='delete-icon'/>} bigKey={true} />
      </div>
    </div>
  )
}

export default Keyboard