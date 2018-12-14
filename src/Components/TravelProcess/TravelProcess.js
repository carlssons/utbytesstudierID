import React from "react";
import "./TravelProcess.scss";

const TravelProcess = ({ steps }) => {
  return (
    <div className="travelProcess">
      <img id="process-icon" src={"./icons/" + steps.icon} alt="processIcon" />
      <div className="process-text">
        <p id="process-header">{steps.processHead}</p>
        <p id="process-info">{steps.info}</p>
      </div>
    </div>
  );
};

export default TravelProcess;
