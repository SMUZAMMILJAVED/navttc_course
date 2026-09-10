import { useContext, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Nav from './components/navbar/Nav'
import Hero from './components/hero/Hero'
import { CounterConetext } from './context/Counter'

function App() {
 const b= useContext(CounterConetext)
const a= useState(0)
  const data={count:a[0],setCount:a[1]}

  return (
    <>
   <Hero data={data}/>
   <button onClick={()=>{
b.setCount(b.count+1)
   }}>click to change from app component</button>
    </>
  )
}

export default App
