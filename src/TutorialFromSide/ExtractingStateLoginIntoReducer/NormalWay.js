import React from 'react'
import { useState } from 'react'

function NormalWay() {

  const [actual, setActual] = useState(' ');
  const [tasks, setTasks] = useState(basicTasks);

  function AddTask(){
    const splicedTasks = [...tasks];

    const newTaskList = splicedTasks.length === 0 ? 
    ([...splicedTasks, {id:0, description:actual, isEditing:0}]) : 
    ([...splicedTasks, {id:splicedTasks[splicedTasks.length-1].id+1, description:actual, isEditing:0}])

    setTasks(newTaskList);
  }

  const TaskChange = (event) => {
    setActual(event.target.value)
  }

  function Edit(id){
    let find = 0;
    const splicedTasks = [...tasks];
    for(let i = 0; i < splicedTasks.length; i++){
      if(splicedTasks[i].id === id){
        find = i
      }
      else{
        continue
      }
    }
    splicedTasks[find].isEditing = 1
    setTasks(splicedTasks)
  }

  function Delete(id){
    let find = 0;
    const splicedTasks = [...tasks];
    for(let i = 0; i < splicedTasks.length; i++){
      if(splicedTasks[i].id === id){
        find = i
      }
      else{
        continue
      }
    }
    splicedTasks.splice(find,1)
    setTasks(splicedTasks)
  }

  function Save(id, newDescription){
    let find = 0;
    const splicedTasks = [...tasks];
    for(let i = 0; i < splicedTasks.length; i++){
      if(splicedTasks[i].id === id){
        find = i
      }
      else{
        continue
      }
    }
    splicedTasks[find].isEditing = 0    
    setTasks(splicedTasks)
  }

  const taskMap = tasks.map(item => (
    <div key={item.id}>
      <h4>{item.id}: {item.description}: {item.isEditing}</h4>
      {item.isEditing === 1 ? (
        <div>
          <input type='text' value={item.description} onChange={(event) => {
            const newTasks = [...tasks];
            const index = newTasks.findIndex(task => task.id === item.id);
            newTasks[index].description = event.target.value;
            setTasks(newTasks);
          }}/>
          <button onClick={() => Save(item.id)}>Save</button>
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
        <SingleTask handleAddTask={AddTask} handleTaskChange={TaskChange}/>
        {taskMap}
      </>
  )
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

const basicTasks = [{id:0, description:"To jest task numer zero",  isEditing:0},
                    {id:1, description:"To jest task numer jeden", isEditing:0},
                    {id:2, description:"To jest task numer dwa",   isEditing:0},
                    {id:5, description:"To jest task numer piec",  isEditing:0},
                    {id:6, description:"To jest task numer szesc", isEditing:0}];

export default NormalWay