import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import "./Agreements.scss";

class Agreements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: [
        {
          backgroundImg: "heroImageAgreements",
          title: "INTERVJUER",
          subtitle:
            "ID-studenter har varit på utbytesstudier på flera olika partneruniversitet runt om i världen. Intervjuerna innehåller  allt ifrån tips till praktiska grejer inför resan från några IDare som har varit iväg."
        }
      ],
      coverText: [
        {
          title: "AVTAL",
          subtitle:
            "Det finns olika avtal beroende på vilket land du vill studera i. De olika avtalen finns listade nedan. Det går att söka med hur många olika avtal man vill."
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

export default Agreements;
