import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import './App.css'

import * as authService from './services/authService.js'
import AuthContext from './contexts/authContext.js'
import * as productService from './services/productService.js'
import Path from './paths.js'

import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import ProductDetails from './components/Product/ProductDetails/ProductDetails.jsx'
import ProductAdd from './components/Product/ProductAdd/ProductAdd.jsx'
import Logout from './components/Logout/Logout.jsx'




function App() {
  const [auth, setAuth] = useState({})
  const navigate = useNavigate()

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password)

    setAuth(result)

    navigate(Path.Home)
  }

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password)
    
    setAuth(result)

    navigate(Path.Home)
  }

  const logoutHandler = async () => {
    setAuth({})
    // navigate(Path.Home)
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken
  }

  return (
    <AuthContext.Provider value={values}>
      <div className='site'>
        <Header />

        <main className='site-main'>
          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.Login} element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/products/:productId' element={<ProductDetails />} />
            <Route path='/product/add' element={<ProductAdd />} />
            <Route path={Path.Logout} element={<Logout/>}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthContext.Provider>
  )
}

export default App
