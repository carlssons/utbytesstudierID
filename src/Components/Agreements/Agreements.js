import React, { Component } from "react";
import Cover from "../Cover/Cover";
import { getCoverContent } from "../../coverContent";
import "./Agreements.scss";
import { getAgreementsContent } from "../../AgreementsContent";
import TextSection from "../TextSection/TextSection";
import $ from "jquery";
import AgreementText from "../AgreementText/AgreementText";
import AgreementBox from "../AgreementBox/AgreementBox";
import { animateScroll as scroll } from "react-scroll";

class Agreements extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  slideDownProcess = e => {
    if (e === "first") {
      $("#button-central").addClass("no-show");
      $("#central").addClass("open");
    }
    if (e === "second") {
      $("#button-erasmus").addClass("no-show");
      $("#erasmus").addClass("open");
    }
  };

  slideUpProcess = e => {
    if (e === "first") {
      $("#button-central").removeClass("no-show");
      $("#central").removeClass("open");
    }
    if (e === "second") {
      $("#button-erasmus").removeClass("no-show");
      $("#erasmus").removeClass("open");
    }
  };

  componentDidMount = () => {
    scroll.scrollToTop({
      duration: 0
    });
  };

  render() {
    const centralAgreement = getAgreementsContent("centralAgreements");
    const erasmusAgreement = getAgreementsContent("erasmusAgreements");
    const nordlysAgreement = getAgreementsContent("nordlysAgreements");
    const north2NorthAgreement = getAgreementsContent("north2NorthAgreements");
    const freemoverAgreement = getAgreementsContent("freemoverAgreements");
    const coverContent = getCoverContent("agreementsCover");

    return (
      <div>
        <Cover content={coverContent.cover} />
        <div className="agreements">
          <div className="section-1">
            <AgreementText content={centralAgreement.agreementText} />
            <div
              className=" button arrow-down"
              id="button-central"
              onClick={() => this.slideDownProcess("first")}
            >
              <p>
                <b>Ansökningsprocess</b>
              </p>
              <img src="./icons/arrow.svg" className="arrow" alt="arrow" />
            </div>
            <div className="process-section" id="central">
              {centralAgreement.processText.map((element, index) => {
                return (
                  <TextSection
                    key={index}
                    text={element.text}
                    color="#ff9e7b"
                  />
                );
              })}
              <div className="button arrow-up">
                <a href="#button-central">
                  <img
                    src="./icons/arrow.svg"
                    className="arrow"
                    onClick={() => this.slideUpProcess("first")}
                    alt="arrow"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="section-2">
            <AgreementText content={erasmusAgreement.agreementText} />
            <div
              className="button arrow-down"
              id="button-erasmus"
              onClick={() => this.slideDownProcess("second")}
            >
              <p>
                <b>Ansökningsprocess</b>
              </p>
              <img src="./icons/arrow.svg" className="arrow" alt="arrow" />
            </div>
            <div className="process-section" id="erasmus">
              {erasmusAgreement.processText.map((element, index) => {
                return (
                  <TextSection
                    key={index}
                    text={element.text}
                    color="#ff9e7b"
                  />
                );
              })}
              <div className="button arrow-up">
                <a href="#button-erasmus">
                  <img
                    src="./icons/arrow.svg"
                    className="arrow"
                    onClick={() => this.slideUpProcess("second")}
                    alt="arrow"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="section-3">
            <div className="heading-div">
              <h2>Övriga avtal</h2>
            </div>
            <div className="box-div">
              <AgreementBox content={nordlysAgreement.agreementText} />
              <AgreementBox content={north2NorthAgreement.agreementText} />
              <AgreementBox content={freemoverAgreement.agreementText} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Agreements;
