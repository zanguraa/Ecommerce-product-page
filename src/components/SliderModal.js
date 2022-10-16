import React from "react";
import ImageBox from "./ImageBox";
import IconClose from "../images/icon-close.svg";

function SliderModal({ openImgHandler }) {
 
  

  return (
    <div className="hidden lg:flex absolute  items-center justify-center left-0 top-0 z-20 h-full w-full  bg-black bg-opacity-75 ">
      <div className="relative ">
        <ImageBox />
        <img
          onClick={openImgHandler}
          className={`absolute h-5 left-[95%] top-[-50px] cursor-pointer text-slate-900 fill-orange-500 `}
          src={IconClose}
          alt="icon-close"
        />
      </div>
    </div>
  );
}

export default SliderModal;
