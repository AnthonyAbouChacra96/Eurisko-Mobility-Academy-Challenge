import { React } from "react";
import { NavLink } from "react-router-dom";
//import classes from "./Navbar.module.css";
import Logo from '../../Logo/Logo'
import Navitems from '../NavItems/NavItems'
const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Logo className="img-fluid " />
        <NavLink className="navbar-brand" to="/" exact>
          Movies
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <Navitems />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
 /* <Link className="navbar-brand" to="#">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" to="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Pricing
              </Link>
            </li> */
            /* <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </Link> */
            /* <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" href="#">
                  Action
                </Link>
                <Link className="dropdown-item" href="#">
                  Another action
                </Link>
                <Link className="dropdown-item" href="#">
                  Something else here
                </Link>
              </div> */
            /* </li> */
          /* </ul>
        </div> */
      /* </nav>
    </div> */