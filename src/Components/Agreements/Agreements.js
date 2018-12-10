import React, { Component } from "react";
import Cover from "../Cover/Cover.js";
import { getCoverContent } from "../../coverContent";
import "./Agreements.scss";
import TextSection from '../TextSection/TextSection.js';
import { getProcessAgreementContent  } from "../../processAgreementsContent.js";
import $ from "jquery";
class Agreements extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  slideDownProcess = () =>{
    $(".open-button").addClass("no-show");
    $(".content-process").addClass("open");
  }
  slideUpProcess = () =>{
    $(".open-button").removeClass("no-show");
    $(".content-process").removeClass("open");
  }
  

  render() {
    const coverContent = getCoverContent("agreementsCover");
    const processCentral = getProcessAgreementContent("centralAgreements");
    //const processErasmus = getProcessAgreementContent("erasmusAgreements");
    let linkCountries = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/vart-kan-du-aka/";
    let linkDates = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/#info3";
    let linkDemands = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/#info2";
    let linkSelection = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/#info4";
    let linkPoints = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/#info4";
    let linkStatistics ="https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/statistik/";
    let linkOnlineApplication = "https://ioportal.db.umu.se/forms/cent/";
    //let linkErasmusAgreements = "https://ioportal.db.umu.se/avtal/visa_avtal.php";
    //let linkContact = "https://www.umu.se/student/studera-utomlands/utbytesstudier/internationella-kontaktpersoner/";
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
              <li><a href={linkCountries} target="blank_">Centrala-avtal</a></li>
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
            <div className="text-process-container">
              {processCentral.processText.map((element, index) => {
                return <TextSection key={index} text={element.text} color="#ff9e7b"/>;
              })}
            </div>
            <img src="./icons/arrow.svg" className="close-button" onClick={this.slideUpProcess} alt="arrow"/>
        </div>
        </div>

        {/* <div className="info-content">
        <div className="info-top">
          <h2>ERASMUS AVTALEN</h2>
          <p>
          Med Erasmus åker du till partneruniversitet inom Europa. För att se vilka erasmusavtal 
          som tillhandahålls av Umeå univeristet klicka <a href={linkErasmusAgreements} target="blank_">här</a> (Sortera på "Utbytesprogram/Avtal" och "Erasmus"). Erasmusavtalen tillhör olika instututioner 
          på Umeå universitet. ID-studenter kan du åka med avtal som är tecknade med 
          datavetenskapsinstitutionen (CS) och institutionen för tillämpad teknisk fysik (TFE). 
          International Office erhåller också några Erasmusavtal. För att hitta kontaktpersoner till 
          respektive institutionsavtal klicka <a href={linkContact} target="blank_">här</a>.<br/><br/>

          Hittar du ett parteneruniversitet som tillhör en annan istutition som intresserar dig kan 
          du alltid höra av dig till kontaktpersonen för att undersöka möjligheten om via deras avtal. 
          Ingenting är omöjligt, speciellt inte om du planerar att läsa fria kurser under din utbytestermin. 
          Nomeneringen som sker via Erasmus har ingen utsatt deadline. Kontakta ansvarig för de universitet 
          som du vill åka till för att få mer infomation gällande ansökningstider. Ansökningsprocessen kan 
          delas in i tre steg som finns listade nedan.
          </p>
          <div className="link-box">
            <p><b>Länksamling:</b></p>
            <ul>
              <li><a href={linkErasmusAgreements} target="blank_">Erasmus-avtal</a></li>
              <li><a href={linkContact} target="blank_">Kontaktpersoner</a></li>
            </ul>
          </div>
        </div>
        <div className="open-button" onClick={this.slideDownProcess}>
          <p>Ansökningsprocess</p>
          <img src="./icons/arrow.svg" alt="arrow"/>
        </div>
        <div className= "content-process">
            <div className="text-process-container">
              {processErasmus.processText.map((element, index) => {
                return <TextSection key={index} text={element.text} color="#ff9e7b"/>;
              })}
            </div>
            <img src="./icons/arrow.svg" className="close-button" onClick={this.slideUpProcess} alt="arrow"/>
        </div>
        </div>*/}
      </div>

    );
  }
}
export default Agreements;
