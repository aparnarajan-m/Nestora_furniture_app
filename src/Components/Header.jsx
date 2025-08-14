import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className='sub-header'>
      <h1 className='header-title'>Nestora</h1>
      <div className='header-nav'>
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/about">About Us</Link>
        <Link className='links' to="/categories">Categories</Link>
        <Link className='links' to="/offers">Offers</Link>
        <Link className='links' to="/blog">Blog</Link>
        <Link className='links' to="/contact">Contact</Link>
      </div>
      <button className='header-Login-btn'>Login</button>
      </div>
    </div>
  )
}

export default Header