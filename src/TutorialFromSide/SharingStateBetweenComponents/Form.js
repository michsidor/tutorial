import React from 'react'
import { useState } from 'react'

function Form() {

  const [isSelected, setIsSelected] = useState('First')
  
  function handleSelect(state){
    if(state === 'First'){
      setIsSelected('Second')
    }
    else{
      setIsSelected('First')
    }
  }

  return (
    <>
    <h1>Information about two persons:</h1>
    <p>Michal</p>
    <About select={isSelected} onClick={() => handleSelect('First')}>
      Siemanko
    </About>
    <p>Piotrek</p>
    <About select={isSelected} onClick={() => handleSelect("Second")}>
    Siemanko2
    </About>
    </>
  )
}

function About( {select,onClick, children} ) {

  const returnJSX = select === 'First' ? <div><button onClick={onClick('Second')}>Show more information</button></div> : {children}
  return (
    <>
    {returnJSX}
    </>
  )
}

export default Form