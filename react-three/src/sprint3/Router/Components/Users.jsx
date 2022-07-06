import React from 'react'
import { Link } from 'react-router-dom'

let ids=[1,2,3,4,5]

export const Users = () => {
  return (
    <div>
        {ids.map((e)=>(
      <h3 key={e}>
      
        <Link to={`/users/${e}`}>User{e}</Link>
        
      </h3>
  
      ))}
   
    </div>
  )
}
