import React from 'react'
import Minus from "../images/icon-minus.svg"
import Plus from "../images/icon-plus.svg"

function ItemCount() {
  return (
    
    
    <div className='flex w-[327px] md:w-[157px] h-[57px] gap-11 bg-[#F6F8FD] justify-center rounded-[10px] items-center '>
    <img src={Minus} alt="minus"/>
    <p className='font-bold text-base'>0</p>
    <img src={Plus} alt="plus"/>
    </div>
    
    
  )
}

export default ItemCount