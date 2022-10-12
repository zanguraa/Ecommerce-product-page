import React from 'react'



export default function BurgerMenu(props) {

  let headerArray = ["Collections", "Men", "Women", "About", "Contact"];

  const listArr = headerArray.map((list, index)=> {
    return (
      <li key={index}>
        <button className=' font-bold text-lg'>{list}</button>
      </li>
    )
  })

  return (
    <div className='absolute left-0 top-0 flex h-full w-full z-50 '>
    <div className='p-6 h-full bg-white w-3/4'>
    <p className=' w-1' onClick={props.openBurgerHandler}>X</p>
    <ul className='mt-16 flex flex-col gap-5'>
        {listArr}
    </ul>
    </div>
    <div className='h-full  bg-black w-1/4 opacity-75'></div>
    </div>
  )
}
