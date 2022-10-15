import React from "react";
import ImageBox from "./ImageBox";
import IconClose from "../images/icon-close.svg";
import leftArrow from "../images/icon-previous.svg";
import RightArrow from "../images/icon-next.svg";

function SliderModal({ openImgHandler }) {
  return (
    <div className="hidden lg:flex absolute  items-center justify-center left-[-40px] top-[-40px] z-20 h-full w-full  bg-black bg-opacity-75 ">
      <div className="relative ">
        <img className="absolute left-2/4 top-2/4" src={leftArrow} alt="left-arrow" />

        <ImageBox />
        <img src={RightArrow} alt="right-arrow" />
        <img
          onClick={openImgHandler}
          className="absolute left-full top-[-50px] cursor-pointer"
          src={IconClose}
          alt="icon-close"
        />
      </div>
    </div>
  );
}

export default SliderModal;
