import React, { Component } from "react";
import "./Home.scss";
import HeroSection from "../HeroSection/HeroSection.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

        <HeroSection />
      
    );
  }
}

export default Home;
