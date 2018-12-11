import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeroQuotes.scss";

class HeroQuotes extends Component {
  state = {};
  render() {
    return (
      <div className="quotes">
        <img
          className="quote-image"
          src={"./images/" + this.props.content.img}
          alt="quoteImage"
        />
        <div className="quote-text">
          <p id="quote">{this.props.content.quote}</p>
          <p id="quote-info">{this.props.content.info}</p>
          <Link to={"/intervjuer/" + this.props.content.id} id="interview-link">
            Läs intervju
          </Link>
        </div>
      </div>
    );
  }
}

export default HeroQuotes;
