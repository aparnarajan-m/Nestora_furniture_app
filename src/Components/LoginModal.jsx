import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess, closeLogin } from '../Redux/authSlice'
import './loginmodal.css'

function LoginModal() {
  const dispatch = useDispatch();
  const { isLoginOpen } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isLoginOpen) return null; //hide if not open

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginSuccess({ name: username, email }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='design-div'></div>
        <form onSubmit={handleLogin}> 
        <h2>Login</h2>
          <input
          type="text" 
          placeholder="Enter your name" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
          type="email"
          placeholder='Enter your email'
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          />
          <input 
          type="password"
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button className='submit-btn' type="submit">Login</button>
        </form>
        <button className="close-btn" onClick={() => dispatch(closeLogin())}>
          ✖
        </button>
      </div>
    </div>
  )
}

export default LoginModal