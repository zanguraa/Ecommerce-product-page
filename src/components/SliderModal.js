import React from "react";
import ImageBox from "./ImageBox";
import IconClose from "../images/icon-close.svg";

import leftArrow from "../images/icon-previous.svg";
import RightArrow from "../images/icon-next.svg";

function SliderModal({ openImgHandler }) {
 

  return (
    <div className="hidden lg:flex absolute  items-center justify-center left-[-40px] top-[-40px] z-20 h-full w-full  bg-black bg-opacity-75 ">
      <div className="relative ">
        <div className="absolute flex items-center justify-center z-50 bg-white rounded-[50%] left-[-20px] top-[35%] h-10 w-10">
          <img className="w-[10px] h-[13px]" src={leftArrow} alt="left-arrow" />
        </div>

        <ImageBox />
        <div className="absolute flex items-center justify-center z-50 bg-white rounded-[50%] right-[-20px] top-[35%] h-10 w-10">
          <img
            className="w-[10px] h-[13px]"
            src={RightArrow}
            alt="right-arrow"
          />
        </div>

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
