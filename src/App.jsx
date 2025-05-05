
import { BrowserRouter, Route, Routes } from 'react-router'
import AboutPage from './Components/About'
import Header from './Components/Header'

import HomePage from './Components/Home'
import Hooks from './Components/Hooks'
import Productdetail from './Components/Productdetail'
import ProductList from './Components/ProductList'
import ContactPage from './Components/Contact'
import Login from './Components/Login'
import Signin from './Components/Signin'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element= {<HomePage />} />
      <Route path='/about' element= {<AboutPage />} />
      <Route path='/contact' element= {<ContactPage />} />
      <Route path='/login' element= {<Login />} />
      <Route path='/singin' element= {<Signin />} />
    </Routes>
    </BrowserRouter>
     {/* <Hooks /> */}
      {/* <HomePage /> */}
     {/* <ProductList /> */}
     {/* <Productdetail/> */}
    </>
  )

}

export default App
