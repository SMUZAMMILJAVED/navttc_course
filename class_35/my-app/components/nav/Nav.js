import React from 'react'
import './Nav.css'
import Link from 'next/link'
const Nav = () => {
  return (
    <nav>
        <ul style={{
            gap:'20px'
        }} className='nav flex justify-center '>
           <Link href="/"><li>Home</li></Link> 
         <Link href="/about"> <li>About</li></Link>  
            <li>Contact</li>
            <li>Login</li>
            <li>Signup</li>
        </ul>
    </nav>
  )
}

export default Nav
