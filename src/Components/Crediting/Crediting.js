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
          "De kurser som du läser utomlands behöver tillgodoräknas in i dina studier på ID-programmet. På den här sidan finner du en lista på kurser som ID-studenter har läst vid olika partneruniversitet under deras utlandsstudier. Du finner även information om vilka kategorier kurserna har tillgodoräknats i."
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
