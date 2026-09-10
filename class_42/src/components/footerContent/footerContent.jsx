import React, { useContext } from 'react'
import { CounterConetext } from '../../context/Counter'

const FooterContent = () => {
    const a=useContext(CounterConetext)
       
        console.log("this data is from footer content component",a)
  return (
    <div>
          <h1>this is footer {a.count}</h1>
       
    </div>
  )
}

export default FooterContent
