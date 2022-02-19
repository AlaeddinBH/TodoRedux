import React from 'react'
import { useDispatch } from 'react-redux'
import { comp, del } from '../redux/action'
import Edit from './Edit'
import { RiCloseCircleLine } from 'react-icons/ri';

const Todo = ({task}) => {
    const dispatch = useDispatch()
  return (
    <div className={task.isDone ? 'todo-row complete' : 'todo-row' }>
      <div onClick={()=>dispatch(comp(task.id))}>{task.action}</div>
      <div className='icons'>
      <RiCloseCircleLine 
            onClick={()=>dispatch(del(task.id))}
            className='delete-icon'
            />
      </div>
      <Edit task={task}/>
    </div>
  )
}

export default Todo
