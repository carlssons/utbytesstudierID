import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.js';


const Navbar = props => (

          <nav className="Navbar">
            {/*The mobile menu. Is only displayed on mobile screen*/}
            <DrawerToggleButton click={props.drawerClickHandler}/>

            {/*The desktop menu. Is only displayed screens larger then mobile*/}
            <div className="DesktopMenuOptions">
              <Link className="navLink" to="/">Hem</Link>
                <div className="dropDown">
                  <div className="navLink" id="intervjuerLink">
                    <Link to="/intervjuer">Intervjuer</Link>
                    <img id="arrowDown" src="./icons/arrowDown.svg" alt="arrow"></img>
                  </div>
                  <div id="dropDownContent">
                    <Link to="/">Afrika</Link>
                    <Link to="/">Asien</Link>
                    <Link to="/">Europa</Link>
                    <Link to="/">Nordamerika</Link>
                    <Link to="/">Oceanien</Link>
                  </div>
                </div>
              <Link className="navLink" to="/avtal">Avtal</Link>
              <Link className="navLink" to="/inforResa">Inför resan</Link>
              <Link className="navLink" to="/tillgodoraknande">Tillgodoräknande</Link>
              <Link className="navLink" to="/faq">FAQ</Link>
            </div>
          </nav>
);

//export default Navbar;
export default Navbar;
