import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import "./Crediting.scss";

class Crediting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: [
        {
          backgroundImg: "heroImageCrediting",
          title: "INTERVJUER",
          subtitle:
            "ID-studenter har varit på utbytesstudier på flera olika partneruniversitet runt om i världen. Intervjuerna innehåller  allt ifrån tips till praktiska grejer inför resan från några IDare som har varit iväg."
        }
      ],
      coverText: [
        {
          title: "TILLGODORÄKNANDE",
          subtitle:
            "De kurser som du läser utomlands behöver tillgodoräknas in i dina studier på ID-programmet. På den här sidan kommer det finnas en lista på kurser som andra har läst vid olika partneruniversitet under deras utlandsstudier. Det kommer även stå vad varje kurs tillgodoräknades som."
        }
      ]
    };
  }
  render() {
    return (
      <div className="cover-crediting">
        {this.state.cover.map((element, index) => {
          return <Cover key={index} content={element} />;
        })}
      </div>
    );
  }
}

export default Crediting;
