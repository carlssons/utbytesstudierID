import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import InterviewCard from "../InterviewCard/InterviewCard.js";
import "./Interviews.scss";
import {animateScroll as scroll} from 'react-scroll'

class Interviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cover: [
        {
          backgroundImg: "heroImageInterviews",
          title: "INTERVJUER",
          subtitle:
            "ID-studenter har varit på utbytesstudier på flera olika partneruniversitet runt om i världen. Intervjuerna innehåller  allt ifrån tips till praktiska grejer inför resan från några IDare som har varit iväg."
        }
      ],

      interviewCardsAfrica: [
        {
          id: "marc",
          avatar: "marc.jpg",
          title: "Stellenbosch Sydafrika",
          subtitle: "Marc Coquand",
          imgBanner: "marcBanner",
          school: "Stellenbosch university",
          semester: "HT-17",
          link: "/intervjuer"
        }
      ],

      interviewCardsAsia: [
        {
          id: "amine",
          avatar: "amine.jpg",
          title: "Seoul Sydkorea",
          subtitle: "Amine Balta",
          imgBanner: "amineBanner",
          school: "Sogang University",
          semester: "HT-18",
          link: "/intervjuer"
        },
        {
          id: "alfred",
          avatar: "alfred.jpg",
          title: "Macau",
          subtitle: "Alfred Ödling",
          imgBanner:"alfredBanner",
          school:"University of Science and Technology",
          semester:"HT-17",
          link:"/intervjuer"
        },
        {
          id: "charlotte",
          avatar: "charlotte.jpg",
          title: "Seoul Sydkorea",
          subtitle: "Charlotte Ristiniemi",
          imgBanner: "charlotteBanner",
          school: "Hanyang University",
          semester: "HT-17",
          link: "/intervjuer"
        },
        {
          id: "david",
          avatar: "david.jpg",
          title: "Tokyo Japan",
          subtitle: "David Hellman",
          imgBanner: "davidBanner",
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
          imgBanner: "emmaBanner",
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
          imgBanner: "linusBanner",
          school: "Karlsuniversitetet",
          semester: "HT-17",
          link: "/intervjuer"
        },
        {
          id: "magnus",
          avatar: "magnus.jpg",
          title: "München Tyskland",
          subtitle: "Magnus Emanuelsson",
          imgBanner: "magnusBanner",
          school: "Tekniska universitet i München (TUM)",
          semester: "HT-18",
          link: "/intervjuer"
        },
        {
          id: "mans",
          avatar: "mans.jpg",
          title: "Twente Nederländerna",
          subtitle: "Måns Hellgren",
          imgBanner: "mansBanner",
          school: "University of Twente",
          semester: "HT-18",
          link: "/intervjuer"
        },
        {
          id: "matilda",
          avatar: "matilda.jpg",
          title: "Barcelona Spanien",
          subtitle: "Matilda Nilsson",
          imgBanner: "matildaBanner",
          school: "Universitat Politècnica de Catalunya",
          semester: "HT-17",
          link: "/intervjuer"
        },
        {
          id: "oskar",
          avatar: "oskar.jpg",
          title: "Köpenhamn Danmark",
          subtitle: "Oskar Olausson",
          imgBanner: "oskarBanner",
          school: "Technical University of Denmark",
          semester: "HT-18",
          link: "/intervjuer"
        },
        {
          id: "simon",
          avatar: "simon.jpg",
          title: "Köpenhamn Danmark",
          subtitle: "Simon Asp",
          imgBanner: "simonBanner",
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
          imgBanner: "aronBanner",
          school: "Grant MacEwan University",
          semester: "HT-18",
          link: "/intervjuer"
        },
        {
          id: "tonje",
          avatar: "tonje.jpg",
          title: "London Kanada",
          subtitle: "Tonje Lindmark",
          imgBanner: "tonjeBanner",
          school: "Western University",
          semester: "HT-17",
          link: "/intervjuer"
        },
        {
          id: "viktor",
          avatar: "Viktor.jpg",
          title: "Winnipeg Kanada",
          subtitle: "Viktor Åhlund",
          imgBanner: "viktorBanner",
          school: "University of Manitoba Winnipeg",
          semester: "HT-17",
          link: "/intervju"
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
      <div>
        <div className="cover-interviews">
          {this.state.cover.map((element, index) => {
            return <Cover key={index} content={element} />;
          })}
        </div>
        <div className="content">
          <section className="card-section">
            <h2>AFRIKA</h2>
            <div className="card-container">
              {this.state.interviewCardsAfrica.map((element, index) => {
                return <InterviewCard key={index} content={element} />;
              })}
            </div>
          </section>
          <section className="card-section" id="asia">
            <h2>ASIEN</h2>
            <div className="card-container">
              {this.state.interviewCardsAsia.map((element, index) => {
                return <InterviewCard key={index} content={element} />;
              })}
            </div>
          </section>
          <section className="card-section">
          <h2>AUSTRALIEN</h2>
          <div className="card-container">
            {this.state.interviewCardsAustralia.map((element, index) => {
              return <InterviewCard key={index} content={element} />;
            })}
          </div>
          </section>
          <section className="card-section">
          <h2>EUROPA</h2>
            <div className="card-container">
              {this.state.interviewCardsEuropa.map((element, index) => {
                return <InterviewCard key={index} content={element} />;
              })}
            </div>
          </section>
          <section className="card-section">
          <h2>NORDAMERIKA</h2>
            <div className="card-container">
              {this.state.interviewCardsNorthAmerica.map((element, index) => {
                return <InterviewCard key={index} content={element} />;
              })}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Interviews;
