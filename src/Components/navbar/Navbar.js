import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import './navbar.css';
import '../../Stylesheets/index.css';
import '../../Stylesheets/Darkmode.css';
import '../../Stylesheets/visible.css';






const Navbar = () => {

  const location = useLocation();   // this will help recognise which page your in

  function isLinkActive(pathname) {
    if (location.pathname === pathname) {
      return 'active';
    } else {
      return '';
    }
  }

  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <>
      <div className="navbar" id="navbar"> {/*Navigation Bar*/}

        <nav>
          <ul>
            <Link to="/" className={isLinkActive('/')}>Main</Link>
            <Link to="/another" className={isLinkActive('/another')}>another</Link>
          </ul>
        </nav>

      </div>
      <button
            onClick={() =>{
              document.querySelector(".navbar").classList.toggle("visible");
              document.querySelector(".navbutton").classList.toggle("visible");
              document.querySelector(".dark-button").classList.toggle("visible");
              document.querySelector(".container").classList.toggle("visible");
            }}
            className="navbutton"
          >
              <div className="button-line"></div>
  <div className="button-line"></div>
  <div className="button-line"></div>
          </button>  

          <button
            onClick={() =>{
              document.body.classList.toggle("dark-mode");
            }}
            className="dark-button"
          >
            dark
          </button>  

      <Outlet />
    </>
  )
};

export default Navbar;
