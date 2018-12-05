import React from "react";
import "./ProfileCover.scss";

export default class ProfileCover extends React.Component {
  state = {};
  render() {
    return (
      <div className="profile-cover">
        <img
          className="profile-cover-img"
          src={"../images/" + this.props.content.img}
          alt="profileImage"
        />
        <div className="profile-cover-text">
          <p id="profile-title">{this.props.content.title}</p>
          <p id="profile-subtitle">{this.props.content.subtitle}</p>
        </div>
      </div>
    );
  }
}
