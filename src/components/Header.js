import React from "react";
import DropdownButton from "./DropdownButton";

function Header() {
  return (
    <div className="header">
      <div className="header_title">
        <img className="logo" src="/images/로고.png" alt="Logo" />
        <div className="element">COZ Shopping</div>
      </div>

      <div className="MenuButton">
        <DropdownButton/>
      </div>
    </div>
  );
}

export default Header;
