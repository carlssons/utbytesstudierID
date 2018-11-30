import React, {Component} from 'react';
import './SideDrawer.scss';
import {Link} from 'react-router-dom';

class SideDrawer extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    let drawerClasses = 'side-drawer';

    {/*sets styling classes for SideDrawer*/}
    if (this.props.sideDrawerOpen) {
      drawerClasses = 'side-drawer side-drawer-open';
    }

    let dropdownClasses = 'dropdown';

    {/*sets styling classes for dropdown*/}
    if(this.props.dropdownOpen)
    {
      dropdownClasses = 'dropdown dropdown-open';
    }

    return (<nav className={drawerClasses}>
      <ul>
        <li>
          <Link onClick={this.props.linkClickHandler} className="navLink" to="/">Hem</Link>
        </li>
        <li className="navbar-tags">
          <a onClick={this.props.toggle} className="navLink">Intervjuer</a>
          <ul className={dropdownClasses}>
            <li>
              <Link onClick={this.props.linkClickHandler} className="navLink" to="/intervjuer">Afrika</Link>
            </li>
            <li>
              <Link onClick={this.props.linkClickHandler} className="navLink" to="/intervjuer">Asien</Link>
            </li>
            <li>
              <Link onClick={this.props.linkClickHandler} className="navLink" to="/intervjuer">Europa</Link>
            </li>
            <li>
              <Link onClick={this.props.linkClickHandler} className="navLink" to="/intervjuer">Nordamerika</Link>
            </li>
            <li>
              <Link onClick={this.props.linkClickHandler} className="navLink" to="/intervjuer">Oceanien</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link onClick={this.props.linkClickHandler} className="navLink" to="/avtal">Avtal</Link>
        </li>
        <li>
          <Link onClick={this.props.linkClickHandler} className="navLink" to="/inforResa">Inför resan</Link>
        </li>
        <li>
          <Link onClick={this.props.linkClickHandler} className="navLink" to="/tillgodoraknande">Tillgodoräknande</Link>
        </li>
        <li>
          <Link onClick={this.props.linkClickHandler} className="navLink" to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>);
  }

};

export default SideDrawer;
