import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import InterviewCard from "../InterviewCard/InterviewCard.js";

import "./Interviews.scss";

class Interviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverText: [
        {
          title: "INTERVJUER",
          subtitle:
            "ID-studenter har varit på utbytesstudier på flera olika partneruniversitet runt om i världen. Intervjuerna innehåller  allt ifrån tips till praktiska grejer inför resan från några IDare som har varit iväg."
        }
      ],

      interviewCardsAsia: [
        {
          id: "amine",
          avatar: "amine.jpg",
          title: "Seoul Sydkorea",
          subtitle: "Amine Balta",
          imgBanner: "amineCardBanner",
          school: "Sogang University",
          semester: "HT-18",
          link: "/intervjuer"
        },
        {
          id: "alfred",
          avatar: "alfred.jpg",
          title: "Macau",
          subtitle: "Alfred Ödling",
          imgBanner: "alfredCardBanner",
          school: "Macau University of Science and Technology",
          semester: "HT-17",
          link: "/intervjuer"
        },
        {
          id: "charlotte",
          avatar: "charlotte.jpg",
          title: "Seoul Sydkorea",
          subtitle: "Charlotte Ristiniemi",
          imgBanner: "charlotteCardBanner",
          school: "Hanyang University",
          semester: "HT-17",
          link: "/intervjuer"
        },
        {
          id: "david",
          avatar: "david.jpg",
          title: "Tokyo Japan",
          subtitle: "David Hellman",
          imgBanner: "davidCardBanner",
          school: "Metropolitan University",
          semester: "HT-17",
          link: "/intervjuer"
        }
      ],

      interviewCardsAustralia: [
        {
          id: "emma",
          avatar: "emma.jpg",
          title: "Wollongong Australien",
          subtitle: "Emma Fahlman",
          imgBanner: "emmaCardBanner",
          school: "University of Wollongong (UOW)",
          semester: "VT-17",
          link: "/intervjuer"
        }
      ],

      interviewCardsEuropa: [
        {
          id: "linus",
          avatar: "Linus.jpg",
          title: "Prag Tjeckien",
          subtitle: "Linus Lagerhjelm",
          imgBanner: "linusCardBanner",
          school: "Karlsuniversitetet",
          semester: "HT-17",
          link: "/intervjuer"
        },
        {
          id: "magnus",
          avatar: "magnus.jpg",
          title: "München Tyskland",
          subtitle: "Magnus Emanuelsson",
          imgBanner: "magnusCardBanner",
          school: "Tekniska universitet i München (TUM)",
          semester: "HT-18",
          link: "/intervjuer"
        },
        {
          id: "mans",
          avatar: "mans.jpg",
          title: "Twente Nederländerna",
          subtitle: "Måns Hellgren",
          imgBanner: "mansCardBanner",
          school: "University of Twente",
          semester: "HT-18",
          link: "/intervjuer"
        },
        {
          id: "matilda",
          avatar: "matilda.jpg",
          title: "Barcelona Spanien",
          subtitle: "Matilda Nilsson",
          imgBanner: "matildaCardBanner",
          school: "Universitat Politècnica de Catalunya",
          semester: "HT-17",
          link: "/intervjuer"
        },
        {
          id: "oskar",
          avatar: "oskar.jpg",
          title: "Köpenhamn Danmark",
          subtitle: "Oskar Olausson",
          imgBanner: "oskarCardBanner",
          school: "Technical University of Denmark",
          semester: "HT-18",
          link: "/intervjuer"
        },
        {
          id: "simon",
          avatar: "simon.jpg",
          title: "Köpenhamn Danmark",
          subtitle: "Simon Asp",
          imgBanner: "simonCardBanner",
          school: "Köpenhamns Universitet",
          semester: "HT-18",
          link: "/intervjuer"
        }
      ],

      interviewCardsNorthAmerica: [
        {
          id: "aron",
          avatar: "aron.jpg",
          title: "Edmonton Kanada",
          subtitle: "Aron Nisbel",
          imgBanner: "aronCardBanner",
          school: "Grant MacEwan University",
          semester: "HT-18",
          link: "/intervjuer"
        },
        {
          id: "tonje",
          avatar: "tonje.jpg",
          title: "London Kanada",
          subtitle: "Tonje Lindmark",
          imgBanner: "tonjeCardBanner",
          school: "Western University",
          semester: "HT-17",
          link: "/intervjuer"
        },
        {
          id: "viktor",
          avatar: "Viktor.jpg",
          title: "Winnipeg Kanada",
          subtitle: "Viktor Åhlund",
          imgBanner: "viktorCardBanner",
          school: "University of Manitoba Winnipeg",
          semester: "HT-17",
          link: "/intervju"
        }
      ],

      interviewCardsSouthAfrica: [
        {
          id: "marc",
          avatar: "marc.jpg",
          title: "Stellenbosch Sydafrika",
          subtitle: "Marc Coquand",
          imgBanner: "marcCardBanner",
          school: "Stellenbosch university",
          semester: "HT-17",
          link: "/intervjuer"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="cover-interviews">
          {this.state.coverText.map((element, index) => {
            return <Cover key={index} content={element} />;
          })}
        </div>

        <section className="cardSection">
          <h2>Asien</h2>
          <div className="cardContainer">
            {this.state.interviewCardsAsia.map((element, index) => {
              return <InterviewCard key={index} content={element} />;
            })}
          </div>
        </section>
        <section className="cardSection">
          <h2>Australien</h2>
          <div className="cardContainer">
            {this.state.interviewCardsAustralia.map((element, index) => {
              return <InterviewCard key={index} content={element} />;
            })}
          </div>
        </section>
        <section className="cardSection">
          <h2>Europa</h2>
          <div className="cardContainer">
            {this.state.interviewCardsEuropa.map((element, index) => {
              return <InterviewCard key={index} content={element} />;
            })}
          </div>
        </section>
        <section className="cardSection">
          <h2>Nordamerika</h2>
          <div className="cardContainer">
            {this.state.interviewCardsNorthAmerica.map((element, index) => {
              return <InterviewCard key={index} content={element} />;
            })}
          </div>
        </section>
        <section className="cardSection">
          <h2>Sydafrika</h2>
          <div className="cardContainer">
            {this.state.interviewCardsSouthAfrica.map((element, index) => {
              return <InterviewCard key={index} content={element} />;
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default Interviews;
