import React, { useState } from "react";
import Header from "./components/Header";
import ImageBox from "./components/ImageBox";
import Description from "./components/Description";
import BurgerMenu from "./components/BurgerMenu";
import ModalCart from "./components/ModalCart";
import ImgOfItem from "./images/image-product-1-thumbnail.jpg";
import SliderModal from "./components/SliderModal";


function App() {
  const [burger, setBurger] = useState(false);
  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [count, setCount] = useState(0);
  const [slider, setSlider] = useState(false);

  const openImgHandler = ()=> {
    setSlider(!slider);
  }

 

  const plusHandler = () => {
    setCount(count + 1);
  };

  const minusHandler = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
     
     
    }
  };


  const item = {
    title: "Fall Limited Edition Sneakers",
    image: ImgOfItem,
    quantity: quantity,
    price: 125,
  };

  const openBurgerHandler = () => {
    setBurger(!burger);
    setModal(false);
  };

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <div className=" flex flex-col gap-6 max-w-[1110px] mx-auto pt-7">
    {slider && <SliderModal openImgHandler={openImgHandler} />}
      <Header
      item={item}
        burger={burger}
        modalHandler={modalHandler}
        setBurger={setBurger}
        openBurgerHandler={openBurgerHandler}
      />
      {burger && <BurgerMenu openBurgerHandler={openBurgerHandler} />}
      {modal && <ModalCart item={item} count={count} setCount={setCount} setQuantity={setQuantity} />}

      <div className="flex flex-col lg:flex-row items-center md:gap-3  lg:gap-16 max-w-[1010px] lg:pl-10">
        <ImageBox openImgHandler={openImgHandler} />
        <Description count={count} setCount={setCount} setQuantity={setQuantity} plusHandler={plusHandler} minusHandler={minusHandler}/>
      </div>
    </div>
  );
}

export default App;
