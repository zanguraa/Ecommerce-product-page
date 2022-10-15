import React from "react";
import DeleteImg from "../images/icon-delete.svg"

export default function CartItem({item, count, setCount, setQuantity}) {

const deleteHandler = ()=> {
  setQuantity(0);
  
}

  return (
    <div className="flex gap-4 items-center">
      <img
        className=" h-12 w-12rounded-lg"
        src={item.image}
        alt="cartimage"
      />
      <div className="flex flex-col gap-1">
        <span className="text-[#69707D]">{item.title}</span>
        <span className="text-[#69707D]">${item.price}.00 x {item.quantity} <span className="font-bold text-black">${item.quantity * item.price}.00</span></span>
      </div>
      <div>
        <img onClick={()=> deleteHandler()} className="cursor-pointer" src={DeleteImg}alt="delete"/>
      </div>
    </div>
  );
}
