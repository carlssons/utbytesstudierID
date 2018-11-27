import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <p className="p-footer">
          Copyright © 2018 Interaktion & Design @ Umeå Universitet.
        </p>
      </footer>
    );
  }
}

export default Footer;
