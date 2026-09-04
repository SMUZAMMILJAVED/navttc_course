import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount,mulByAmount } from '../redux/counter/CounterSlice'
const Button = () => {
    const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{
        dispatch(increment())
      }}>+</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>-</button>
      <button onClick={()=>{
        dispatch(incrementByAmount(2))
      }}> inc by 2</button>
      <button onClick={()=>{
        dispatch(mulByAmount(2))
      }}> mul by 2</button>
    </div>
  )
}

export default Button
