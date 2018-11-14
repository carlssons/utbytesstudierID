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
      <nav className="Navigation">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    );
  }
}

export default Navbar;
