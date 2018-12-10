import React from "react";

export const getProcessAgreementContent = id => {
  const centralAgreements = {
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
  

  const content = {
    centralAgreements
  };
  return content[id];
};
