import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import "./Agreements.scss";
import { getCoverContent } from "../../coverContent";

class Agreements extends Component {
  render() {
    const coverContent = getCoverContent("agreementsCover");
    return <Cover content={coverContent.cover} />;
  }
}
export default Agreements;
