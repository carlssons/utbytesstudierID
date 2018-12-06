import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import "./BeforeTrip.scss";
import { getCoverContent } from "../../coverContent";

class BeforeTrip extends Component {
  render() {
    const coverContent = getCoverContent("beforeTripCover");
    return (
      <div className="cover-interviews">
        <Cover content={coverContent.cover} />
      </div>
    );
  }
}

export default BeforeTrip;
