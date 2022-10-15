import React from "react";
import Price from "./Price";
import ItemCount from "./ItemCount";
import AddCart from "./AddCart";

function Description({count, setCount, setQuantity, plusHandler, minusHandler}) {
  return (
    <div className=" flex flex-col md:gap-12 gap-8 p-6 md:p-0 md:pt-14 w-full max-w-[450px] ">
      <h4 className="font-bold text-[#FF7E1B] lg:pb-7 ">SNEAKER COMPANY</h4>
      <h2 className="font-bold text-3xl lg:text-5xl">
        Fall Limited Edition Sneakers
      </h2>
      <span className=" text-[#69707D] text-sm">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </span>
      <Price />
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <ItemCount count={count} plusHandler={plusHandler} minusHandler={minusHandler}/>
        <AddCart count={count} setCount={setCount} setQuantity={setQuantity}/>
      </div>
    </div>
  );
}

export default Description;
