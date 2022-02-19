import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { dec, inc } from '../redux/action'

const Counter = () => {
    const {counter} = useSelector(state=>state)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={()=>dispatch(inc())} >+</button>
        <span>{counter}</span>
        <button onClick={()=>dispatch(dec())} >-</button>
    </div>
  )
}

export default Counter