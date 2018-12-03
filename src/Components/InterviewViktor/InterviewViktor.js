import React, { Component } from "react";
import ProfileCover from "../ProfileCover/ProfileCover.js";
import "./InterviewViktor.scss";

class InterviewViktor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileCover: [
        {
          img: "Viktor.jpg",
          title: "University of Manitoba, Winnipeg i Kanada",
          subtitle: "Viktor Åhlund | HT-17 | Centrala avtalen",
          quote: "“Tiden i Kanada är nog den tid jag växt mest som person”",
          name: "- Viktor Åhlund"
        }
      ]
    };
  }
  render() {
    return (
      <div className="interviewViktor">
        <div className="banner">
          {this.state.profileCover.map((element, index) => {
            return <ProfileCover key={index} content={element} />;
          })}
        </div>
      </div>
    );
  }
}

export default InterviewViktor;
