import React, { useContext } from 'react'
import Button from './Button'
import { CounterContext } from '../context/CounterContext'

const Nav = () => {
   const counter= useContext(CounterContext);
   console.log(counter  , "from nav component")
  return (
    <div>
     nav bar
    </div>
  )
}

export default Nav
