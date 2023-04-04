import React from 'react'

function BasicFunction(){
  return(
    <>
    <RespondingToEvents message="Wywolanie pierwsze">
      Tutaj pokazuje childrena pierwszego
    </RespondingToEvents>

    <RespondingToEvents message="Wywolanie drugie">
      Tutaj pokazuje childrena drugiego
    </RespondingToEvents>

    <h1>Propagacja eventow</h1>
    <EventPropagation />
    </>
  )
}


function EventPropagation(){ // najpierw wyswietli sie Play button One a potem PlayDiv
  return(
    <div onClick={() => alert("PlayDiv")}>
      <button onClick={() => alert("Play button One")}>Play button one</button> 
      <button onClick={() => alert("Play button Two")}>Play button Two</button>
    </div>
  )
}


function RespondingToEvents({message,children}) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  )
}

export default BasicFunction