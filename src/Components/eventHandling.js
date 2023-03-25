import React from 'react'

function eventHandling() {

    function Loging(){
        console.log('Klikniete');
    }

  return (
    <div>
        <button onClick={Loging}>Click me!</button>
    </div>
  )
}

export default eventHandling
