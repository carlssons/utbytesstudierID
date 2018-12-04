import React, { Component } from "react";
import "./Cover.scss";

class Cover extends Component {
  state = {};
  render() {
    let imageUrl = require(`../../images/${this.props.content.backgroundImg}.jpg`)
    return (
      <div className="cover" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="cover-text">
          <p id="cover-title">{this.props.content.title}</p>
          <p id="cover-subtitle">{this.props.content.subtitle}</p>
        </div>
      </div>
    );
  }
}
export default Cover;
