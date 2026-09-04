import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Button = () => {
 const counter=   useContext(CounterContext)
 console.log(counter , "from button component")
  return (
    <div>
      <button onClick={()=>{
        counter.setCount(counter.count+1)
      }}>click to +</button> 
      <button  onClick={()=>{
        counter.setCount(counter.count-1)
      }}>click to -</button> 
      <button  onClick={()=>{
        counter.setCount(counter.count*2)
      }}>click to multiply by 2</button> 
    </div>
  )
}

export default Button
