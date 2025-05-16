
import { BrowserRouter, Route, Routes } from 'react-router'
import AboutPage from './Components/01Project/About'
import Header from './Components/01Project/Header'

import HomePage from './Components/01Project/Home'
import Hooks from './Components/Hooks'
import Productdetail from './Components/Productdetail'
import ProductList from './Components/ProductList'
import ContactPage from './Components/01Project/Contact'
import Login from './Components/01Project/Login'
import Signin from './Components/01Project/Signin'
import Footer from './Components/01Project/Footer'
import ServicePage from './Components/01Project/Service'
import Privateroute from './Components/01Project/Privateroute'
import { useState } from 'react'
import Dashboard from './Components/01Project/Dashboard'

function App() {

const [auth , setAuth] = useState(false)
// console.log(auth);

  return (
    <>
      <BrowserRouter>
        <Header setAuth={setAuth}/>
        <Routes>
          <Route element={<Privateroute auth ={auth} />}>
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/service' element={<ServicePage />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/Products/:id' element={<Productdetail />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
          <Route path='/signup' element={<Signin />} />
            <Route path='/login' element={<Login />} />

        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Hooks /> */}
      {/* <HomePage /> */}
      {/* <ProductList /> */}
      {/* <Productdetail/> */}
    </>
  )

}

export default App
