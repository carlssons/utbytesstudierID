import React, { Component } from "react";
import Cover from "../Cover/Cover";
import { getCoverContent } from "../../coverContent";
import "./FAQ.scss";
import { animateScroll as scroll } from "react-scroll";

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faq: [
        {
          question: (
            <h4 className="h4-question">
              När är sista dagen för att samla poäng till de centerala avtalen?
            </h4>
          ),
          answer: (
            <p className="p-answer">Samma dag som deadline är för ansökan.</p>
          )
        },
        {
          question: (
            <h4 className="h4-question">
              Varför får man inte skicka in ett betygsutdrag från antagning.se?
            </h4>
          ),
          answer: (
            <p className="p-answer">
              För att antagning.se bara finns i Sverige och det måste fungera
              internationellt.
            </p>
          )
        },
        {
          question: (
            <h4 className="h4-question">
              Är det okej att klistra fast fotot på ansökan, eller måste det
              vara en del av dokumentet?
            </h4>
          ),
          answer: (
            <p className="p-answer">Det är okej att klistra fast ditt foto.</p>
          )
        },
        {
          question: (
            <h4 className="h4-question">
              Min ansökan ska skrivas under av Exchange coordinator, vem är det?
            </h4>
          ),
          answer: (
            <p className="p-answer">
              Det är din kontaktperson för respektive avtal på Umeå universitet.
            </p>
          )
        },
        {
          question: (
            <h4 className="h4-question">
              Får man CSN även för utlandsstudier?
            </h4>
          ),
          answer: (
            <p className="p-answer">
              Man kan få CSN även för utlandsstudier. Ansök i god tid, men tänk
              på att CSN kan bevilja din låneansökan först när ditt utbyte är
              registrerat i Ladok. Om registreringen ej är gjord, kontakta
              studentadministratör (studentexpeditionen-datavetenskap).
            </p>
          )
        },
        {
          question: (
            <h4 className="h4-question">
              Behöva jag betala terminsavgift när jag studerar utomlands?
            </h4>
          ),
          answer: (
            <p className="p-answer">
              Inte om du åker med ett avtal vid Umeå universitet, det kan dock
              tillkomma en terminsavgift om du åker som freemover.
            </p>
          )
        },
        {
          question: (
            <h4 className="h4-question">
              Vad händer om jag blir sjuk när jag är utomlands?
            </h4>
          ),
          answer: (
            <p className="p-answer">
              Om du blir sjuk under utlandsvistelsen behöver du sjuk- och
              olycksfallsförsäkring. En sådan har universitetet tecknat för alla
              studenter som reser inom avtal till partneruniversitet. För att
              den ska gälla måste din utlandsvistelse vara registrerad i Ladok.
              International Office ansvarar för att informera om detta. <br />
              <br /> Om du reser som freemover kan du behöva teckna en egen
              försäkring, vilket kan kosta några tusenlappar för en termin. Men
              att inte ha en sådan försäkring kan vara ödesdigert om du blir
              sjuk. Då kan kostnaderna uppgå till hundratusentals kronor. CSN
              sägs erbjuda en heltäckande försäkring, kontakta dem för mer
              information.
            </p>
          )
        },
        {
          question: (
            <h4 className="h4-question">
              Varför måste jag fylla i ett ”Contact Form”?
            </h4>
          ),
          answer: (
            <p className="p-answer">
              Innan du reser fyller du i ett kontaktformulär så att Umeå
              universitet snabbt kan kontakta dina anhöriga om något händer dig.
              Den lämnas till den internationella kontaktpersonen vid aktuell
              institution eller till International Office.
            </p>
          )
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
    const coverContent = getCoverContent("faqCover");
    return (
      <div className="faq">
        <Cover content={coverContent.cover} />
        <div className="faq-container">
          <div className="heading-box">
            <h2 className="h2-faq">Vanliga frågor</h2>
          </div>
          {this.state.faq.map((element, index) => {
            return (
              <div className="faq-box" key={index}>
                {element.question} {element.answer}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FAQ;
