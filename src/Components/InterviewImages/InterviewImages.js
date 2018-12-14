import React from "react";
import "./InterviewImages.scss";

const InterviewImages = ({ content }) => {
  return (
    <div className="interview-images">
      <img
        className="image-1"
        src={"/images/interview-images/" + content.img1}
        alt="interviewImage"
      />

      <div className="image-box-right">
        <img
          className="image-2"
          src={"/images/interview-images/" + content.img2}
          alt="interviewImage"
        />
        <img
          className="image-3"
          src={"/images/interview-images/" + content.img3}
          alt="interviewImage"
        />
      </div>
    </div>
  );
};

export default InterviewImages;
