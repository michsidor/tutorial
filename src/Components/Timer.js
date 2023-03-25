import React from 'react'
import { useRef, useState} from 'react'

export default function Timer() {
  
  const intervalRef = useRef(null);

  function startHandler(){
    
  }

  function stopHandler(){

  }

  return (
    <React.Fragment>
      <h1>Actual time on your watch: </h1>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
    </React.Fragment>
  )
}

