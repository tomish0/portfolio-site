import React from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderLinks from "./HeaderLinks";
import "../../css/Header.css";

function Header(props) {
  return (
    <header>
      <HeaderTitle />
      <HeaderLinks />
    </header>
  );
}

export default Header;
