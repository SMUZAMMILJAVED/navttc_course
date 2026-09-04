import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counter/CounterSlice'
const Nav = () => {
    const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>counter is {count}</h1>
    </div>
  )
}

export default Nav
