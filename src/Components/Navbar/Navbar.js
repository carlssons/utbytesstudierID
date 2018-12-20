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
        <NavLink exact className="navigation-link" to="/">
          Hem
        </NavLink>

        <NavLink className="navigation-link" to="/intervjuer">
          Intervjuer
        </NavLink>

        <NavLink className="navigation-link" to="/avtal">
          Avtal
        </NavLink>
        <NavLink className="navigation-link" to="/inforResa">
          Inför resan
        </NavLink>
        <NavLink className="navigation-link" to="/tillgodoraknande">
          Tillgodoräknande
        </NavLink>
        <NavLink className="navigation-link" to="/faq">
          FAQ
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
