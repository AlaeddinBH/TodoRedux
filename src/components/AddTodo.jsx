import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../redux/action';

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handelChange = (e) => {
        setInput(e.target.value);
    };


    const handelSubmit = (e) => {
        e.preventDefault();
        const newTask = 
        {
            id: Math.random(),
            action : input,
            isDone : false
        }
        // dispatch(add(newTask))

        newTask.action.trim() === "" ? alert("Please enter a task") : dispatch(add(newTask));
        
        setInput('')
    }



  return <div>
      <form className='todo-form' onSubmit={handelSubmit}>

             <input
                type="text"
                placeholder='Add a Task'
                value={input}
                name='text'
                className='todo-input'
                onChange={handelChange}
                 
            />
            <button className='todo-button' >Add Task</button>

      </form>
  </div>;
};

export default AddTodo