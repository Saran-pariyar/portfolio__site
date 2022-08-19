import "./navbar.css";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  //this will close the navbar when we click only any nav-links
  const hide_menu_onclick = () =>
    showMenu ? setShowMenu(false) : setShowMenu(true);

  return (
    <header className="navbar">
      <div
        className={`ham-icon ${showMenu ? " cross-icon " : ""}`}
        onClick={() => (showMenu ? setShowMenu(false) : setShowMenu(true))}
      >
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </div>
      <ul className={`nav-ul ${showMenu ? "showMenu" : ""}`}>
        <a href="#home" className="nav-links" onClick={hide_menu_onclick}>
          Home
        </a>
        <a href="#about" className="nav-links" onClick={hide_menu_onclick}>
          About
        </a>
        <a href="#project" className="nav-links" onClick={hide_menu_onclick}>
          Projects
        </a>
        <a href="#contact" className="nav-links" onClick={hide_menu_onclick}>
          Contact
        </a>
      </ul>
    </header>
  );
};

export default Navbar;
