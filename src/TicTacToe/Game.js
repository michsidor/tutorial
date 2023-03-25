import React from 'react'
import { useState } from 'react'
import Board from './Board'

function Game() {

  const [gameState, setGameState] = useState(null)

  function handleGameState(){

  }
  
  return (
    <>
      <Board />
    </>
  )
}

export default Game