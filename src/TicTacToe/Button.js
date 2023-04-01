import React from 'react'
import './MojStyl.css'

function Button({state,changeButtonsState}) {

  return (
    <button className="myButton" onClick={changeButtonsState}>{state}</button>
  )
}

export default Button