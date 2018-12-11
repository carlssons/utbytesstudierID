import React from "react";

export const getAgreementsContent = id => {
  let linkCountries = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/vart-kan-du-aka/";
  let linkDates = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/#info3";
  let linkDemands = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/#info2";
  let linkSelection = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/#info4";
  let linkErasmusAgreements ="https://ioportal.db.umu.se/avtal/visa_avtal.php";
  let linkContact = "https://www.umu.se/student/studera-utomlands/utbytesstudier/internationella-kontaktpersoner/";
  let linkNordlys = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-inom-europa/";
  let linkN2N = "https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-vid-norra-polcirkeln/";
  let linkFreemover = "https://www.umu.se/student/studera-utomlands/ordna-utlandsstudier-pa-egen-hand/";
  
  const centralAgreements = {
    agreementText:
      {
        text:{
          heading: (
            <h2 className="heading">
              CENTRALA AVTALEN
            </h2>
          ),
          info: (
            <p className="info">Alla partneruniversitet som ingår i de centrala avtalen ligger i länder utanför Europa. 
              För att se alla länder och universitet som hör till de centrala avtalen klicka <a className="link" href={linkCountries} target="blank_">här</a>. 
              För att bli nominerad till ett partneruniversitet skickar du in en ansökan till 
              International office vid Umeå universitet. För att se ansökningstiderna gå in under rubriken "ansökan steg för steg", "steg 5", via följande <a className="link" href={linkDates} target="blank_">länk</a> . 
              Det är först efter att du har blivit nominerad av International office som du skickar 
              en ansökan till självaste partneruniversitetet.<br/><br/>
              För att bli tilldelad en plats via de centrala avtalen finns det några krav som måste 
              uppfyllas. Se kraven <a className="link" href={linkDemands} target="blank_">här</a> (under rubriken "Inför ansökan", "Behörighet"). Efter att du har skickat in din ansökan till International 
              office kommer du få ett mejl så fort de har gått igenom alla ansökningar. I mailet 
              kommer det stå om har blivit nominerad eller inte till något av de partneruniversitet 
              som du har sökt. För att se hur urvalsprocessen går till gå in under rubriken "Vad händer om två eller fler studenter får samma poäng?", via följande <a className="link" href={linkSelection} target="blank_">länk</a>. Ansökningsprocessen kan 
              delas in i fyra steg som finns listade nedan.
            </p>
          ),

          links: (
            <div className="link-box">
            <p className="description"><b>Länksamling:</b></p>
            <ul className="list">
              <li className="list-item"><a href={linkCountries} target="blank_">Länder</a></li>
              <li className="list-item"><a href={linkDates} target="blank_">Ansökningstider</a></li>
              <li className="list-item"><a href={linkDemands} target="blank_">Krav</a></li>
              <li className="list-item"><a href={linkSelection} target="blank_">Urval</a></li>
            </ul>
            </div>
            
          ),
          
          
        }
      },
    
    processText:[ 
      {
        text: {

          heading: (
            <p className="info-heading">
              Steg 1
            </p>
          ),
          info: (
            <div className="info-body-text">
              <p>
                Urvalsprocessen för att bli nominerad till ett partneruniversitet baseras på poäng 
                du har samlat på dig under din studietid. För att ha en större chans att bli nominerad 
                behöver du ha så många poäng som möjligt. Ett bra sätt att skaffa poäng på är genom 
                att vara buddy eller buddyleader. KOM IHÅG att du måste ha varit buddy innan den 
                termin du söker om att bli nominerad för att vara säker på att poängen räknas med. 
                Klicka på länken nedan för att se hur du samlar poäng. Gå in på 
                "Din ansökan bedöms enligt ett antal urvalskriterier". 
              </p>
              <a href="https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/#info4" target="blank_" className="info-body-link">
              Poänglista
              </a>
            </div>
          ),
        }
      },
      {
        text: {

          heading: (
            <p className="info-heading">
              Steg 2
            </p>
          ),
          info: (
            <div className="info-body-text">
              <p>
              Nästa steg är att komma på vilket land/länder och universitet du vill åka till. 
              Det kan vara smart att inte enbart välja länder med högt söktryck även om du har 
              mycket poäng om du verkligen vill komma iväg. Välj smart! För att se statistik på 
              vart studenter har åkt föregående år och hur många poäng de har haft för att få 
              platsen klicka på länken nedan. 
              </p>
              <a href="https://www.umu.se/student/studera-utomlands/utbytesstudier/utbytesstudier-utanfor-europa/statistik/" target="blank_" className="info-body-link">
              Statistik
              </a>
            </div>
          ),
        }
      },
      {
        text: {

          heading: (
            <p className="info-heading">
              Steg 3
            </p>
          ),
          info: (
            <div className="info-body-text">
              <p>
              Skicka in ansökan om nominering till International office. Du kan söka till högst 4 
              stycken partneruniversitet. I ansökan ska du ange minst fyra stycken kurser som erbjuds 
              på varje universitet och som du vill läsa. Detta gör du för att International office 
              vill vara säkra på att univeriteten du har sökt till erbjuder kurser som du kan läsa. 
              De kommer även vilja att du motiverar varför du vill åka till de universitet du söker till. 
              Detta ska du göra för att visa att du är seriös med din ansökan. Länken nedan tar dig till 
              ansökan.
              </p>
              <a href="https://ioportal.db.umu.se/forms/cent/" target="blank_" className="info-body-link">
              Webbansökan
              </a>
            </div>
          ),
        }
      },
      {
        text: {

          heading: (
            <p className="info-heading">
              Steg 4
            </p>
          ),
          info: (
            <div className="info-body-text">
              <p>
              När webbansökan är ifylld och inskickad ska du även göra en fysisk ansökan. 
              Skriv ut webbansökan och sätt dit ett foto på dig själv (tips är att sätta in 
              fotot digitalt innan du skriver ut). Glöm inte att skriva under din ansökan 
              och kom ihåg att du även måste få en underskrift av studievägledaren. Lägg 
              ner ansökan i ett kuvert tillsammans med dina gymnasiebtyg eller engelskatest 
              och eventuellt ett buddycertifikat. På kuvertet ska du skriva ”international 
              office outgoing” och lämna in det på Info center innan deadline för ansökan.
              </p>
            </div>
          ),
        }
      }
    ]

  };

  const erasmusAgreements ={
    agreementText:
      {
        text:{
          heading: (
            <h2 className="heading">
              ERASMUS AVTALEN
            </h2>
          ),
          info: (
            <p className="info">Med Erasmus åker du till partneruniversitet inom Europa. För att se vilka erasmusavtal 
              som tillhandahålls av Umeå univeristet klicka <a className="link" href={linkErasmusAgreements} target="blank_">här</a>. Erasmusavtalen tillhör olika instututioner 
              på Umeå universitet. ID-studenter kan du åka med avtal som är tecknade med 
              datavetenskapsinstitutionen (CS) och institutionen för tillämpad teknisk fysik (TFE). 
              International Office erhåller också några Erasmusavtal. För att hitta kontaktpersoner till 
              respektive institutionsavtal klicka <a className="link" href={linkContact} target="blank_">här</a>.<br/><br/>
              Hittar du ett parteneruniversitet som tillhör en annan istutition som intresserar dig 
              kan du alltid höra av dig till kontaktpersonen för att undersöka möjligheten om via 
              deras avtal. Ingenting är omöjligt, speciellt inte om du planerar att läsa fria kurser 
              under din utbytestermin. Nomeneringen som sker via Erasmus har ingen utsatt deadline. 
              Kontakta ansvarig för de universitet som du vill åka till för att få mer infomation 
              gällande ansökningstider. Ansökningsprocessen kan delas in i tre steg som finns listade 
              nedan.
            </p>
          ),

          links: (
            <div className="link-box">
            <p className="description"><b>Länksamling:</b></p>
            <ul className="list">
              <li className="list-item"><a href={linkErasmusAgreements} target="blank_">Länder</a></li>
              <li className="list-item"><a href={linkContact} target="blank_">Kontaktpersoner</a></li>
            </ul>
            </div>
            
          ),
          
          
        }
      },
    processText:[ 
      {
        text: {

          heading: (
            <p className="info-heading">
              Steg 1
            </p>
          ),
          info: (
            <div className="info-body-text">
              <p>
              Hitta ett eller flera universitet som du vill åka till och som har avtal med Umeå universitet.
              </p>
            </div>
          ),
        }
      },
      {
        text: {

          heading: (
            <p className="info-heading">
              Steg 2
            </p>
          ),
          info: (
            <div className="info-body-text">
              <p>
                Kolla upp att partneruniversitet erbjuder kurser som du vill och kan läsa. 
              </p>
            </div>
          ),
        }
      },
      {
        text: {

          heading: (
            <p className="info-heading">
              Steg 3
            </p>
          ),
          info: (
            <div className="info-body-text">
              <p>
                Ta kontakt med ansvarig för institutionsavtalet med det universitet du vill åka till. Skicka ett mejl där du motiverar varför du vill åka till just det partneruniversitet. 
              </p>
            </div>
          ),
        }
      }
    ]
  };

  const nordlysAgreements ={
    agreementText:
      {
        text:{
          heading: (
            <h3 className="heading">
              NORDLYS
            </h3>
          ),
          info: (
            <p className="info">För dig som vill du åka till ett universitet 
              i Norden eller Baltikum. 
            </p>
          ),

          links: (
            <div className="link-box">
            <ul className="list">
              <li className="list-item"><a href={linkNordlys} target="blank_">Nordlys</a></li>
            </ul>
            </div>
          ),
        }
      },
  };
  const north2NorthAgreements ={
    agreementText:
      {
        text:{
          heading: (
            <h3 className="heading">
              NORTH2NORTH 
            </h3>
          ),
          info: (
            <p className="info">För dig som vill åka till ett universitet vid norra polcirkeln. 
              De länder som ingår är nordliga delar av  Island, Färöarna, Grönland, Norge, Danmark, 
              Finland, USA, Kanda och Ryssland. 
            </p>
          ),

          links: (
            <div className="link-box">
            <ul className="list">
              <li className="list-item"><a href={linkN2N} target="blank_">North2North</a></li>
            </ul>
            </div>
          ),
        }
      },
  };
  const freemoverAgreements ={
    agreementText:
      {
        text:{
          heading: (
            <h3 className="heading">
              FREEMOVER
            </h3>
          ),
          info: (
            <p className="info">Du kan även planera din resa på egen hand och inte åka via ett avtal. 
            Gå in på länken för att få tips på hur du kan gå tillväga.
            </p>
          ),

          links: (
            <div className="link-box">
            <ul className="list">
              <li className="list-item"><a href={linkFreemover} target="blank_">Freemover</a></li>
            </ul>
            </div>
          ),
        }
      },
  };
  
  const content = {
    centralAgreements,
    erasmusAgreements,
    nordlysAgreements,
    north2NorthAgreements, 
    freemoverAgreements
  };
  return content[id];
};
