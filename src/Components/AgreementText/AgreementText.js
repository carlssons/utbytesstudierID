import React from "react";
import "./AgreementText.scss";

const AgreementText = ({ content }) => {
  return (
    <div className="agreement-text">
      <div className="text">
        {content.text.heading}
        {content.text.info}
        {content.text.links}
      </div>
    </div>
  );
};

export default AgreementText;
