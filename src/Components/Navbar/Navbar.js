import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton.js";

class Navbar extends React.Component {
  state = {}

  render(){
    const { toggleDrawer } = this.props;
    let arrowIcon="/icons/arrowDown.svg";

    return (
    <nav className="Navbar">
      {/* The mobile menu. Is only displayed on mobile screen */}
      <DrawerToggleButton
        toggleDrawer={toggleDrawer}
      />{" "}
      {/* The desktop menu. Is only displayed screens larger then mobile */}
      <div className="desktop-menu-options">
        <Link className="nav-link" to="/">
          Hem
        </Link>
        <div className="drop-down">
          <div className="nav-link" id="intervjuerLink">
            <Link to="/intervjuer">Intervjuer</Link>
            <img id="arrow-down" src={arrowIcon} alt="arrow" />
          </div>
          <div id="dropDownContent">
            <Link to="/intervjuer">Afrika</Link>
            <Link to="/intervjuer">Asien</Link>
            <Link to="/intervjuer">Europa</Link>
            <Link to="/intervjuer">Nordamerika</Link>
            <Link to="/intervjuer">Oceanien</Link>
          </div>
        </div>
        <Link className="nav-link" to="/avtal">
          Avtal
        </Link>
        <Link className="nav-link" to="/inforResa">
          Inför resan
        </Link>
        <Link className="nav-link" to="/tillgodoraknande">
          Tillgodoräknande
        </Link>
        <Link className="nav-link" to="/faq">
          FAQ
        </Link>
      </div>
    </nav>
  );
  }
};

//export default Navbar;
export default Navbar;
