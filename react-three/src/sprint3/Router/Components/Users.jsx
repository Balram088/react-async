import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'

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


  // const isAuth =false;
  // if (!isAuth){
  //   return <Navigate to="/users"/>
  // }
  return (
    <div >

        {data.map((user)=>(
      <div key={user.id}  style={{display:"inline-block",margin:"30px" }}>
        
        <img width="300px" src={user.avatar} alt={user.id} />
        <h2>{user.first_name}</h2>
        <h3><Link to={`/users/${user.id}`}>Know More..</Link></h3>
        </div>
     
      ))}
  
    </div>
  )
}
