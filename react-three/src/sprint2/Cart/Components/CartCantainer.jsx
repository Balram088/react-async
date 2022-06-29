import React from 'react'
import { useState } from 'react'
import { CartItem } from './CartItem'
import { Total } from './Total'

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
function calculateTotal(products){
  return products.reduce((acc,current) =>acc + ( current.qty * current.price),0)
}
export const CartCantainer = () => {
  const [data, setData] = useState(Data)
return (
    <>
      { data.map(item => 
        <CartItem 
         key={item.id}
         id={item.id}
         product_name={item.product_name}
         price={item.price}
         qty={item.qty}
        />
      )} 
        {/* <Total total={calculateTotal(data)} /> */}
  </>
  )
}
