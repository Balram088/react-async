import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseEffectWorking = () => {
const [count , setCount ] = useState(0)

console.log(`title changed`)
document.title = `${count} Clicked  times`

 useEffect(
    function callback(){
  
 },[count])
return (
    <div>
       <h1>{count}</h1>
       <button onClick={()=> setCount(count+1) }>click & check Title</button> 
    </div>
  )
}
