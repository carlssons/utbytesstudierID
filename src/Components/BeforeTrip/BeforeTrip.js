import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import "./BeforeTrip.scss";
import { getCoverContent } from "../../coverContent";

class BeforeTrip extends Component {
  render() {
    const coverContent = getCoverContent("beforeTripCover");
    return <Cover content={coverContent.cover} />;
  }
}

export default BeforeTrip;
