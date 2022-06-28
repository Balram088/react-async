import React from 'react'
import { CartItem } from './CartItem'

const  Data = [
  {
    id:1,
    product_name:"Noodles",
    price:30,
    qty:1
  },
  {
    id:2,
    product_name:"Biryani",
    price:90,
    qty:2,
    
  },
  {
    id:3,
    product_name:"Chips",
    price:10,
    qty:3
  }
]

export const CartCantainer = () => {
  return (
    <div>
      { Data.map((item) => (
        <CartItem 
         key={item.id}
         id={item.id}
         product_name={item.product_name}
         price={item.price}
         qty={item.qty}
        />
      ))} 
    </div>
  )
}
