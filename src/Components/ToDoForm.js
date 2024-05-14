import React, { useState } from 'react'

const ToDoForm = ({addTodo}) => {
  const [value , setValue]=useState(''); 

  const handleSubmit=(e)=>{
    e.preventDefault();
    addTodo(value);
    setValue('');
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='Todo-input' onChange={(e)=> setValue(e.target.value)}  
      value={value} placeholder='what is the task today'/>
      <button type='submit' className='Todo-btn'>Add Task</button>
    </form>
  )
}

export default ToDoForm
