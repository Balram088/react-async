import React from 'react'
import Button from './Button'
import { Quantity } from './Quantity'
import LablePrice from './LablePrice'

export const CartItem = ({id , product_name,price,qty}) => {
  return (

    <div style={{display:"flex",gap:"20%",justifyContent:"center",alignItems:"center"}}>
     <div><h3><LablePrice label={product_name} price={price}/> </h3></div>
     <div><h3><Quantity qty={qty}/></h3></div>
    </div>
  )
}
