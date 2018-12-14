import React from "react";
import "./TextSection.scss";

const TextSection = ({ text }) => {
  return (
    <div className="text-interview-box">
      {text.heading}
      {text.info}
    </div>
  );
};

export default TextSection;
