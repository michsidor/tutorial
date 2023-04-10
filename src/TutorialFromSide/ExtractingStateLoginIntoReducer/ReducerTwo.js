import React from 'react'
import { useReducer } from 'react'

const ACTIONS = {
  EDIT: 'edit',
  DELETE: 'delete',
  ADD: 'Add'
}

function Reducer(state,action){
  switch(action.type){
    
  }
}

function ReducerTwo() {
  const [state,dispatch] = useReducer(Reducer,basicTasks)

  return (
    <>
      <form>
        <h3>Zadania do dodania</h3>
        <input type='text' placeholder='Dodaj zadanie'></input>
        <button>Dodaj zadanie</button>
      </form>
    </>
  )
}

const basicTasks = [{id:1, description:"To jest task numer jeden"},
                    {id:2, description:"To jest task numer dwa"},
                    {id:3, description:"To jest task numer trzy"}];

export default ReducerTwo