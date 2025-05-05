import React from 'react'
import { Link } from 'react-router'
import '../css/login.css'
function Login() {
  return (
   
  <div className="login_form">
   
    <form action="#">
      <h3>Log in </h3>
      <div className="input_box">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter email address" required />
      </div>
      <div className="input_box">
        <div className="password_title">
          <label htmlFor="password">Password</label>
          <Link className='link' to="#">Forgot Password?</Link>
        </div>
        <input type="password" id="password" placeholder="Enter your password" required />
      </div>
      <button type="submit">Log In</button>
      <p className="sign_up">Don't have an account? <Link className='link' to="#">Sign up</Link></p>
    </form>
  </div>
  
  )
}

export default Login
