import React from "react";
import Minus from "../images/icon-minus.svg";
import Plus from "../images/icon-plus.svg";

function ItemCount({plusHandler, minusHandler, count}) {


  return (
    <div className="flex w-[327px] md:w-[165px] h-[57px] gap-11 bg-[#F6F8FD] justify-between rounded-[10px] items-center px-4 ">
      <img
        className=" cursor-pointer"
        onClick={() => {
          minusHandler();
        }}
        src={Minus}
        alt="minus"
      />
      <p className="font-bold text-base">{count}</p>
      <img
        className=" cursor-pointer"
        onClick={() => {
          plusHandler();
        }}
        src={Plus}
        alt="plus"
      />
    </div>
  );
}

export default ItemCount;
