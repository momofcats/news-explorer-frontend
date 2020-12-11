import React from "react";
import './Header.css';
import Nav from '../Nav/Nav';
function Header() {
  return (
    <header className="header">
      <div className="header__logo">NewsExplorer</div>
        <Nav />
    </header>
  );
}

export default Header;
