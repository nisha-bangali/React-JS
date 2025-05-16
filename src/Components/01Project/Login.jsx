import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import './css/login.css'
function Login() {

 const navigate = useNavigate()
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")


  const data = JSON.parse(localStorage.getItem("userdata"))

   const handleSubmit = (e) => {
        e.preventDefault();

        if (data?.email === email && data?.password === password) {
            alert("Login Successfull");
            navigate("/dashboard")
            localStorage.setItem("auth", JSON.stringify(true))
            // setAuth(true)
        } else {
            alert("user not valid")
            navigate("/signup")

        }
    }
  
  return (

   
  <div className="login_form">
    <form action="#" onSubmit={handleSubmit}>
      <h3>Log in </h3>
      <div className="input_box">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="input_box">
        <div className="password_title">
          <label htmlFor="password">Password</label>
          <Link className='link' to="#">Forgot Password?</Link>
        </div>
        <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button type="submit">Log In</button>
      <p className="sign_up">Don't have an account? <Link className='link' to="/signup">Sign up</Link></p>
    </form>
  </div>
  
  )
}

export default Login
