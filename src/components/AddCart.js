import React from 'react'
import Cart from "../images/icon-cart-white.svg";

function AddCart() {
  return (
    <div className=' w-[327px] bg-[#FF7E1B] shadow-2xl shadow-orange-300 items-center flex justify-center gap-4 h-14 mt-6 mb-20 rounded-[10px] '>
    <img className='h-4 fill-red-500' src={Cart} alt="cart" />
    <p className=' text-white font-bold text-base'>
        Add to cart
    </p>
    </div>
  )
}

export default AddCart