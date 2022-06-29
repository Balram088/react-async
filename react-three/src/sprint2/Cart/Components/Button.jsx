import React from 'react'

const Button = ({
  onClick,
   child,
  disabled
}) => {
  return (
    <div>
      <button styl={{padding:"1rem",border:0,borderWidth:0,fontweight:"bold",backgroundColor:"red"}}
      disabled={disabled}  onClick={onClick} > {child} </button>
    </div>
  )
}

export default Button
