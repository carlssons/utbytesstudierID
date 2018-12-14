import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const Navbar = ({ toggleDrawer }) => {
  //let arrowIcon = "/icons/arrowDown.svg";

  return (
    <nav className="Navbar">
      {/* The mobile menu. Is only displayed on mobile screen */}
      <DrawerToggleButton toggleDrawer={toggleDrawer} />
      {/* The desktop menu. Is only displayed screens larger then mobile */}
      <div className="desktop-menu-options">
        <NavLink exact className="nav-link" to="/">
          Hem
        </NavLink>
        <div className="drop-down">
          <div className="nav-link" id="intervjuerLink">
            <NavLink to="/intervjuer">Intervjuer</NavLink>
            {/*<img id="arrow-down" src={arrowIcon} alt="arrow" />*/}
          </div>
          {/*<div id="dropDownContent">
            <NavLink to="/intervjuer">Afrika</NavLink>
            <NavLink to="/intervjuer">Asien</NavLink>
            <NavLink to="/intervjuer">Europa</NavLink>
            <NavLink to="/intervjuer">Nordamerika</NavLink>
            <NavLink to="/intervjuer">Oceanien</NavLink>
          </div>*/}
        </div>
        <NavLink className="nav-link" to="/avtal">
          Avtal
        </NavLink>
        <NavLink className="nav-link" to="/inforResa">
          Inför resan
        </NavLink>
        <NavLink className="nav-link" to="/tillgodoraknande">
          Tillgodoräknande
        </NavLink>
        <NavLink className="nav-link" to="/faq">
          FAQ
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
