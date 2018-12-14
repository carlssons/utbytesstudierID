import React from "react";
import { Link } from "react-router-dom";
import "./InterviewCard.scss";

const InterviewCard = ({ content }) => {
  return (
    <div className="card">
      <div className="card-top">
        <img
          className="card-top-img"
          src={"./images/" + content.avatar}
          alt="profile"
        />
        <div className="card-top-text">
          {content.title}
          {content.subtitle}
        </div>
      </div>
      <div
        className="card-middle"
        style={{
          backgroundImage: `url(/images/bannerImages/${content.imgBanner}.jpg)`
        }}
      />
      <div className="card-bottom">
        {content.school}
        {content.semester}
        <Link to={"/intervjuer/" + content.id} className="button">
          Läs intervju
        </Link>
      </div>
    </div>
  );
};

export default InterviewCard;
