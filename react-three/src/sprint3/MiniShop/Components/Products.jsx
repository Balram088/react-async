import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
 const [data,setData] =useState([]);
  useEffect(() => {
     fetch(` http://localhost:3000/makeup`)
     .then((res) => res.json())
     .then((res) =>{
      setData(res.data)
     })
  },[]);
  return (
    <div >

        {data.map((user)=>(
      <div key={user.id}  style={{display:"inline-block",margin:"30px" }}>
        
        <img width="300px" src={user.imges} alt={user.id} />
        <h2>{user.title}</h2>
        <h3><Link to={`/products/${user.id}`}>Know More..</Link></h3>
        </div>
     
      ))}
  
    </div>
  )
}
