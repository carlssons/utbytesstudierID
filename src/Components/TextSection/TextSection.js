import React, { Component } from "react";
import "./TextSection.scss";

class TextSection extends Component {
  state = {};
  render() {
    return (
        <div className="text-interview-box" style={{color: this.props.color}}>
          {this.props.text.heading}
          {this.props.text.info}
        </div>
    );
  }
}

export default TextSection;
