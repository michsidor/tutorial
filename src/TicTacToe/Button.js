import React from 'react'
import './MojStyl.css'

function Button({value, onButtonClick}) {
  return (
    <button className="myButton" onClick={onButtonClick}>{value}</button>
  )
}

export default Button