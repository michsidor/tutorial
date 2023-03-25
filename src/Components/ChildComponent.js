import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={() => props.sayHi('Michala')}>
            Kliknij zeby dodac imie
        </button>
    </div>
  )
}

export default ChildComponent
