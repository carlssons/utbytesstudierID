import React, { Component } from "react";
import Cover from "../Cover/Cover.js";

import "./Interviews.scss";

class Interviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverText: [
        {
          title: "INTERVJUER",
          subtitle:
            "ID-studenter har varit på utbytesstudier på flera olika partneruniversitet runt om i världen. Intervjuerna innehåller  allt ifrån tips till praktiska grejer inför resan från några IDare som har varit iväg."
        }
      ]
    };
  }

  render() {
    return (
      <div className="cover-interviews">
        {this.state.coverText.map((element, index) => {
          return <Cover key={index} content={element} />;
        })}
      </div>
    );
  }
}

export default Interviews;
