import { useContext, useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import ThemeContext from "../Contexts/ThemeContext";

import "./navbar.css";
import "../../Stylesheets/index.css";
import "../../Stylesheets/Darkmode.css";
import "../../Stylesheets/visible.css";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode, isLeftMode, setIsLeftMode} = useContext(ThemeContext);
  const location = useLocation(); // this will help recognise which page your in

  function isLinkActive(pathname) {
    if (location.pathname === pathname) {
      return "active";
    } else {
      return "";
    }
  }

  return (
    <>
      <div className="navbar" id="navbar">
        {" "}
        {/*Navigation Bar*/}
        <nav>
          <ul>
            <Link to="/" className={isLinkActive("/")}>
              Main
            </Link>
            <Link to="/show" className={isLinkActive("/show")}>
              shows
            </Link>
          </ul>
        </nav>
      </div>
      <button
        onClick={() => {
          setIsLeftMode(!isLeftMode);
        }}
        className="navbutton"
      >
        <div className="button-line"></div>
        <div className="button-line"></div>
        <div className="button-line"></div>
      </button>

      <button
        onClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
        className="dark-button"
      >
        {isDarkMode ? "Light" : "Dark"}
      </button>

      <Outlet />
    </>
  );
};

export default Navbar;
