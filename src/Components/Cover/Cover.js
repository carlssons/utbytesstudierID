import React, { Component } from "react";
import "./Cover.scss";

class Cover extends Component {
  state = {};
  render() {
    return (
      <div className="cover-text">
        <p id="cover-title">{this.props.content.title}</p>
        <p id="cover-subtitle">{this.props.content.subtitle}</p>
      </div>
    );
  }
}

export default Cover;
