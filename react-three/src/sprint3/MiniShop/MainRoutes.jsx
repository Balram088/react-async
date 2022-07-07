import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Home } from './Components/Home'
import Navbar from './Navbar'
import { Products } from './Components/Products'
import Product from './Components/Product'


export const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes> 
         <Route path="/" element= {<Home/>}  />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/products" element={<Products />}/>
         <Route path="product/:id" element={<Product/>}/>
         

        </Routes>
    </div>
  )
}
