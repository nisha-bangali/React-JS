import React from 'react'
import { Navigate, Outlet } from 'react-router'

function PrivateRouter() {
  // console.log(auth);
  // const [auth , setAuth] = useState(false)
   const auth = JSON.parse(localStorage.getItem("auth"))
  
  return (
    <>
      {auth ? <Outlet />: <Navigate to={'/signup'} />
        }
    </>
  )
}

export default PrivateRouter


{/* <Navigate to="/login" /> */}