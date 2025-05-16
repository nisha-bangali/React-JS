import React, { useState } from 'react';
import './css/signin.css';
import { useNavigate } from 'react-router';

// import "tailwindcss";

function Signin() {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  // const [isAuth , setIsAuth] = useState(false)

 const [form,setForm] = useState({
  name:'',
  address:'',
  email:'',
  password:'',
  confirmPassword:'',

 })


  const navigate = useNavigate()

function handleChange(e){
  setForm({
    ...form,
    [e.target.name] : e.target.value
  })
}
 
const handleSubmit = (e) =>{
  e.preventDefault()
  if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
    }
    alert("Signup Successful");
    localStorage.setItem("userdata", JSON.stringify(form));
    navigate("/login");
    
}
// console.log(form);

  return (

    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Sign Up</button>
      </form>
    </div>
  );
};


export default Signin










  // const handleSignin = (e) =>{
  //   e.preventDefault(); 
  //   if (name === '' || email === '' || password === '' || confirmPassword === '') {
  //     alert('Please fill all the fields')
  //   }
    // else if (email.includes('@') === false || email.includes('.') === false) {
    //   alert('Invalid email Please include "@" & "."in your Email')
    // }
    // else if (password !== confirmPassword) {
    //   alert('Passwords do not match')
    // }
    // else if(password.length === 8){
    //   alert('Password should be at least 8 characters long')
    // }
    // else if (email.includes('@') === false || email.includes('.') === false) {
    //   alert('Invalid email Please include "@" & "."in your Email')
    // }

    // else if (password !== confirmPassword) {
    //   alert('Passwords do not match')
    // } else if (password.length < 8) {
    //   alert('Password should be at least 8 characters long')
    // } else if (password.length > 8) {
    //   alert('Password should not be more than 8 characters long')
    // }
    // else if (password.includes('@', '#', '*', '_') === false) {
    //   alert('Password should include at least one special character( @ # * _)')
//     }

  // }