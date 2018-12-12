import React, { Component } from "react";
import "./HeroSection.scss";

class HeroSection extends Component {
  state = {};
  render() {
    return (
      
      <div className="hero-page" style={{ backgroundImage: `url(/images/heroImage.jpg)` }}>
        <div className="hero-text">
          <h1 id="hero-h1">ID UTBYTESSTUDIER</h1>
          <h2 id="hero-h2">
          Som student vid Umeå universitet har du möjlighet att spendera en eller flera terminer vid ett 
          partneruniversitet. Det finns många universitet att välja på, i olika dela av världen. Vart vill du åka?
          </h2>
        </div>
        <form
          id="hero-form"
          action="https://ioportal.db.umu.se/avtal/visa_avtal.php"
          target="blank_"
        >
          <button id="hero-button" type="submit">
            Destinationer
          </button>
        </form>
      </div>
    );
  }
}

export default HeroSection;
