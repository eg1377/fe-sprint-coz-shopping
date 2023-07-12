import React from "react";
import "./style.css";
import IconButtonMenu from "./DropdownButton";


function Header() {
  return (
    
    <div className="header">
      <div className="header_title">
        <img className="logo" src="/images/로고.png" alt="Logo" />
        <div className="element">COZ Shopping</div>
      </div>

      <div>
        {/* <img className="MenuButton" src="/images/햄버거 버튼.svg" alt="Logo" /> */}
        <IconButtonMenu/>
        
      </div>
    </div>
  );
}


export default Header;
