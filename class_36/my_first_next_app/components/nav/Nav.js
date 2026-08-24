import React from 'react'
import './Nav.css'
import Link from 'next/link'
const Nav = () => {
    return (
        <div>
            <ul className='nav'>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/about'}><li>About</li></Link>
                <Link href={'/contact'}><li>Contact</li>
                </Link >
            </ul>
        </div>
    )
}

export default Nav
