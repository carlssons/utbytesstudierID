import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import "./Crediting.scss";
import { getCoverContent } from "../../coverContent";

class Crediting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const coverContent = getCoverContent("creditingCover");
    return (
      <div>
        <Cover content={coverContent.cover} />
      </div>
    );
  }
}

export default Crediting;
