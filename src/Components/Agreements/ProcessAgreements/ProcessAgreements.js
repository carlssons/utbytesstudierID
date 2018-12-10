import React, { Component } from "react";
import "./ProcessAgreements.scss";
import TextSection from '../../TextSection/TextSection.js';
import { getProcessAgreementContent  } from "../../../processAgreementsContent.js";

class ProcessAgreements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const processCentral = getProcessAgreementContent("centralAgreements");
    return (
        <div className="text-process-container">
          {processCentral.processText.map((element, index) => {
            return <TextSection key={index} text={element.text} color="#ff9e7b"/>;
          })}
        </div>
    );
  }
}

export default ProcessAgreements;
