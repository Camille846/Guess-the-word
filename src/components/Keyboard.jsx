import React from 'react'
import Key from './Key'
import { FiDelete } from 'react-icons/fi'

const Keyboard = () => {
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

  return (
    <div className='keyboard'>
      <div className="first_line">
        {keys1.map((key) => {
          return <Key keyVal={key}/>
        })} 
      </div>
      <div className="second_line">
        {keys2.map((key) => {
          return <Key keyVal={key}/>
        })}
      </div>
      <div className="third_line">
        <Key keyVal={'ENTER'} bigKey={true} />
        {keys3.map((key) => {
          return <Key keyVal={key}/>
        })}
        <Key keyVal={<FiDelete className='delete-icon'/>} bigKey={true} />
      </div>
    </div>
  )
}

export default Keyboard