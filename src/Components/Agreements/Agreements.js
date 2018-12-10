import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import { getCoverContent } from "../../coverContent";
import "./Agreements.scss";
import ProcessAgreements from "./ProcessAgreements/ProcessAgreements.js";
import $ from "jquery";
class Agreements extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  /*toggleProcess = () => {
    this.setState(
      prevState => ({
        buttonToggled: !prevState.buttonToggled
      }),
      () => {
        const { buttonToggled } = this.state;
        if (buttonToggled) {
          $(".content-process").addClass("open");
          $(".open-button").addClass("no-show");
        } else {
          $(".content-process").removeClass("open");
          $(".open-button").removeClass("no-show");
        }
      }
    );
  };*/

  slideDownProcess = () =>{
    $(".open-button").addClass("no-show");
    //$(".content-process").slideDown(100);
    $(".content-process").addClass("open");
  }
  slideUpProcess = () =>{
    $(".open-button").removeClass("no-show");
    $(".content-process").removeClass("open");
    //$(".content-process").slideUp(100);
    //$(".content-process").addClass("open");
  }

  render() {
    const coverContent = getCoverContent("agreementsCover");
    let linkCountries = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/vart-kan-du-aka/";
    let linkDates = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/#info3";
    let linkDemands = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/#info2";
    let linkSelection = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/#info4";
    let linkPoints = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/#info4";
    let linkStatistics ="https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/statistik/";
    let linkOnlineApplication = "https://ioportal.db.umu.se/forms/cent/";
    return (
      <div className="agreements">
        <Cover content={coverContent.cover} />
        <div className="info-content">
        <div className="info-top">
          <h2>CENTRALA AVTALEN</h2>
          <p>Alla partneruniversitet som ingår i de centrala avtalen ligger i länder utanför Europa. 
            För att se alla länder och universitet som hör till de centrala avtalen klicka <a href={linkCountries} target="blank_">här</a>. 
            För att bli nominerad till ett partneruniversitet skickar du in en ansökan till 
            International office vid Umeå universitet. För att se ansökningstiderna klicka <a href={linkDates} target="blank_">här</a> (under rubriken "ansökan steg för steg", "steg 5"). 
            Det är först efter att du har blivit nominerad av International office som du skickar 
            en ansökan till självaste partneruniversitetet.<br/><br/>
            För att bli tilldelad en plats via de centrala avtalen finns det några krav som måste 
            uppfyllas. Se kraven <a href={linkDemands} target="blank_">här</a> (under rubriken "Inför ansökan", "Behörighet"). Efter att du har skickat in din ansökan till International 
            office kommer du få ett mejl så fort de har gått igenom alla ansökningar. I mailet 
            kommer det stå om har blivit nominerad eller inte till något av de partneruniversitet 
            som du har sökt. Hur urvalsprocessen går till kan du se <a href={linkSelection} target="blank_">här</a> (under rubriken "Vad händer om två eller fler studenter får samma poäng?"). Ansökningsprocessen kan 
            delas in i fyra steg som finns listade nedan.
          </p>
          <div className="link-box">
          <p><b>Länksamling:</b></p>
            <ul>
              <li><a href={linkCountries} target="blank_">Länder</a></li>
              <li><a href={linkDates} target="blank_">Ansökningstider</a></li>
              <li><a href={linkDemands} target="blank_">Krav</a></li>
              <li><a href={linkSelection} target="blank_">Urval</a></li>
              <li><a href={linkPoints} target="blank_">Poänglista</a></li>
              <li><a href={linkStatistics} target="blank_">Statistik</a></li>
              <li><a href={linkOnlineApplication} target="blank_">Webbansökan</a></li>
            </ul>
          </div>
        </div>
        <div className="open-button" onClick={this.slideDownProcess}>
          <p>Ansökningsprocess</p>
          <img src="./icons/arrow.svg" alt="arrow"/>
        </div>
        <div className= "content-process">
            <ProcessAgreements/>
            <img src="./icons/arrow.svg" className="close-button" onClick={this.slideUpProcess} alt="arrow"/>
        </div>
        </div>
      </div>

    );
  }
}
export default Agreements;
