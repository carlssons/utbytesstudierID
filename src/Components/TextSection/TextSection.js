import React, { Component } from "react";
import "./TextSection.scss";

class TextSection extends Component {
  state = {};
  render() {
    return (
      <div className="text-interview-box">
        {this.props.text.question}
        {this.props.text.answer}
      </div>
    );
  }
}

export default TextSection;
