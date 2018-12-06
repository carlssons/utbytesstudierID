import React from "react";
import "./Cover.scss";

export default class Cover extends React.Component {
  render() {
    return (
      <div
        className="cover"
        style={{
          backgroundImage: `url(/images/${this.props.content.backgroundImg}.jpg`
        }}
      >
        <div className="cover-text">
          {this.props.content.title}
          {this.props.content.subtitle}
        </div>
      </div>
    );
  }
}
