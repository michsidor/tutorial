import React from 'react'
import { useState, useEffect } from 'react';
import Button from './Button';
import './MojStyl.css'

function Board()  
{
  // DEKLARACJA STANOW
  const [buttonsStateHistory, setButtonsStateHistory] = useState([Array(9).fill(' ')])
  const [newButtonsState,setNewButtonsState] = useState(Array(9).fill(' '));
  const [whosActualMove, setWhosActualMove] = useState('X');
  const [winner, setWinner] = useState(' ');

  //ZMIANA HISTORYCZNYCH STANOW 
  function changeActualState(state,index){
    setNewButtonsState(state);
    const slicedButtonsStateHistory = buttonsStateHistory.slice();
    slicedButtonsStateHistory.splice(index+1, slicedButtonsStateHistory.length-index-1)
    setButtonsStateHistory(slicedButtonsStateHistory);
    if(slicedButtonsStateHistory.length % 2 === 0){
      setWhosActualMove('O')
    }
    else{
      setWhosActualMove('X')
    }
    setWinner(' ')
  }

  // ZMIANA STANOW POSZCZEGOLNYCH PRZYCISKOW
  function changeButtonsState(buttonId){
    const newButtonStateSlice = newButtonsState.slice();
    if(newButtonsState[buttonId] !== 'X' && newButtonsState[buttonId] !== 'O'){
      if(whosActualMove === 'X'){
        newButtonStateSlice[buttonId] = 'X'
        setWhosActualMove('O')
      }
      else{
        newButtonStateSlice[buttonId] = 'O'
        setWhosActualMove('X')
      }
      setNewButtonsState(newButtonStateSlice);
      setButtonsStateHistory([...buttonsStateHistory,newButtonStateSlice])
    }
  }

  useEffect(() => {
    const winner = calculateWinner(newButtonsState);
    if (winner === 'X') {
      setWinner('X');
    } else if (winner === 'O') {
      setWinner('O');
    }
  }, [newButtonsState]);

  // MAPOWANIE PRZYCISKOW
  const historicalStates = buttonsStateHistory.map((items,index) => 
  <div key={index}>
    {index === 0 ? (
      <button key={index} onClick={() => changeActualState(items,index)}>Zacznij gre</button>
    ) : (
      <button key={index} onClick={() => changeActualState(items,index)}>Ruch numer #{index}</button>
    )}
    <br />
  </div>
)

  // RETURN TEGO CO POKAZUJE NAM KOMPONENT
  return (
    <>
      {winner !== ' ' && <h1>Wygranym jest {winner}!</h1>}      
      <Button state={newButtonsState[0]} changeButtonsState={() => changeButtonsState(0)}/>
      <Button state={newButtonsState[1]} changeButtonsState={() => changeButtonsState(1)}/>
      <Button state={newButtonsState[2]} changeButtonsState={() => changeButtonsState(2)}/>
      <br /> 
      <Button state={newButtonsState[3]} changeButtonsState={() => changeButtonsState(3)}/>
      <Button state={newButtonsState[4]} changeButtonsState={() => changeButtonsState(4)}/>
      <Button state={newButtonsState[5]} changeButtonsState={() => changeButtonsState(5)}/>
      <br />
      <Button state={newButtonsState[6]} changeButtonsState={() => changeButtonsState(6)}/>
      <Button state={newButtonsState[7]} changeButtonsState={() => changeButtonsState(7)}/>
      <Button state={newButtonsState[8]} changeButtonsState={() => changeButtonsState(8)}/>
      <br />  
      <h1>Teraz jest ruch: {whosActualMove}</h1>
      <h1>{historicalStates}</h1>
      
    </>
  )
}

function calculateWinner(state){
  let arrX = [];
  let arrO = [];
  const winningCombination = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6],
    [1,4,7], [2,5,8], [0,4,8],[2,4,6]
  ]

  for(let i = 0; i < state.length; i++){
    if(state[i] === 'X'){
      arrX.push(i)
    }
    else if(state[i] === 'O'){
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