import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import Counter from '../../components/counter/Counter';

const Contact = () => {
    useEffect(()=>{
    console.log("hello world!");
    
  })
  return (
    <div>
     
      Contact page
      <Counter/>
    </div>
  )
}

export default Contact
