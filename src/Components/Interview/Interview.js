import React from "react";
import { getInterviewContent } from "../../interviewContent";
import ProfileCover from "../ProfileCover/ProfileCover";
import InterviewImages from "../InterviewImages/InterviewImages";
import TextSection from "../TextSection/TextSection";
import { animateScroll as scroll } from "react-scroll";
import "./Interview.scss";

const Interview = ({ params }) => {
  scroll.scrollToTop({
    duration: 0
  });

  const interview = getInterviewContent(params.id);
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
        <h2 className="h2-interview">Intervju</h2>
        {interview.interviewText.map((element, index) => {
          return <TextSection key={index} text={element.text} />;
        })}
      </div>
    </div>
  );
};

export default Interview;
