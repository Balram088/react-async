import React from 'react'
import { useState } from 'react'

export const SecoundTodo = () => {
const [text , setText] = useState("");

const handleChange = (e) =>{
    setText(e.target.value);
    
}
  return (
    <div>
        <div className='input'>
            <input type="text"
            value={text}
             placeholder='Enter Somthing'
             onChange={handleChange}
             />
             <button >Add</button>
             
        </div>
    </div>
  )
}
