import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Home } from './Components/Home'
import Navbar from './Navbar'
import { Users } from './Components/Users'
import UserPage from './Components/UserPage'
import { PrivateRouter } from './Components/PrivateRouter'
import { Login } from './Components/Login'


export const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes> 
         <Route path="/" element= {<Home/>}  />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>}/>
        
         <Route path="/login" element={<Login/>}></Route>
         {/* <Route path="/logout" element={<Logout/>}></Route> */}
         

         <Route path="/users" element={
            <PrivateRouter>
            <Users/>
          </PrivateRouter>}/>
       
         <Route path="users/:id" element={
         <PrivateRouter>
         <UserPage/>
         </PrivateRouter>}/>
         

        </Routes>
    </div>
  )
}
