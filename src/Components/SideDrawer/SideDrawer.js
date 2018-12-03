import React, {Component} from 'react';
import './SideDrawer.scss';
import {Link} from 'react-router-dom';

class SideDrawer extends Component {
  render() {
    const {toggleDrawer, toggleDropDown} = this.props

    return (<nav className="side-drawer">
      <ul className="mainOptions">
        <li>
          <Link onClick={e => toggleDrawer(e)} className="navLink" to="/">Hem</Link>
        </li>
        <li className="navbar-tags">
          <p href="" onClick={toggleDropDown} className="navLink">Intervjuer</p>
          <ul className="dropdown">
            <li>
              <Link onClick={e => toggleDrawer(e)} className="navLink" to="/intervjuer">Afrika</Link>
            </li>
            <li>
              <Link onClick={e => toggleDrawer(e)} className="navLink" to="/intervjuer">Asien</Link>
            </li>
            <li>
              <Link onClick={e => toggleDrawer(e)} className="navLink" to="/intervjuer">Europa</Link>
            </li>
            <li>
              <Link onClick={e => toggleDrawer(e)} className="navLink" to="/intervjuer">Nordamerika</Link>
            </li>
            <li>
              <Link onClick={e => toggleDrawer(e)} className="navLink" to="/intervjuer">Oceanien</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link onClick={e => toggleDrawer(e)} className="navLink" to="/avtal">Avtal</Link>
        </li>
        <li>
          <Link onClick={e => toggleDrawer(e)} className="navLink" to="/inforResa">Inför resan</Link>
        </li>
        <li>
          <Link onClick={e => toggleDrawer(e)} className="navLink" to="/tillgodoraknande">Tillgodoräknande</Link>
        </li>
        <li>
          <Link onClick={e => toggleDrawer(e)} className="navLink" to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>);
  }
};

export default SideDrawer;
