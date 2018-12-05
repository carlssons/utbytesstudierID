import React, { Component } from "react";
import "./HeroSection.scss";

class HeroSection extends Component {
  state = {};
  render() {
    
    //let imageUrl = require(`../../../public/images/heroImage.jpg`)
    return (
      
      <div className="hero-page" style={{ backgroundImage: `url(/images/heroImage.jpg)` }}>
        <div className="hero-text">
          <h1 id="hero-h1">ID UTBYTESSTUDIER</h1>
          <h2 id="hero-h2">
            Som utbytesstudent spenderar du en termin eller ett läsår vid ett av
            Umeå universitets partneruniversitet runt om i världen. vart vill du
            åka?
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
