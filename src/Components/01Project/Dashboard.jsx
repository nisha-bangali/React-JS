import React from 'react'
import './css/login.css'


const Dashboard = () => {
    const userdata = JSON.parse(localStorage.getItem("userdata"));

     function deleteAccount() {
    localStorage.clear();
    alert("Account Deleted");
    window.location.reload();
  }
  return (
    <div className='userDetail'>
       <h1>User Details </h1>
      <h2>name {userdata?.name} </h2>
      <h2>Age {userdata?.age}</h2>
      <h2>Email: {userdata?.email}</h2>
      <h2>Number {userdata?.number}</h2>
      <h2>Address {userdata?.address} </h2>

      <button className="delete"
        onClick={deleteAccount}
      >
        Delete Account
      </button>

    </div>

  )
}

export default Dashboard
