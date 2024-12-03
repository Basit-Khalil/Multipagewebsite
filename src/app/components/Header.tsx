import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";


function Header() {
  return (
    <header className='header'>
      <img  className="logo-image" src='/logo.png' alt='logo' />
      <h1 className='logo'></h1>
      <nav>
        <Link href="/Home">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Mobilecovers">Mobile Covers</Link>
        <Link href="/contactus">Contact Us</Link>
        <FaShoppingCart style={{color:'white' , fontSize:'20px'
        }}/>
      </nav>
    </header>
  )
}
export default Header








