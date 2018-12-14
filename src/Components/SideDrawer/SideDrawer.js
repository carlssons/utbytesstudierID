import React from "react";
import "./SideDrawer.scss";
import { NavLink } from "react-router-dom";

const SideDrawer = ({ toggleDrawer, toggleDropDown }) => {
  return (
    <nav className="side-drawer">
      <ul className="main-options">
        <li>
          <NavLink
            exact
            onClick={e => toggleDrawer(e)}
            className="nav-link"
            to="/"
          >
            Hem
          </NavLink>
        </li>
        <li className="navbar-tags">
          {/*<p href="" onClick={toggleDropDown} className="nav-link">
              Intervjuer
            </p>*/}
          <NavLink
            onClick={e => toggleDrawer(e)}
            className="nav-link"
            to="/intervjuer"
          >
            Intervjuer
          </NavLink>
          {/*<ul className="dropdown">
            <li>
              <NavLink onClick={e => toggleDrawer(e)} className="nav-link" to="/intervjuer">Afrika</NavLink>
            </li>
            <li>
              <NavLink onClick={e => toggleDrawer(e)} className="nav-link" to="/intervjuer">Asien</NavLink>
            </li>
            <li>
              <NavLink onClick={e => toggleDrawer(e)} className="nav-link" to="/intervjuer">Europa</NavLink>
            </li>
            <li>
              <NavLink onClick={e => toggleDrawer(e)} className="nav-link" to="/intervjuer">Nordamerika</NavLink>
            </li>
            <li>
              <NavLink onClick={e => toggleDrawer(e)} className="nav-link" to="/intervjuer">Oceanien</NavLink>
            </li>
  </ul>*/}
        </li>
        <li>
          <NavLink
            onClick={e => toggleDrawer(e)}
            className="nav-link"
            to="/avtal"
          >
            Avtal
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={e => toggleDrawer(e)}
            className="nav-link"
            to="/inforResa"
          >
            Inför resan
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={e => toggleDrawer(e)}
            className="nav-link"
            to="/tillgodoraknande"
          >
            Tillgodoräknande
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={e => toggleDrawer(e)}
            className="nav-link"
            to="/faq"
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
