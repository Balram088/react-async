import React from 'react'
import Button from './Button'

export const Quantity = ({
    qty,
    handleInc,
    handleDec
}) => {
  return (
    <div style={{
        display:"flex",
        padding:"1rem"
    }}>
        <Button>-</Button>
          <div>{qty}</div>
          <Button>+</Button>
    </div>
  )
}
