import React from 'react'
import { useRef } from 'react'

function UseRefTest() {

  let value = useRef(0);

  function AddOneClick(){
    value.current = value.current + 1;
    console.log(value.current)
  }

  return (
    <>
      <button onClick={AddOneClick}>Click me</button>
    </>
  )
}

export default UseRefTest