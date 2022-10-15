import React from "react";
import Menu from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
import Basket from "../images/icon-cart.svg";
import Profile from "../images/image-avatar.png";

function Header(props) {
  let headerArray = ["Collections", "Men", "Women", "About", "Contact"];

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
          <ul className="hidden md:flex gap-8">
            {headerArray.map((list, index) => {
              return (
                <li key={index}>
                  <button className="relative after:absolute after:content-[''] after:w-0 after:h-1 after:bg-[#FF7E1B] after:left-0 after:-bottom-9 after:transition-all after:duration-300 hover:after:w-full ">
                    {list}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-6 justify-between">
          <div className="relative ">
            <img
            className="cursor-pointer"
              onClick={(e) => {
                props.modalHandler();
              }}
              src={Basket}
              alt="cart"
            />
            {props.item.quantity > 0 ? (
              <div
                onClick={(e) => {
                  props.modalHandler();
                }}
                className=" cursor-pointer absolute w-5 h-4 top-[-10px] left-1 text-[10px] text-white flex items-end justify-center bg-orange-400 rounded-[50%]"
              >
                {props.item.quantity}
              </div>
            ) : (
              ""
            )}
          </div>

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
