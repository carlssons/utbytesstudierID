import React from "react";
import Cover from "../Cover/Cover";
import "./BeforeTrip.scss";
import { getCoverContent } from "../../coverContent";
import { getBeforeTripContent } from "../../beforeTripContent";
import TextSection from "../TextSection/TextSection";
import { animateScroll as scroll } from "react-scroll";

const BeforeTrip = () => {
  scroll.scrollToTop({
    duration: 0
  });

  const coverContent = getCoverContent("beforeTripCover");
  const BeforeTripContent = getBeforeTripContent("beforeTripText");

  return (
    <div className="before-trip">
      <Cover content={coverContent.cover} />

      <div className="text-beforeTrip-container">
        <h2 className="h2-beforeTrip">Checklista</h2>
        {BeforeTripContent.text.map((element, index) => {
          return <TextSection key={index} text={element.text} />;
        })}
      </div>
    </div>
  );
};
export default BeforeTrip;
