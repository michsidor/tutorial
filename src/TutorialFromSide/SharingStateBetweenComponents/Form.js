import React from 'react'
import { useState } from 'react'

function Form() {

  const [isSelected, setIsSelected] = useState(0)
  
  function handleSelect(state){
      setIsSelected(state)
  }

  return (
    <>
    <h1>Information about two persons:</h1>
    <p>Michal</p>
    <About isActive={isSelected === 0 } onClick={() => handleSelect(0)}>
      Siemanko jestem Michal i przepieknie wam zaprogramuje
    </About>
    <p>Piotrek</p>
    <About isActive={isSelected === 1 } onClick={() => handleSelect(1)}>
      Siemanko jestem Piotrek i przepieknie was obetne
    </About>
    </>
  )
}

function About( {isActive,onClick, children} ) {
  return(
    <>
    {isActive ? 
    (<div>{children}</div>)
    :
    (<button onClick={onClick}>Show more information</button>)
    }
    </>
  )  
   
}


export default Form