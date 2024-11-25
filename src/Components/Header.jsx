import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import "../index.css";

import logo from "../assets/TekEssence.png";
import contactLogo from "../assets/icons/contact.png";
import hamburger from "/hamburger.svg";
import cross from "/cross.svg";

function Header() {
  const [navbarStyle, showNavbarStyles] = useState(false);

  function toggleNavbar() {
    showNavbarStyles((prev) => !prev);
  }

  const navbarStyles = navbarStyle
    ? { transform: "translateY(0)" }
    : { transform: "translateY(-140%)" };

  return (
    <>
      <header className="horizontal--flex">
        <Link className="header--image" to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <div className="navigations horizontal--flex">
          <Link to="/healthcare">Healthcare</Link>
          <Link to="/it-operations">IT Operations</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/ip-rights">IP Rights</Link>
          <Link to="/about">About</Link>
        </div>

        <Link to="/contact" className="contact">
          <img src={contactLogo} alt="contact" />
        </Link>

        <img
          src={hamburger}
          alt="hamburger"
          className="mobile--navbar--icon"
          onClick={toggleNavbar}
        />
        <div className="mobile--navbar vertical--flex" style={navbarStyles}>
          <Link to="/healthcare" onClick={toggleNavbar}>
            Healthcare
          </Link>
          <Link to="/it-operations" onClick={toggleNavbar}>
            IT Operations
          </Link>
          <Link to="/technology" onClick={toggleNavbar}>
            Technology
          </Link>
          <Link to="/ip-rights" onClick={toggleNavbar}>
            IP Rights
          </Link>
          <Link to="/about" onClick={toggleNavbar}>
            About
          </Link>
          <Link
            to="/contact"
            className="mobile--contact"
            onClick={toggleNavbar}
          >
            Contact
          </Link>
          <Link onClick={toggleNavbar}>
            <img src={cross} alt="cross" className="cross--icon" />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
