import React, {Component} from 'react';
//import react-hamburger-menu see github page for more info about this
//component: https://github.com/negomi/react-burger-menu
import { elastic as Menu } from 'react-burger-menu';
import './MobileNavbar.scss';

class MobileNavbar extends Component{
  constructor(props){
    super(props);
    this.state = {};

  }
  showSettings (event) {
    event.preventDefault();
  }

  render(){
    return(
      <Menu customCrossIcon={ false }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="inforResa" className="menu-item" href="/inforResa">Inför resa</a>
        <a id="efterResa" className="menu-item" href="/efterResa">Efter resa</a>
        <a id="intervjuer" className="menu-item" href="/intervjuer">Intervjuer</a>
        <a id="faq" className="menu-item" href="/faq">FAQ</a>
      </Menu>
    );
  }
}
export default MobileNavbar;
