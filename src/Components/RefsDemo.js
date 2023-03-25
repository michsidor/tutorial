import React from 'react'
import { useRef } from 'react'
function RefsDemo() {

  const inputRef = useRef(null);

  function refHandler(){
    inputRef.current.focus();
  }

  return (
    <React.Fragment>
      <input type="text" ref={inputRef}/>
      <button onClick={refHandler}>Click me!</button>
    </React.Fragment>
  )
}

export default RefsDemo