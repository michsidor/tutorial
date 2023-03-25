import React from 'react'
import { useState } from 'react'
import Button from './Button';
import './MojStyl.css'

function Board({showState}) 
{
  const [status, setStatus] = useState(Array(9).fill(' '));
  const [isNext, setIsNext] = useState(false)
  const [winner, setWinner] = useState("Kliknij aby rozpoczac gre");
  const [nextMove, setNextMove] = useState('O');

  function handleClick(buttonId){
    const newStatus = status.slice()
    if(newStatus[buttonId] === ' ' && (calculateWinner(newStatus) !== 'O') && (calculateWinner(newStatus) !== 'X')){
      if(isNext){
        newStatus[buttonId] = 'O';
        setNextMove('O')
      }
      else{
        newStatus[buttonId] = 'X';
        setNextMove('X')
      }

      setIsNext(!isNext)
      setStatus(newStatus);
      setWinner(<h1>Next move is for: {nextMove}</h1>)

      if(calculateWinner(newStatus) === 'X'){
        setWinner(<h1>Winner is X</h1>)
      }
      else if(calculateWinner(newStatus) === 'O'){
        setWinner(<h1>Winner is O</h1>)
      }
    }    
  }

  return (
    <>
      <Button key={1} value={status[0]} onButtonClick={() => handleClick(0)}/>
      <Button key={2} value={status[1]} onButtonClick={() => handleClick(1)}/>
      <Button key={3} value={status[2]} onButtonClick={() => handleClick(2)}/>
      <br />
      <Button key={4} value={status[3]} onButtonClick={() => handleClick(3)}/>
      <Button key={5} value={status[4]} onButtonClick={() => handleClick(4)}/>
      <Button key={6} value={status[5]} onButtonClick={() => handleClick(5)}/>
      <br />
      <Button key={7} value={status[6]} onButtonClick={() => handleClick(6)}/>
      <Button key={8} value={status[7]} onButtonClick={() => handleClick(7)}/>
      <Button key={9} value={status[8]} onButtonClick={() => handleClick(8)}/>
      <div className='winner'>{winner}</div>

    </>
  )
}


function calculateWinner(status){
  let arrX = [];
  let arrO = [];
  const winningCombination = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6],
    [1,4,7], [2,5,8], [0,4,8],[2,4,6]
  ]

  for(let i = 0; i < status.length; i++){
    if(status[i] === 'X'){
      arrX.push(i)
    }
    else if(status[i] === 'O'){
      arrO.push(i)
    }
    else{
      continue
    }
  }

  for(let i = 0; i < winningCombination.length; i++){
    if(compareArrays(arrX,winningCombination[i])){
      return 'X';
    }
    else if(compareArrays(arrO,winningCombination[i])){
      return 'O';
    }
    else{
      continue;
    }
  }
}

function compareArrays(arrOne, arrTwo){
  if(JSON.stringify(arrOne) === JSON.stringify(arrTwo)){
    return true;
  }
  else{
    return false;
  }
}

export default Board