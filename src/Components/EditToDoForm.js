import React, { useState } from 'react'

const EditTodoForm = ({editTodo,task}) => {
  const [value , setValue]=useState(task.task); 

  const handleSubmit=(e)=>{
    e.preventDefault();
    editTodo(value,task.id);
    setValue('');
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='Todo-input' onChange={(e)=> setValue(e.target.value)}  
      value={value} placeholder='Update the task'/>
      <button type='submit' className='Todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm;