import React from "react";

function Price() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-6">
        <h2 className="font-bold text-3xl">$125.00</h2>
        <div className="font-bold text-base text-center bg-[#FFEEE2] h-[27px] w-[51px] rounded-md text-[#FF7E1B]">50%</div>
      </div>

      <p className="text-[#B6BCC8] line-through text-base font-bold">$250.00</p>
    </div>
  );
}

export default Price;
