import React, { Component } from "react";
import "./TravelProcess.scss";

class TravelProcess extends Component {
  state = {};
  render() {
    return (
      <div className="travelProcess">
        <img
          id="process-icon"
          src={"./icons/" + this.props.steps.icon}
          alt="processIcon"
        />
        <div className="process-text">
          <p id="process-header">{this.props.steps.processHead}</p>
          <p id="process-info">{this.props.steps.info}</p>
        </div>
      </div>
    );
  }
}

export default TravelProcess;
