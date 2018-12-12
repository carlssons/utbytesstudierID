import React from "react";
import { getInterviewContent } from "../../interviewContent";
import ProfileCover from "../ProfileCover/ProfileCover";
import InterviewImages from "../InterviewImages/InterviewImages";
import TextSection from "../TextSection/TextSection";
import { animateScroll as scroll } from "react-scroll";

import "./Interview.scss";

export default class Interview extends React.Component {
  componentDidMount = () => {
    scroll.scrollToTop({
      duration: 0
    });
  };

  render() {
    const interview = getInterviewContent(this.props.params.id, "#11120e");
    return (
      <div className="interview">
        <div
          className="banner-interview"
          style={{
            backgroundImage: `url(/images/bannerImages/${
              interview.profileCover.backgroundImg
            }`
          }}
        >
          <ProfileCover content={interview.profileCover} />
        </div>
        <div className="images-interview">
          <InterviewImages content={interview.images} />
        </div>
        <div className="text-interview-container">
          {interview.interviewText.map((element, index) => {
            return <TextSection key={index} text={element.text} color="#11120e"/>;
          })}
        </div>
      </div>
    );
  }
}
