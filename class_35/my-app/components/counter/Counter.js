'use client'
import React from 'react'
import { useState } from "react";
const Counter = () => {
    const [count,setCount]= useState(0)
  const handleClick=()=>{
setCount(count+1)

  }
  return (
    <div>
        <h1>counter is {count}</h1>
  <button onClick={handleClick}>click to update</button>
    </div>
  )
}

export default Counter
