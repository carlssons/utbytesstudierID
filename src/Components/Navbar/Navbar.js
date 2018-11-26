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
          <Link class="navLink" to="/">Hem</Link>
          <Link class="navLink" to="/intervjuer">Intervjuer</Link>
          <Link class="navLink" to="/avtal">Avtal</Link>
          <Link class="navLink" to="/efterResan">Efter resan</Link>
          <Link class="navLink" to="/faq">FAQ</Link>
        </nav>
      );
  }
}
//export default Navbar;
export default Navbar;
