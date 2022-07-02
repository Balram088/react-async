import React, { useState } from 'react'

const Counter = () => {
const [count,setCount] = useState(0);

  return (
    <div>
        <h1>count is: {count}</h1>
      <button >+</button>
      <button >-</button>
    </div>
  )
}

export default Counter
