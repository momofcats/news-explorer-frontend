import React from "react";
import './Header.css';
function Header() {
  return (
    <header className="header">
      <div className="header__logo">NewsExplorer</div>
      <div className="header__wrapper">
        <nav className="nav">Menu</nav>
        <button className="header__button">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
