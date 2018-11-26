import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss';



class Navbar extends Component{
  constructor(props){
    super(props);
    this.state = {};

  }

  render(){

      return(
        <nav className="desktopNavigation">
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
          <Link className="navLink" to="/efterResan">Efter resan</Link>
          <Link className="navLink" to="/faq">FAQ</Link>
        </nav>
      );
  }
}
//export default Navbar;
export default Navbar;
