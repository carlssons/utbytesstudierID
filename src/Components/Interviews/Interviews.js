import React from "react";
import Cover from "../Cover/Cover";
import InterviewCard from "../InterviewCard/InterviewCard";
import "./Interviews.scss";
import { animateScroll as scroll } from "react-scroll";
import { getCoverContent } from "../../coverContent";
import { getInterviewCardContent } from "../../interviewCardContent";

const Interviews = () => {
  scroll.scrollToTop({
    duration: 0
  });

  const coverContent = getCoverContent("interviewCover");
  const cardContentAfrica = getInterviewCardContent("interviewCardsAfrica");
  const cardContentAsia = getInterviewCardContent("interviewCardsAsia");
  const cardContentAustralia = getInterviewCardContent(
    "interviewCardsAustralia"
  );
  const cardContentEurope = getInterviewCardContent("interviewCardsEurope");
  const cardContentNorthAmerica = getInterviewCardContent(
    "interviewCardsNorthAmerica"
  );
  return (
    <div>
      <div className="cover-interviews">
        <div className="cover-interviews">
          <Cover content={coverContent.cover} />
        </div>
      </div>
      <div className="content">
        <section className="card-section">
          <h2 className="card-h2">Afrika</h2>
          <div className="card-container">
            {cardContentAfrica.interviewCard.map((element, index) => {
              return <InterviewCard key={index} content={element} />;
            })}
          </div>
        </section>
        <section className="card-section" id="asia">
          <h2 className="card-h2">Asien</h2>
          <div className="card-container">
            {cardContentAsia.interviewCard.map((element, index) => {
              return <InterviewCard key={index} content={element} />;
            })}
          </div>
        </section>
        <section className="card-section">
          <h2 className="card-h2">Australien</h2>
          <div className="card-container">
            {cardContentAustralia.interviewCard.map((element, index) => {
              return <InterviewCard key={index} content={element} />;
            })}
          </div>
        </section>
        <section className="card-section">
          <h2 className="card-h2">Europa</h2>
          <div className="card-container">
            {cardContentEurope.interviewCard.map((element, index) => {
              return <InterviewCard key={index} content={element} />;
            })}
          </div>
        </section>
        <section className="card-section">
          <h2 className="card-h2">Nordamerika</h2>
          <div className="card-container">
            {cardContentNorthAmerica.interviewCard.map((element, index) => {
              return <InterviewCard key={index} content={element} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Interviews;
