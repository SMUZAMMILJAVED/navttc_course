'use client'
import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
      <h1>counter is {count}</h1>
 <button onClick={()=>{setCount(count+1)}}>click</button>
    </div>
  )
}

export default Counter
