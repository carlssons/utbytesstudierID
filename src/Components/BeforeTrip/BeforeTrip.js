import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import "./BeforeTrip.scss";
import { getCoverContent } from "../../coverContent";
import { getBeforeTripContent } from "../../beforeTripContent";
import TextSection from "../TextSection/TextSection";

class BeforeTrip extends Component {
  render() {
    const coverContent = getCoverContent("beforeTripCover");
    const BeforeTripContent = getBeforeTripContent("beforeTripText");

    return (
      <div>
        <Cover content={coverContent.cover} />

        <div className="text-beforeTrip-container">
          {BeforeTripContent.text.map((element, index) => {
            return (
              <TextSection key={index} text={element.text} color="#dbdbdb" />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BeforeTrip;
