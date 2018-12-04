import React from "react";
import { getInterviewContent } from "../../interviewContent";
import ProfileCover from "../ProfileCover/ProfileCover.js";
import InterviewImages from "../InterviewImages/InterviewImages.js";
import TextSection from "../TextSection/TextSection.js";

import "./Interview.scss";

export default class Interview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const interview = getInterviewContent("viktor");
    return (
      <div className="interview">
        <div className="banner-interview">
          <ProfileCover content={interview.profileCover} />
        </div>
        <div className="images-interview">
          <InterviewImages content={interview.images} />
        </div>
        <div className="text-interview-container">
          {interview.interviewText.map((element, index) => {
            return <TextSection key={index} text={element.text} />;
          })}
        </div>
      </div>
    );
  }
}
