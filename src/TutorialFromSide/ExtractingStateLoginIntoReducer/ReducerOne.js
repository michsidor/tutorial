import React from 'react'
import { useReducer } from 'react'

const ACTIONS = {
  INCREASE: 'increase',
  DECREASE: 'decrease'
};

function Reducer(state,action){ // mozna uzywac if elsy, ale konwencja mowi o tym aby uzywac switchy
  switch(action.type){
    case ACTIONS.INCREASE:{ 
      return {count: state.count+1}
    }
    case ACTIONS.DECREASE:{
      return {count: state.count-1}
    }
    default:{
      return state
    }
  }
}

function Main() {
  const [state, dispatch] = useReducer(Reducer,{count: 0}) 

  function Increment(){
    dispatch({type: ACTIONS.INCREASE})
  }

  function Decrement(){
    dispatch({type: ACTIONS.DECREASE})
  }

  return(
    <>
      <p>{state.count}</p>
      <button onClick={Decrement}>-</button>
      <button onClick={Increment}>+</button>
    </>
  )
}

export default Main