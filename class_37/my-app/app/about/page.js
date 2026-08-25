'use client'
import React from 'react'

const page = () => {
    const handleClick=async()=>{
const a= await fetch("/api/product")
const resp=await a.json()
console.log(resp)
    }
  return (
    <div>
      <h1>about page!</h1> <br />
      <button onClick={handleClick}>click to hit api</button>
    </div>
  )
}

export default page
