import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const Navbar = ({ toggleDrawer }) => {

  return (
    <nav className="Navbar">
      {/* The mobile menu button is only displayed on mobile screen */}
      <DrawerToggleButton toggleDrawer={toggleDrawer} />
      <div className="desktop-menu-options">
        <NavLink exact className="nav-link" to="/">
          Hem
        </NavLink>
        <div className="drop-down">
          <div className="nav-link" id="intervjuerLink">
            <NavLink to="/intervjuer">Intervjuer</NavLink>
          </div>
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
