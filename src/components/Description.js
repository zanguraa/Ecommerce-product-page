import React from "react";
import Price from "./Price";
import ItemCount from "./ItemCount";
import AddCart from "./AddCart";

function Description() {
  return (
    <div className="p-6 w-full max-w-[445px]">
      <h4 className="font-bold text-[#FF7E1B]">SNEAKER COMPANY</h4>
      <h2 className="font-bold text-3xl">Fall Limited Edition Sneakers</h2>
      <span className=" text-[#69707D] text-sm">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </span>
      <Price />
      <ItemCount />
      <AddCart />
    </div>
  );
}

export default Description;
