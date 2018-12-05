import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import "./Crediting.scss";

class Crediting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: {
        backgroundImg: "heroImageCrediting",
        title: "TILLGODORÄKNANDE",
        subtitle:
          "ID-studenter har varit på utbytesstudier på flera olika partneruniversitet runt om i världen. Intervjuerna innehåller  allt ifrån tips till praktiska grejer inför resan från några IDare som har varit iväg."
      }
    };
  }
  render() {
    return (
      <div>
        <Cover content={this.state.cover} />
      </div>
    );
  }
}

export default Crediting;
