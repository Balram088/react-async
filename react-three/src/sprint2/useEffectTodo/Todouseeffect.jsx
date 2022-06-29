import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const Todouseeffect = () => {
    const [data ,setData] = useState([]);

//get todo
 const getTodos = async() =>{
       try {
        let data= await fetch("https://jsonplaceholder.typicode.com/posts");
        data = await data.json();
        console.log(data);
       } catch (error) {
        console.log(error);
       }
 }
 useEffect(()=>{
    getTodos();
 },[]);

  return (
    <div> 
        todo
    </div>
  )
}
