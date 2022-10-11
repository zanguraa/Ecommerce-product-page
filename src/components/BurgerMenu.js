import React from 'react'



export default function BurgerMenu(props) {

 


  // const openBurgerHandler = () => {
  //   props.setBurger(!props.burger);
  // };

  return (
    <div className='absolute left-0 top-0  h-full p-6 bg-white z-50 w-3/4'>
    <p className=' w-1' onClick={props.openBurgerHandler}>X</p>
    <ul className='mt-16 flex flex-col gap-5'>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </div>
  )
}
