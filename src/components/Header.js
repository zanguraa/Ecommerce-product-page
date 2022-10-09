import React from "react";
import Menu from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
import Basket from "../images/icon-cart.svg";
import Profile from "../images/image-avatar.png";

function Header() {
  return (
    <div>
      <nav className="flex px-6 py-5 items-center justify-between w-full">
        <div className="flex items-center gap-4 justify-between">
          <img src={Menu} alt="burger-menu" />
          <img className="h-[20px]" src={Logo} alt="logo" />
        </div>

        <div className="flex items-center gap-6 justify-between">
          <img src={Basket} alt="cart" />
          <img className=" h-6" src={Profile} alt="avatar-user" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
