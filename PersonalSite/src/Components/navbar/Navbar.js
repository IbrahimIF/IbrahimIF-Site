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
            <Link to="/" name="Main" className={isLinkActive("/")}>
              Main
            </Link>
            <br />
            <Link to="/Project" name="Projects" className={isLinkActive("/Project")}>
            Projects
            </Link>
            <br />
            <Link to="/About" name="About" className={isLinkActive("/About")}>
              About
            </Link>
            <br />
            <Link to="/Show" name="Shows"className={isLinkActive("/Show")}>
              Shows
            </Link>
            <br />
            <Link to="/Anime" name="Anime" className={"link " +isLinkActive("/Anime")}>
              Anime
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
