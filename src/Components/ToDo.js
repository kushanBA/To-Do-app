import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ToDo = ({task,toggleComplete,deleteTodo,editToDo}) => {
  return (
    <div className='Todo'>
      <p className={`${task.completed ? 'completed':'incompleted'}`}
       onClick={()=> toggleComplete(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editToDo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)} />
      </div>
    </div>
  )
}

export default ToDo
