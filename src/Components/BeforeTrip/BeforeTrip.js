import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import "./BeforeTrip.scss";

class BeforeTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: [
        {
          backgroundImg: "heroImageBeforeTrip",
          title: "INTERVJUER",
          subtitle:
            "ID-studenter har varit på utbytesstudier på flera olika partneruniversitet runt om i världen. Intervjuerna innehåller  allt ifrån tips till praktiska grejer inför resan från några IDare som har varit iväg."
        }
      ],
      coverText: [
        {
          title: "INFÖR RESAN",
          subtitle:
            "Efter att du har blivit nominerad till ett partneruniversitet måste du förbereda dig för att åka. På den här sidan finns det listat olika saker du bör tänka på och ordna innan du åker iväg."
        }
      ]
    };
  }

  render() {
    return (
      <div className="cover-interviews">
        {this.state.cover.map((element, index) => {
          return <Cover key={index} content={element} />;
        })}
      </div>
    );
  }
}

export default BeforeTrip;
