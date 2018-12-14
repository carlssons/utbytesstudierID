import React from "react";
import "./AgreementBox.scss";

const AgreementBox = ({ content }) => {
  return (
    <div className="agreement-box">
      {content.text.heading}
      <div className="text-link-box">
        {content.text.info}
        {content.text.links}
      </div>
    </div>
  );
};

export default AgreementBox;
