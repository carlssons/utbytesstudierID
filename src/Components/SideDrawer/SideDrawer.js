import React from 'react';
import './SideDrawer.scss';
import {Link} from 'react-router-dom';

const SideDrawer = props =>{

  let drawerClasses ='side-drawer';

  if (props.show){
    drawerClasses = 'side-drawer open';
  }

  return(
    <nav className={drawerClasses}>
      <ul>
         <li><Link className="navLink" to="/">Hem</Link></li>
         <li><Link to="/intervjuer">Intervjuer</Link></li>
         <li><Link className="navLink" to="/avtal">Avtal</Link></li>
         <li><Link className="navLink" to="/efterResan">Efter resan</Link></li>
         <li><Link className="navLink" to="/faq">FAQ</Link></li>
      </ul>
    </nav>
  );

};

export default SideDrawer;
