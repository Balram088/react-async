import React from 'react'
import {  NavLink } from 'react-router-dom'

const links=[
    {
        to:"/",
        title:"Home "
    },
    {
        to:"about",
        title:"About"
    },
    {
        to:"contact",
        title:"Contact "
    },
    {
        to:"users",
        title:" Users"
    },
    // {
    //     to:"users/id",
    //     title:""
    // }
    
]
const activeStyle ={
    color:  "white",
    backgroundColor:"blue",
    textDecoration:"none",
    padding:"15px",
    borderRadius:"5px"
}
const baseStyle={
    color: "black",
    textDecoration:"none",
    padding:"15px"
}
const Navbar = () => {
  return (
    <>
    <div style={{display:"flex",gap:"10%",justifyContent:"center",fontWeight:"600",fontSize:"20px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",marginBottom:"30px",border:"1px solid blue"}}>
       { links.map((e)=>(
    <NavLink
    style={({ isActive }) =>
    (isActive ? activeStyle:baseStyle)
  }
     to={e.to}
      key={e.to}
      >
     {e.title}
    </NavLink>
       
       ) )}
 </div>
 
  </>
);
}

export default Navbar
