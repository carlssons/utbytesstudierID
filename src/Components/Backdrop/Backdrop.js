import React from "react";
import "./Backdrop.scss";

const Backdrop = ({ toggleDrawer }) => {
  return <div className="backdrop" onClick={e => toggleDrawer(e)} />;
};

export default Backdrop;
