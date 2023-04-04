import React from 'react'
import { useState } from 'react'
function Quiz() {

  const [answer,setAnswer] = useState(' ');
  const [disable,setDisable] = useState(true);
  const [winner, setWinner] = useState(null);
  const handleAnswer = async (event) => {
    setAnswer(event.target.value);
    if(event.target.value.trim() !== ''){
      setDisable(false);
    }
    else{
      setDisable(true);
    }
  }

  const handleForm = (event) => {
    event.preventDefault();
    if(answer.toLowerCase() === 'good'){
      setWinner(<h1>Good answer</h1>)
    }
    else{
      setWinner(<h1>Wrong answer</h1>)
    }
  }

  return (
    <>
    <h1>City quiz</h1>
    <p>What city is located on two continents?</p>
    <form onSubmit={handleForm}>
      <input type='text' onChange={handleAnswer}></input>
      <br />
      <button type='submit' disabled={disable}>Submit</button>
    </form>
    {winner}
    </>
  )
}

export default Quiz