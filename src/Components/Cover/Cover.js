import React, { Component } from "react";
import "./Cover.scss";


class Cover extends Component {
  state = {};
  render() {
    console.log(this.props.content.backgroundImg);
    return (
      <div className="cover" style={{ backgroundImage: `url(/images/${this.props.content.backgroundImg}.jpg`}}>
        <div className="cover-text">
          <p id="cover-title">{this.props.content.title}</p>
          <p id="cover-subtitle">{this.props.content.subtitle}</p>
        </div>
      </div>
    );
  }
}
export default Cover;
