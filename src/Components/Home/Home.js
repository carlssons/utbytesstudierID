import React, { Component } from "react";
import "./Home.scss";
import HeroSection from "../HeroSection/HeroSection.js";
import InstagramSection from "../InstagramSection/InstagramSection.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <HeroSection />
        <div className="instagram-box">
          <InstagramSection/>
        </div>
      </div>
    );
  }
}

export default Home;
