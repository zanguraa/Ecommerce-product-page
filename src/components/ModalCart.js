import React from 'react'

function ModalCart() {
  return (
    <div className=' w-[360px] z-10 bg-white absolute left-2 top-20 h-[256px] rounded-[10px] shadow-2xl shadow-slate-400'>
   
        <h2 className='font-bold text-base pt-6 pl-6'>
            Cart
        </h2>
   <hr className='mt-[27px] border-[#E4E9F2]' />
    <div className='flex h-[180px] items-center justify-center'>
    <p className='font-bold text-base text-[#69707D]'>Your cart is empty.</p>
    </div>
    
    </div>
  )
}

export default ModalCart