import React from "react";
import { Link } from "react-router-dom";
import "./HeroQuotes.scss";

const HeroQuotes = ({ content }) => {
  return (
    <div className="quotes">
      <img
        className="quote-image"
        src={"./images/" + content.img}
        alt="quoteImage"
      />
      <div className="quote-text">
        <p id="quote">{content.quote}</p>
        <p id="quote-info">{content.info}</p>
        <Link to={"/intervjuer/" + content.id} id="interview-link">
          Läs intervju
        </Link>
      </div>
    </div>
  );
};

export default HeroQuotes;
