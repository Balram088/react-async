import React from 'react'
import { useState } from 'react';
import { Allpost } from './Allpost';
import { Title } from './Title';



export const PostMsg = (props) => {
  const [likeCount , Setlikecount] = useState(0);
 
  
  

const {
    img="https://image.shutterstock.com/display_pic_with_logo/263289102/1720665448/stock-vector-user-icon-vector-in-trendy-flat-design-1720665448.jpg",
    title="Name",
    posts=[]
  } = props ;


  function handleClick() {
    Setlikecount(likeCount + 1);
  
    // console.log(likeCount);
  }

  return (
    <div>
      <img src={img} width="100px" />
       <Title name={title}/>
       <h4>  All Post</h4>
      {posts.map((post) => (
         <Allpost post={post}/>
      ))}
   
     
    <button onClick={handleClick} ><img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-like-icon-png-image_695362.jpg" width="30px" alt="" /><h3>{likeCount}</h3></button>
    </div>
);

}
