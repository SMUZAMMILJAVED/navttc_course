
import { useState } from 'react'
import './App.css'

function App() {
const [count,setCount]=useState(0)
console.log("test")
  return (
    <>
    <h1>React Hooks</h1>
    Counter is {count}
    <div onClick={()=>{setCount(count+1)}}>click to update</div>
    </>
  )
}

export default App
