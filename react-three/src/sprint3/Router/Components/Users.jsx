import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// let ids=[1,2,3,4,5]


export const Users = () => {
 const [data,setData] =useState([]);
  useEffect(() => {
     fetch(`https://reqres.in/api/users`)
     .then((res) => res.json())
     .then((res) =>{
      setData(res.data)
     })
  },[]);
  return (
    <div>
        {data.map((user)=>(
      <div key={user.id} >
        <h3>{user.first_name}</h3>
        <img width="300px" src={user.avatar} alt={user.id} />
        <br />
        <Link to={`/users/${user.id}`}>More..</Link>
       
        
      </div>
     
      ))}
  
    </div>
  )
}
