import React from "react";
import Menu from "../images/icon-menu.svg";

function Header() {
  return (
    <div>
      <nav>
        <img src={Menu} alt="burger-menu"/>

      </nav>
    </div>
  );
}

export default Header;
