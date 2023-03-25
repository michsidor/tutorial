import React from 'react'

function ButtonTwo( {count, buttonHandler} ) {

  return (
    <>
      <h1>Aktualny stan: {count}</h1>
      <button onClick={buttonHandler}>Click me</button>
    </>
  )
}

export default ButtonTwo;