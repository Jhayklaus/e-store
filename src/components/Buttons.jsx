import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'

const Buttons = ( { color, text, textColor } ) => {
  return <button style={{ backgroundColor: color, color: textColor  }} className='btn'>{text}</button>

}




export default Buttons
