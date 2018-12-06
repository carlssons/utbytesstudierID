import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import "./Agreements.scss";
import { getCoverContent } from "../../coverContent";

class Agreements extends Component {
  render() {
    const coverContent = getCoverContent("agreementsCover");
    return (
      <div className="cover-interviews">
        <Cover content={coverContent.cover} />
      </div>
    );
  }
}
export default Agreements;
