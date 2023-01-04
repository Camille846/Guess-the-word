import React, { useContext } from 'react'
import { AppContext } from '../App'

const Key = ( {keyVal, bigKey} ) => {
  const { 
    onSelectedLetter, 
    onSelectedEnter, 
    onSelectedDelete 
  } = useContext(AppContext)
  const selectLetter = () => {
    if(keyVal === 'ENTER') {
      onSelectedEnter()
    } else if(keyVal === 'DELETE') {
      onSelectedDelete()
    } else {
      onSelectedLetter(keyVal)
    }
  }

  return (
    <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
        {keyVal}
    </div>
  )
}

export default Key