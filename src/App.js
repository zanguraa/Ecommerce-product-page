import React, { useState } from "react";
import Header from "./components/Header";
import ImageBox from "./components/ImageBox";
import Description from "./components/Description";
import BurgerMenu from "./components/BurgerMenu";
import ModalCart from "./components/ModalCart";

function App() {
  const [burger, setBurger] = useState(false);
  const [modal, setModal] = useState(false);

  const openBurgerHandler = () => {
    setBurger(!burger);
    setModal(false)
  };

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <div className="App flex flex-col gap-6 max-w-[1110px] mx-auto pt-7">
      <Header burger={burger} modalHandler={modalHandler} setBurger={setBurger} openBurgerHandler={openBurgerHandler}/>
      {burger && <BurgerMenu openBurgerHandler={openBurgerHandler} />}
      {modal && <ModalCart />}

      <div className="flex flex-col lg:flex-row items-center md:gap-3  lg:gap-16 max-w-[1010px] lg:pl-10">
        <ImageBox />
        <Description />
      </div>
    </div>
  );
}

export default App;
