import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Timer = () => {
const [count,setCount] = useState();
const TimerRef =useRef(null);
useEffect(() =>{
   //cleanup
    return stopTimer;
},[]);

const startTimer = () => {
    if (timerRef , )
}




  return (
    <div>
        <h1>{count}</h1>
      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>

    </div>
  )
}

export default Timer
