import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess, closeLogin } from '../Redux/authSlice'
import { toast } from 'react-toastify'
import './loginmodal.css'

function LoginModal() {
  const dispatch = useDispatch();
  const { isLoginOpen } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error states
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  if (!isLoginOpen) return null; //hide if not open

  const handleLogin = (e) => {
    e.preventDefault();

    let isValid = true;

    // reset all errors
    setUsernameError("");
    setEmailError("");
    setPasswordError("");

    // username check
    if (!username.trim()) {
      setUsernameError("Username is required!");
      isValid = false;
    }

    // email check
    if (!email.trim()) {
      setEmailError("Email is required!");
      isValid = false;
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        setEmailError("Please enter a valid email!");
        isValid = false;
      }
    }

    // password check
    if (!password.trim()) {
      setPasswordError("Password is required!");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters!");
      isValid = false;
    }

    if (!isValid) return;

    // if everything ok
    dispatch(loginSuccess({ name: username, email }));
    toast.success("✅ Login successful!")

    // clear form fields
    setUsername("");
    setEmail("");
    setPassword("");
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
          onChange={(e) => {
          setUsername(e.target.value);
          if (usernameError) setUsernameError(""); // clear error while typing
          }} 
          />
          {usernameError && <p className="error-message">{usernameError}</p>}

          <input 
          type="email"
          placeholder='Enter your email'
          value={email} 
          onChange={(e) => {
          setEmail(e.target.value);
          if (emailError) setEmailError(""); // clear error while typing
          }}
          />
          {emailError && <p className="error-message">{emailError}</p>}

          <input 
          type="password"
          placeholder='Enter your password'
          value={password}
          onChange={(e) => {
          setPassword(e.target.value);
          if (passwordError) setPasswordError(""); // clear error while typing
          }}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}

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