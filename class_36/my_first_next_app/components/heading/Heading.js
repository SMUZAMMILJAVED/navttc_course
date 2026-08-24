'use client'
import React from 'react'
import { useState } from "react";
const Heading = () => {
     const [data,setData]=useState('data')
  const handleClick=()=>{
    setData("updated!")
  }
  return (
    <div>
       <h1>{data}</h1>
   <button onClick={handleClick}>click to update</button>
    </div>
  )
}

export default Heading
