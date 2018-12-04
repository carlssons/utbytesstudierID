import React, { Component } from "react";
import "./TextSection.scss";

class TextSection extends Component {
  state = {};
  render() {
    return (
      <div className="text-interview-box">
        <p className="interview-question">{this.props.text.question}</p>
        <p className="interview-answer">{this.props.text.answer}</p>
      </div>
    );
  }
}

export default TextSection;
