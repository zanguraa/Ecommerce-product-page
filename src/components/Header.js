import React, { useState } from "react";
import Menu from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
import Basket from "../images/icon-cart.svg";
import Profile from "../images/image-avatar.png";
import ModalCart from "./ModalCart";
import BurgerMenu from "./BurgerMenu";

function Header() {
  const [modal, setModal] = useState(false);
  const [burger, setBurger] = useState(false);

  const openBurgerHandler = () => {
    setBurger(!burger);
  };

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <div>
      <nav className="flex px-6 pb-5 items-center justify-between w-full">
        <div className="flex items-center gap-4 justify-between">
          <img
            className=" md:hidden"
            onClick={() => {
              openBurgerHandler();
            }}
            src={Menu}
            alt="burger-menu"
          />
          <img className="h-[20px]" src={Logo} alt="logo" />
          <ul className="hidden md:flex gap-8">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {burger && <BurgerMenu openBurgerHandler={openBurgerHandler} />}
        {modal && <ModalCart />}
        <div className="flex items-center gap-6 justify-between">
          <img
            onClick={(e) => {
              modalHandler();
            }}
            src={Basket}
            alt="cart"
          />
          <img className=" h-6" src={Profile} alt="avatar-user" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
