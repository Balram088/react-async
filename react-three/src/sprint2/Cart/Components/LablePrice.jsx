import React from 'react'
import { Quantity } from './Quantity'

const LablePrice = ({label,price}) => {
  return (
    <div>
      <div style={{display:"flex",gap:"1rem"}}>
        <h2>{label}</h2>
        <h2>{price}₹</h2>
      </div>
    
    </div>
  )
}

export default LablePrice
