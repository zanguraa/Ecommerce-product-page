import React from "react";
import DeleteImg from "../images/icon-delete.svg"

export default function CartItem(props) {
  return (
    <div className="flex gap-4 items-center">
      <img
        className=" h-12 w-12rounded-lg"
        src={props.item.image}
        alt="cartimage"
      />
      <div className="flex flex-col gap-1">
        <span className="text-[#69707D]">{props.item.title}</span>
        <span className="text-[#69707D]">${props.item.price}.00 x {props.quantity} <span className="font-bold text-black">${props.item.quantity * props.item.price}.00</span></span>
      </div>
      <div>
        <img className="cursor-pointer" src={DeleteImg}alt="delete"/>
      </div>
    </div>
  );
}
