import React, { Component } from "react";
import "./Home.scss";
import HeroSection from "../HeroSection/HeroSection";
import HeroQuotes from "../HeroQuotes/HeroQuotes";
import InstagramSection from "../InstagramSection/InstagramSection";
import TravelProcess from "../TravelProcess/TravelProcess";
import { animateScroll as scroll } from "react-scroll";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          id: "linus",
          img: "Linus.jpg",
          quote:
            "“Många spännande och intressanta kurser man inte får möjlighet att läsa i Umeå”",
          info: "- Linus Lagerhjelm, Prag Tjeckien"
        },
        {
          id: "lovisa",
          img: "lovisa.jpg",
          quote:
            "“ Min utbytestermin kommer jag alltid att minnas som en av de roligaste, mest lärorika och utmanande perioder i mitt liv.”",
          info: "- Lovisa Carlsson, Singapore"
        },
        {
          id: "viktor",
          img: "Viktor.jpg",
          quote: "“Tiden i Kanada är nog den tid jag växt mest som person”",
          info: "- Viktor Ålund, Winnipeg Kanada"
        },
        {
          id: "amine",
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

  componentDidMount = () => {
    scroll.scrollToTop({
      duration: 0
    });
  };

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
            <p id="h2-process">Process</p>
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
