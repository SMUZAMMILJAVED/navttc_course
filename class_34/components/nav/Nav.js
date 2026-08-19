import React from 'react'
import './Nav.css'
import Link from 'next/link'
const Nav = () => {
    return (
        <nav>
            <ul className='nav'>
           <Link href={'/'}> <li>home</li></Link>    
          <Link href={'/about'}><li>about</li></Link>      
            <Link href={'/contact'}><li>contact</li></Link>    
            <Link href={'/abc'}> <li>not found</li></Link>   </ul>
        </nav>
    )
}

export default Nav
