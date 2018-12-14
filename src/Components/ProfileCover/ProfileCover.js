import React from "react";
import "./ProfileCover.scss";

const ProfileCover = ({ content }) => {
  return (
    <div className="profile-cover">
      <img
        className="profile-cover-img"
        src={"../images/" + content.img}
        alt="profileImage"
      />
      <div className="profile-cover-text">
        <p id="profile-title">{content.title}</p>
        <p id="profile-subtitle">{content.subtitle}</p>
      </div>
    </div>
  );
};
export default ProfileCover;
