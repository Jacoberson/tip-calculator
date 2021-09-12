import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header role="banner" className="logo">
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
