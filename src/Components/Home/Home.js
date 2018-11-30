import React, { Component } from "react";
import "./Home.scss";
import HeroSection from "../HeroSection/HeroSection.js";
import HeroQuotes from "../HeroQuotes/HeroQuotes.js";
import InstagramSection from "../InstagramSection/InstagramSection.js";
import TravelProcess from "../TravelProcess/TravelProcess.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          img: "Linus.jpg",
          quote:
            "“Många spännande och intressanta kurser man inte får möjlighet att läsa i Umeå”",
          info: "- Linus Lagerhjelm, Prag Tjeckien"
        },
        {
          img: "Hanna.jpg",
          quote:
            "“Under utlandsstudierna får man många nya kontakter och får prata engelska dagligen vilket är väldigt meriterande”",
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
      ],

      process: [
        {
          icon: "pin.svg",
          processHead: "1. Välj destination",
          info: "Umeå universitet erbjuder utbytesstudier runt om i världen."
        },
        {
          icon: "diploma.svg",
          processHead: "2. Bli nominerad",
          info: "Ansök till Umeå universitet om att bli tilldelad en plats."
        },
        {
          icon: "letter.svg",
          processHead: "3. Bli antagen",
          info:
            "Gör du en ansökan till värduniversitetet för ett slutgiltigt besked."
        },
        {
          icon: "plane.svg",
          processHead: "4. Res",
          info:
            "Förbered dig och fixa allt praktiskt inför resan. Åk iväg och njut!"
        }
      ]
    };
  }

  render() {
    return (
      <div className="home">
        <HeroSection />
        <div className="quote-container">
          <div className="quote-box">
            {this.state.quotes.map((element, index) => {
              return <HeroQuotes key={index} content={element} />;
            })}
          </div>
        </div>

        <div className="process-container">
          <div className="process-wraper">
            <p id="h2-process">PROCESS</p>
            <div className="process-box">
              {this.state.process.map((element, index) => {
                return <TravelProcess key={index} steps={element} />;
              })}
            </div>
          </div>
        </div>

        <div className="instagram-box">
          <InstagramSection />
        </div>
      </div>
    );
  }
}

export default Home;
