import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


const UserPage = () => {
  const [data,setData] =useState({});

  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(` https://reqres.in/api/users/${params.id}`)
    .then((res) => res.json())
    .then((res) =>{
     setData(res.data)
    })
 },[]);
console.log("fgasfafa",data);
  return (
    <div>
        <h1>User singal page</h1>
    <h3>User{params.id}</h3>
    <div>
    
      <div>
        <h1>User</h1>
        <h3>Name: {data.first_name}</h3>
        <img width="300px" src={data.avatar} alt={data.id} />
        <div> <Link to="/users">Go Back</Link>  </div>
    </div>
    </div>
    </div>
  )
}

export default UserPage
