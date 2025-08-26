import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openLogin, logOut } from '../Redux/authSlice'

function Header() {

  const dispatch = useDispatch();
  const {isLoggedIn, user} = useSelector((state) => state.auth);

  return (
    <div className='header'>
      <div className='sub-header'>
      <h1 className='header-title'>Nestora</h1>
      <div className='header-nav'>
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/categories">Categories</Link>
        <Link className='links' to="/offers">Offers</Link>
        <Link className='links' to="/blog">Blog</Link>
        <Link className='links' to="/contact">Contact</Link>
      </div>

      {isLoggedIn ? (
      <button className='header-Login-btn' onClick={() => dispatch(logOut())}>
        Logout
      </button>

      ) : (
        <button className='header-Login-btn' onClick={() => dispatch(openLogin())}>
          Login 
        </button>
      )}

      </div>
    </div>
  )
}

export default Header