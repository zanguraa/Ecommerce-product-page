import React from 'react'
import Cart from "../images/icon-cart-white.svg";

function AddCart() {
  return (
    <button className=' w-[327px] bg-[#FF7E1B] hover:bg-[#FFAB6A] shadow-2xl shadow-orange-300 items-center flex justify-center gap-4 h-14  md:mt-0 md:mb-0 rounded-[10px] '>
    <img className='h-4 fill-red-500' src={Cart} alt="cart" />
    <p className=' text-white font-bold text-base'>
        Add to cart
    </p>
    </button>
  )
}

export default AddCart