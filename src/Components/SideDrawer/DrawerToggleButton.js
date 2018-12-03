import React from 'react';
import './DrawerToggleButton.scss';

const DrawerToggleButton = props => {
  const { toggleDrawer } = props

  return (<button className="toggle-button" onClick={e => toggleDrawer(e)}>
    <div className="toggle-button_line"/>
    <div className="toggle-button_line"/>
    <div className="toggle-button_line"/>
  </button>);
}

export default DrawerToggleButton;
