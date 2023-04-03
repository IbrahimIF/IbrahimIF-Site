import { Outlet, Link, useLocation } from "react-router-dom";
import './navbar.css'




const Navbar = () => {

  const location = useLocation();   // this will help recognise which page your in

  function isLinkActive(pathname) {
    if (location.pathname === pathname) {
      return 'active';
    } else {
      return '';
    }
  }

  return (
    <>
      <div className="navbar" id="navbar"> {/*Navigation Bar*/}

        <nav>
          <ul>
            <Link to="/" className={isLinkActive('/')}>Main</Link>
            <Link to="/" className={isLinkActive('/')}>another</Link>
          </ul>
        </nav>

      </div>
      <button
            onClick={() =>
              document.querySelector(".navbar").classList.toggle("visible")
            }
            className="slide-right-button"
          >
            Back
          </button>  

      <Outlet />
    </>
  )
};

export default Navbar;
