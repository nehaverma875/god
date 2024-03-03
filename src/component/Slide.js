import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decremented, incremented } from '../redux/slice/CounterSlice'

const Slide = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>


      <button onClick={()=>dispatch(incremented())}>increment</button>
      <div>{count}</div>
      <button onClick={()=>dispatch(decremented())}> dicrement</button>

    </div>
  )
}

export default Slide