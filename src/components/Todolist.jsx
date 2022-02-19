import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const Todolist = () => {
    const {tasks} = useSelector(state=>state.reducer)
    const test= useSelector(state=>state.visibilityFilter)
    console.log(test)
  return (
    <div>
        {
          test === "all" ?
          <div>
            {
              tasks.map(el=>
                  <Todo task={el} />
                  )}
          </div>
       : test === "completed" ?
       <div>
        { tasks.filter(task=>task.isDone).map(el=>
          <Todo task={el} />
          )}
       </div>
              
      : tasks.filter(task=>!task.isDone).map(el=>
        <Todo task={el} />
        )
      }
    </div>
  )
}

export default Todolist