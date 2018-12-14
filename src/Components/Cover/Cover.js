import React from "react";
import "./Cover.scss";

const Cover = ({ content }) => {
  return (
    <div
      className="cover"
      style={{
        backgroundImage: `url(/images/${content.backgroundImg}.jpg`
      }}
    >
      <div className="cover-text">
        {content.title}
        {content.subtitle}
      </div>
    </div>
  );
};
export default Cover;
