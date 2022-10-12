import React from "react";
import Menu from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
import Basket from "../images/icon-cart.svg";
import Profile from "../images/image-avatar.png";


function Header(props) {
  

  let headerArray = ["Collections", "Men", "Women", "About", "Contact"];

  const newHeaderList = headerArray.map((list, index) => {
    return (
      <li className="" key={index}>
        <button >{list}</button>
      </li>
    );
  });

  return (
    <div className="flex relative flex-col pb-5 md:pb-0 gap-5 px-6 lg:px-0">
      <nav className="flex   items-center justify-between w-full">
        <div className="flex relative items-center gap-4 justify-between">
          <img
            className=" md:hidden"
            onClick={() => {
              props.openBurgerHandler();
            }}
            src={Menu}
            alt="burger-menu"
          />
          <img className="h-[20px]" src={Logo} alt="logo" />
          <ul className="hidden md:flex gap-8">{newHeaderList}</ul>
        </div>

        
        <div className="flex items-center gap-6 justify-between">
          <img
            onClick={(e) => {
              props.modalHandler();
            }}
            src={Basket}
            alt="cart"
          />
          <img
            className=" h-6 hover:border-4 border-solid border-orange-600 rounded-[50%] md:h-14"
            src={Profile}
            alt="avatar-user"
          />
        </div>
      </nav>
      <hr className="hidden md:block" />
    </div>
  );
}

export default Header;
