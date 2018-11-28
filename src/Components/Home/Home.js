import React, { Component } from "react";
import "./Home.scss";
import HeroSection from "../HeroSection/HeroSection.js";
import HeroQuotes from "../HeroQuotes/HeroQuotes.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          img: "Linus.jpg",
          quote:
            "“Många spännande och intressanta kurser man inte får möjlighet att läsa i Umeå”",
          info: "- Linus Lagerhjelm, Tjeckien"
        },
        {
          img: "Amine.jpg",
          quote:
            "“Många spännande och intressanta kurser man inte får möjlighet att läsa i Umeå”",
          info: "- Hanna Andersson, Singapore"
        },
        {
          img: "Viktor.jpg",
          quote: "“Tiden i Kanada är nog den tid jag växt mest som person”",
          info: "- Viktor Ålund, Winnipeg Kanada"
        },
        {
          img: "Amine.jpg",
          quote:
            "”Att uppleva nya kulturer är så berikande i både erfarenheter och perspektivet man har på livet”",
          info: "- Amine Balta, Seoul Sydkorea"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <HeroSection />
        <div className="quote-container">
          <div className="quote-box">
            {this.state.quotes.map((element, index) => {
              return <HeroQuotes key={index} content={element} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
