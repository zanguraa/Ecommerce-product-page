import React from 'react'
import Minus from "../images/icon-minus.svg"
import Plus from "../images/icon-plus.svg"

function ItemCount() {
  return (
    <div className='flex justify-between items-center'>
    <img src={Minus} alt="minus"/>
    <p className='font-bold text-base'>0</p>
    <img src={Plus} alt="plus"/>
    </div>
  )
}

export default ItemCount