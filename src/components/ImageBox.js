import React from "react";
import ImgFull from "../images/image-product-1.jpg";
import leftArrow from "../images/icon-previous.svg";
import rightArrow from "../images/icon-next.svg";

function ImageBox() {
  return (
    <div className=" relative w-full max-w-[445px] max-h-[445px]">
      <div className=" h-10 w-10 flex items-center justify-center rounded-[50%] bg-white absolute left-4 top-1/2">
        <img className=" w-[10px] h-[13px]" src={leftArrow} alt="left-arrow" />
      </div>
      <img src={ImgFull} alt="sneakers-full" />
      <div className=" h-10 w-10 flex items-center justify-center rounded-[50%] bg-white absolute right-4 top-1/2 ">
        <img className="w-[10px] h-[13px]" src={rightArrow} alt="right-arrow" />
      </div>
    </div>
  );
}

export default ImageBox;
