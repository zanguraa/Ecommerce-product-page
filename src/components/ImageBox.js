import React from "react";
import ImgFull from "../images/image-product-1.jpg";
import leftArrow from "../images/icon-previous.svg";
import rightArrow from "../images/icon-next.svg";
import product1 from "../images/image-product-1-thumbnail.jpg"
import product2 from "../images/image-product-2-thumbnail.jpg"
import product3 from "../images/image-product-3-thumbnail.jpg"
import product4 from "../images/image-product-4-thumbnail.jpg"


function ImageBox() {
  return (
    <div className=" relative w-full max-w-[445px] flex flex-col gap-8">
      <div className=" h-10 w-10 flex items-center lg:hidden justify-center rounded-[50%] bg-white absolute left-4 top-1/2">
        <img className=" w-[10px] h-[13px] " src={leftArrow} alt="left-arrow" />
      </div>
      <img className=" md:rounded-2xl" src={ImgFull} alt="sneakers-full" />
      <div className=" h-10 w-10 flex lg:hidden items-center justify-center rounded-[50%] bg-white absolute right-4 top-1/2 ">
        <img className="w-[10px] h-[13px] " src={rightArrow} alt="right-arrow" />
      </div>
      <div className=" hidden max-w[445px] lg:flex gap-8">
        <img className=" h-[88px] w-[88px] rounded-xl" src={product1} alt="product1" />
        <img className=" h-[88px] w-[88px] rounded-xl" src={product2} alt="product2" />
        <img className=" h-[88px] w-[88px] rounded-xl" src={product3} alt="product3" />
        <img className=" h-[88px] w-[88px] rounded-xl" src={product4} alt="product4" />
      </div>
    </div>
  );
}

export default ImageBox;
