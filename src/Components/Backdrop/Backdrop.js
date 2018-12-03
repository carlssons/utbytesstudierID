import React from 'react';
import './Backdrop.scss';

const Backdrop = props => {
  const {toggleDrawer} = props

  return (<div className="backdrop" onClick={e => toggleDrawer(e)}/>)
};

export default Backdrop;
