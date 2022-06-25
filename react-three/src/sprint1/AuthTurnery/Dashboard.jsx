import React from 'react'
import { PostMsg } from '../Post/Post'

const Dasbord= () => {
  return (
    <div>
    <PostMsg
         img="https://avatars.githubusercontent.com/u/93612939?v=4"
         title="Balram Patidar"
         posts={["Hello guys", "Good Morning","Good Afternoon","Good Night"]}
      />
      
    </div>
  )
}

export default Dasbord
