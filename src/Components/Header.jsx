import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className='header-logo'><h1>Nestora</h1></div>

      <div className='header-nav'>
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/about">About Us</Link>
        <Link className='links' to="/categories">Categories</Link>
        <Link className='links' to="/offers">Offers</Link>
        <Link className='links' to="/blog">Blog</Link>
        <Link className='links' to="/contact">Contact</Link>
      </div>

        <div className='header-btn-div'><button className='header-Login-btn'>Login</button></div>
    </div>
  )
}

export default Header