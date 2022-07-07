import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


const Product = () => {
  const [data,setData] =useState({});

  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`http://localhost:3000/makeup/${params.id}`)
    .then((res) => res.json())
    .then((res) =>{
     setData(res.data)
    })
 },[]);
console.log(data);
  return (
    <div>
        <h1>User singal page</h1>
    <h3>User{params.id}</h3>
    <div>
    
      <div>
        <h1>User</h1>
        <h3>Name: {data.title}</h3>
        <img width="300px" src={data.images} alt={data.id} />
        <div> <Link to="/products">Go Back</Link>  </div>
    </div>
    </div>
    </div>
  )
}

export default Product
