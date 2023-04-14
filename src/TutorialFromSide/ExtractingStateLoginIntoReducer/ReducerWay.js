  import React from 'react'
  import { useReducer, useState } from 'react'

  function ReducerWay() {

    const [state, dispatch] = useReducer(ChangeState,{tasks: tasksSeed, actual:' '}) // initial state 
    const [actual, setActual] = useState(' ')

    function Add(){
      dispatch({type:ACTIONS.ADD, payload:actual});
    }

    function Edit(id){
      dispatch({type:ACTIONS.EDIT, payload:id});
    }

    function Delete(id){
      dispatch({type:ACTIONS.DELETE, payload:id});
    }

    function Save(id,description, trigger){
      dispatch({type:ACTIONS.SAVE, payload:id, description:description, trigger:trigger})
    }

    const TaskChange = (event) => {
      setActual(event.target.value)
    }

    const taskMap = state.tasks.map(item => (
      <div key={item.id}>
        <h4>{item.id}: {item.description}: {item.isEditing}</h4>
        {item.isEditing === 1 ? (
          <div>
            <input type='text' value={item.description} onChange={(event) => {
              Save(item.id, event.target.value,false)
            }}/>
            <button onClick={() => Save(item.id, item.description, true)}>Save</button>
          </div>
        ) : (
          <div>
            <button onClick={() => Edit(item.id)}>Edit</button>
            <button onClick={() => Delete(item.id)}>Delete</button>
          </div>
        )}
      </div>
    ));

    return (
        <>
          <SingleTask handleAddTask={Add} handleTaskChange={TaskChange}/>
          {taskMap}
        </>
    )
  }

  function ChangeState(state,action) {

    switch(action.type){
      case ACTIONS.ADD:{
        const splicedTasks = [...state.tasks];
        const newTaskList = splicedTasks.length === 0 ? 
        ([...splicedTasks, {id:0, description:action.payload, isEditing:0}]) : 
        ([...splicedTasks, {id:splicedTasks[splicedTasks.length-1].id+1, description:action.payload, isEditing:0}])
        return {tasks: newTaskList}
      }
      case ACTIONS.EDIT:{
        let find = 0;
        const splicedTasks = [...state.tasks];
        for(let i = 0; i < splicedTasks.length; i++){
          if(splicedTasks[i].id === action.payload){
            find = i
          }
          else{
            continue
          }
        }
        splicedTasks[find].isEditing = 1
        return {tasks: splicedTasks}
      }
      case ACTIONS.DELETE:{
        let find = 0;
        const splicedTasks = [...state.tasks];
        for(let i = 0; i < splicedTasks.length; i++){
          if(splicedTasks[i].id === action.payload){
            find = i
          }
          else{
            continue
          }
        }
        splicedTasks.splice(find,1)
        return {tasks: splicedTasks}
      }
      case ACTIONS.SAVE:{
        let find = 0;
        const splicedTasks = [...state.tasks];
        for(let i = 0; i < splicedTasks.length; i++){
          if(splicedTasks[i].id === action.payload){
            find = i
          }
          else{
            continue
          }
        }
        if(action.trigger){
          splicedTasks[find].isEditing = 0    
        }
        splicedTasks[find].description = action.description
        return {tasks: splicedTasks}
      }
      default:{
        return state
      }
    }
  }


  function SingleTask({handleAddTask, handleTaskChange}){

    const handleSubmit = (event) => {
      event.preventDefault();
      handleAddTask(event);
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <h3>Add new task</h3>
          <input type='text' placeholder='Add task' onChange={handleTaskChange}></input>
          <button type='submit'>Add new task</button>        
        </form>
      </>
    )  
  }

  const tasksSeed =  [{id:0, description:"To jest task numer zero",  isEditing:0},
                      {id:1, description:"To jest task numer jeden", isEditing:0},
                      {id:2, description:"To jest task numer dwa",   isEditing:0},
                      {id:5, description:"To jest task numer piec",  isEditing:0},
                      {id:6, description:"To jest task numer szesc", isEditing:0}];

  const ACTIONS = {
    ADD: 'add',
    EDIT: 'edit',
    DELETE: 'delete',
    SAVE:'save'
  };

  export default ReducerWay