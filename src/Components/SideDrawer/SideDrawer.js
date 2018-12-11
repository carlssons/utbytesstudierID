import React, { Component } from "react";
import "./SideDrawer.scss";
import { Link } from "react-router-dom";

class SideDrawer extends Component {
  render() {
    const { toggleDrawer, toggleDropDown } = this.props;

    return (
      <nav className="side-drawer">
        <ul className="main-options">
          <li>
            <Link onClick={e => toggleDrawer(e)} className="nav-link" to="/">
              Hem
            </Link>
          </li>
          <li className="navbar-tags">
            {/*<p href="" onClick={toggleDropDown} className="nav-link">
              Intervjuer
            </p>*/}
            <Link
              onClick={e => toggleDrawer(e)}
              className="nav-link"
              to="/intervjuer"
            >
              Intervjuer
            </Link>
            {/*<ul className="dropdown">
            <li>
              <Link onClick={e => toggleDrawer(e)} className="nav-link" to="/intervjuer">Afrika</Link>
            </li>
            <li>
              <Link onClick={e => toggleDrawer(e)} className="nav-link" to="/intervjuer">Asien</Link>
            </li>
            <li>
              <Link onClick={e => toggleDrawer(e)} className="nav-link" to="/intervjuer">Europa</Link>
            </li>
            <li>
              <Link onClick={e => toggleDrawer(e)} className="nav-link" to="/intervjuer">Nordamerika</Link>
            </li>
            <li>
              <Link onClick={e => toggleDrawer(e)} className="nav-link" to="/intervjuer">Oceanien</Link>
            </li>
  </ul>*/}
          </li>
          <li>
            <Link
              onClick={e => toggleDrawer(e)}
              className="nav-link"
              to="/avtal"
            >
              Avtal
            </Link>
          </li>
          <li>
            <Link
              onClick={e => toggleDrawer(e)}
              className="nav-link"
              to="/inforResa"
            >
              Inför resan
            </Link>
          </li>
          <li>
            <Link
              onClick={e => toggleDrawer(e)}
              className="nav-link"
              to="/tillgodoraknande"
            >
              Tillgodoräknande
            </Link>
          </li>
          <li>
            <Link onClick={e => toggleDrawer(e)} className="nav-link" to="/faq">
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
