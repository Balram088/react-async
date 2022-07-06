import React from 'react'
import { Link, useParams } from 'react-router-dom';


const UserPage = () => {
  const params = useParams();
  console.log(params);


  return (
    <div>
      <h1>User singal page</h1>
    <h3>User{params.id}</h3>
    <div>
      <Link to="/users">Go Back</Link>
    </div>
    </div>
  )
}

export default UserPage
