import React from "react";
import CartItem from "./CartItem";

function ModalCart({ item, setQuantity, count }) {
  return (
    <div className=" w-[360px] z-10 bg-white absolute right-[2%] lg:right-[7%] top-20  h-[256px] rounded-[10px] shadow-2xl shadow-slate-400">
      <h2 className="font-bold text-base pt-6 pl-6">Cart</h2>
      <hr className="mt-[27px] border-[#E4E9F2]" />
      <div className="flex h-[180px] items-center justify-center">
        {item.quantity ? (
          <CartItem item={item} count={count} setQuantity={setQuantity}/>
        ) : (
          <p className="font-bold text-base text-[#69707D]">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
}

export default ModalCart;
