import { Routes ,Route } from 'react-router-dom'

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer'
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login'
import { Register } from './components/Register/Register'
import { ProductDetails } from './components/ProductDetails/ProductDetails'
import { ProductAdd } from './components/ProductAdd/ProductAdd'

function App() {

  const [products, setProducts] = useState([])

    useEffect(() => {
      async function getProducts() {
        const res = await fetch('http://localhost:3030/data/products')
        const data = await res.json()
        setProducts(prevState => data)
      }
      getProducts()
   

    }, [])

    return (
        <>
            <div className='site'>
                <Header />

                <main className='site-main'>
                    <Routes>
                        <Route path='/' element={<Home products={products}/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='register' element={<Register/>}></Route>
                        <Route path='/product/details' element={<ProductDetails/>}></Route>
                        <Route path='/product/add' element={<ProductAdd/>}></Route>
                    </Routes>
   
                </main>

                <Footer/>

            </div>





            {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
        </>
    )
}

export default App
