import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./InterviewCard.scss";

class InterviewCard extends Component {
  state = {};

  render() {
    return (
      <div className="card">
        <div className="card-top">
          <img
            className="card-top-img"
            src={"./images/" + this.props.content.avatar}
            alt="profile"
          />
          <div className="card-top-text">
            {this.props.content.title}
            {this.props.content.subtitle}
          </div>
        </div>
        <div
          className="card-middle"
          style={{
            backgroundImage: `url(/images/bannerImages/${
              this.props.content.imgBanner
            }.jpg)`
          }}
        />
        <div className="card-bottom">
          {this.props.content.school}
          {this.props.content.semester}
          <Link to={"/intervjuer/" + this.props.content.id} className="button">
            Läs intervju
          </Link>
        </div>
      </div>
    );
  }
}

export default InterviewCard;
