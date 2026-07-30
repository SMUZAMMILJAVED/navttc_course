import { useEffect, useState } from "react"
import Button from '../button/Button'
const Counter = () => {
   const [count,setCount]= useState(0);  
   useEffect(()=>{
    console.log("hello world from counter page");
    
   },[count])
  return (
    <div>
      <h1>Counter is {count}</h1>
      <Button text='+' onClick={()=>{setCount(count+1)}}/>
      <Button text="-" onClick={()=>{setCount(count-1)}}/>


       {/* <button onClick={()=>{setCount(count+1)}}>increment </button>
      <button onClick={()=>{setCount(count-1)}}>decrement</button> */}
    </div>
  )
}

export default Counter
