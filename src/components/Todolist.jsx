import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const Todolist = () => {
    const {tasks} = useSelector(state=>state)
  return (
    <div>
        {
            tasks.map(el=>
                <Todo task={el} />
                )
        }
    </div>
  )
}

export default Todolist