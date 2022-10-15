import React, { useState } from "react";
import leftArrow from "../images/icon-previous.svg";
import rightArrow from "../images/icon-next.svg";
import product1 from "../images/image-product-1-thumbnail.jpg";
import product2 from "../images/image-product-2-thumbnail.jpg";
import product3 from "../images/image-product-3-thumbnail.jpg";
import product4 from "../images/image-product-4-thumbnail.jpg";
import productFull1 from "../images/image-product-1.jpg";
import productFull2 from "../images/image-product-2.jpg";
import productFull3 from "../images/image-product-3.jpg";
import productFull4 from "../images/image-product-4.jpg";


function ImageBox({openImgHandler}) {
  let imageArray = [product1, product2, product3, product4];
  let imageFullArray = [productFull1, productFull2, productFull3, productFull4];
  const [selectedImg, setSelectedImg] = useState(0)
  
const NextImgHandler = (index)=> {
  setSelectedImg(selectedImg);
}
 


  return (
    <div className=" relative w-full max-w-[445px] flex flex-col gap-8">
      <div className=" h-10 w-10 flex items-center lg:hidden justify-center rounded-[50%] bg-white absolute left-4 top-1/2">
        <img onClick={NextImgHandler} className=" w-[10px] h-[13px] " src={leftArrow} alt="left-arrow" />
      </div>
      <img onClick={openImgHandler} className="cursor-pointer  md:rounded-2xl" src={imageFullArray[selectedImg]} alt="sneakers-full" />
      <div className=" h-10 w-10 flex lg:hidden items-center justify-center rounded-[50%] bg-white absolute right-4 top-1/2 ">
        <img
          className="w-[10px] h-[13px] "
          src={rightArrow}
          alt="right-arrow"
        />
      </div>
      <div className=" hidden max-w[445px] lg:flex gap-8">
      {imageArray.map((image, index) => {
    return (<img
    onClick={()=> setSelectedImg(index)}
      className={` h-[88px] w-[88px] hover:opacity-70 cursor-pointer ${index === selectedImg ? 'opacity-50  border-orange-500' : ''} border-2  rounded-xl`}
      src={image}
      key={index}
      alt="product1"
    />)})
    
  } 
        
      </div>
      
    </div>
  );
}

export default ImageBox;
