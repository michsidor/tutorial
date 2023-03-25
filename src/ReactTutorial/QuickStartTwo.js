import React from 'react'
import { useState } from 'react'
import ButtonTwo from './ButtonTwo';

function QuickStartTwo() {

  const [count, setCount] = useState(0);

  function buttonHandler(){
    setCount(count + 1);
  }

  return (
    <>
      <h1>Aktualny stan: {count}</h1>
      <button onClick={buttonHandler}>Click me</button>
      <ButtonTwo count={count} buttonHandler={buttonHandler} />
    </>
  )
}

export default QuickStartTwo;