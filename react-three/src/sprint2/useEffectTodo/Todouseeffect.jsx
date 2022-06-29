//use effect pagination and get the Data from server
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const Todouseeffect = () => {
    const [data ,setData] = useState([]);
    const [page , setPage] =useState(1);

//get todo
  
 const getTodos = async(p=1) =>{
       try {
        let data= await fetch(`https://jsonplaceholder.typicode.com/posts?&_page=${p}&_limit=${10}`);
        data = await data.json();
        console.log(data);
        setData(data);
        setPage(p);
       } catch (error) {
        console.log(error);
       }

 }
 useEffect(()=>{
    getTodos(page);
 },[page]);

  return (
    <div> 
      <h1>Todo Featch data from server</h1>
       
        {data.map((data) =>
       
          <div key={data.id} style={{display:"flex",border:"1px red solid", width:"100%"}}>
          <div style={{border:"1px blue solid",width:"50%"}}> <h4>{data.title}</h4></div>
          <div style={{border:"1px green solid",width:"50%"}}><h5>{data.body}</h5></div>
          </div>                  
 
        )}
     
        <div style={{display:"flex",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
        <div> <button onClick={() =>setPage((page)=>page-1)} disabled={page==1}>  Pre  </button></div>
        <div> <p>{page}</p></div>
        <div> <button onClick={() =>setPage((page)=>page+1) } disabled={page==(data.length)}>  Next  </button></div>
        </div>
        </div>
   
  )
}
