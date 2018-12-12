import React from "react";

export const getBeforeTripContent = id => {
  const beforeTripText = {
    text: [
      {
        text: {
          heading: (
            <p className="info-heading">Ansök till partneruniversitetet</p>
          ),
          info: (
            <p className="info-body-text">
              När du har blivit nominerad till en plats av Umeå universitets är
              det dags att söka till det partneruniversitet du ska studera vid.
              <br />
              <br />
              Vanligtvis kommer Partneruniversitet och/eller ansvarig för det
              avtalet du ska åka med kontakta dig via mail och förklara hur du
              går tillväga för att söka till partneruniversitet. Kom ihåg att
              det alltid är ditt egna ansvar att kontrollera att
              ansökningsprocessen löper vidare.
            </p>
          )
        }
      },
      {
        text: {
          heading: (
            <p className="info-heading">Var ute i god tid</p>
          ),
          info: (
            <p className="info-body-text">
              Kom ihåg att att personalen på Umeå universitet tar sommarledigt och därför
              är det bra att fixa med underskrifter och intyg innan sommaren (speciellt om du 
              åker på utbyte under höstterminen). Förnyelse av pass och vaccin kan också kräva att 
              du är ute i god tid. 
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Rekommendationsbrev</p>,
          info: (
            <p className="info-body-text">
              Vissa universitet kräver att du skickar in ett
              rekommendationsbrev. Detta innebär att de vill att du har en
              referens som kan berätta hur du är som student. Ett
              rekommendationsbrev kan också behövas om du ska söka stipendier.
              Behöver du detta kontaktar du programansvariga på ID.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Boende</p>,
          info: (
            <p className="info-body-text">
              Vart du än åker kommer du att behöva söka boende. Ett tips är att
              börja med att kolla om partneruniversitet erbjuder
              studentbostäder. Det är inte ovanligt att det finns
              facebookgrupper till respektive land där boendefrågan diskuteras.
              Behöver du fixa boend på egen hand är ett gott råd att börja i tid
              för att få den bostad du önskar till terminstart.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Visum</p>,
          info: (
            <p className="info-body-text">
              Vissa länder kräver att du har ett visum för att få studera i
              landet. Processen att få visumet kan ta ganska lång tid. Du kan
              behöva åka till Stockholm för att hämta ut ditt visum på
              respektive lands ambassad. Det finns tjänster som kan hjälpa dig
              med detta mot en avgift. Exempelvis{" "}
              <a href="http://www.visumpartner.se/" target="blank_">
                visumpartner.se
              </a>
              .
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Pass</p>,
          info: (
            <p className="info-body-text">
              Kolla giltighetsdatumet i ditt pass. När du åker till ett land som
              kräver ett pass är det viktigt att det är giltigt under hela din
              vistelse. Utanför EU finns det många länder som även kräver att
              passet ska vara giltigt mella tre till sex månader efter planerad
              hemkomst. Kolla upp vilka regler som gäller för landet du ska åka
              till.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hälsodeklartion</p>,
          info: (
            <p className="info-body-text">
              Vissa universitet kräver att du kan uppvisa ett gott
              allmäntillstånd innan du börjar studera. Om detta är fallet
              behöver du genomgå en hälsoundersökning i samband med att du
              ansöker till universitetet. Universitetet kan be dig utföra vissa
              speciella undersökningar men vanligtvis räcker det med att göra en
              så kallad ”grundläggande hälsoundersökning”. Eftersom att du
              behöver boka tid på en hälsocentral och kan behöva vänta på
              provsvar bör du börja med detta i tid.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Vaccin</p>,
          info: (
            <p className="info-body-text">
              Det kan vara bra att kontakta en resevaccinationsmottagning för
              att eventuellt bli rekommenderar vaccin inför resan. Då fler doser
              av vaccinet kan behövas innan avresa ska detta göras i god tid
              innan.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Försäkringar</p>,
          info: (
            <p className="info-body-text">
              Du kommer få ett försäkringscertifikat från Umeå universitet som
              har ett försäkringsavtal med Kammarkollegiet för utbytesstudier.
              Kolla upp vad försäkringen mer exakt innefattar. Du som planerar
              att resa mycket under/efter dina studier kan behöva teckna ett
              reseskydd. Detta ska göras innan avresan. Kontakta ditt
              försäkringsbolag för att få mer information om detta.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Träffar med IO</p>,
          info: (
            <p className="info-body-text">
              International Office erbjuder träffar för alla som ska åka med de
              centrala avtalen. De erbjuder allt ifån informativa träffar till
              mingel med andra studenter som planerar att åka iväg. Dessa
              träffar rekomenderas verkligen då du kan få möjlighet till att
              träffa andra studenter som ska åka till samma partneruniversitet
              som dig. Du kan även få möjlighet till att träffa och ställa
              frågor till studenter som redan varit iväg.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Hitta andra resenärer</p>,
          info: (
            <p className="info-body-text">
              Om du åker ensam från Umeå universitet och är intresserad av att
              hitta andra resenärer från Sverige kan du kontakta den som är
              ansvarig för det avtal du åker med. De ansvariga kan eventuellt
              hjälpa dig att hitta andra som ska till samma parteruniversitet
              genom att kontakta andra univeristet i Sverige. Ett tips är även
              att kolla efter facebookgrupper. Grupperna brukar heta något i
              stil med ”Svenskar i Singapore”.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Stipendier</p>,
          info: (
            <p className="info-body-text">
              Kostnaderna kan lätt dra iväg när man studerar utomlands. Det kan
              därför vara en bra idé att söka stipendier. Om du åker med Erasmus
              kan du söka ett stipendie specifikt för Erasmus. Se till att söka
              det! Om du vill söka andra stipendier är ett tips att gå in på{" "}
              <a href="http://www.stipendier.se/" target="blank_">
                stipendier.se
              </a>
              .
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">CSN</p>,
          info: (
            <p className="info-body-text">
              När du åker på utlandsstudier kan du ansöka om att få utökat CSN.
              Du kan även få lån för exempelvis flygbiljetter och försäkringar.
              Kontakta CSN för att få reda på mer information.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Kurser</p>,
          info: (
            <p className="info-body-text">
              Processen för att söka kurser vid partneruniversitetet kan se
              olika ut. Antingen ska kurserna sökas innan du kommer till landet,
              eller så söker du kurser väl på plats. Vissa skolor har ett system
              där först till kvarn gäller och det kan bli en del pusslande för
              att få ihop schemat. Oavsett process bör du ha koll på vilka
              kurser du är intresserad av och kan läsa på förhand. Kolla även
              upp vilken process just ditt parteruniversitet har.
            </p>
          )
        }
      },
      {
        text: {
          heading: <p className="info-heading">Terminer</p>,
          info: (
            <p className="info-body-text">
              Tänk på att terminsperioderna ser olika ut på olika universitet.
              Terminerna kan både vara förskjutna eller pågå under en
              längre/kortare tid.
            </p>
          )
        }
      }
    ]
  };

  const content = {
    beforeTripText
  };

  return content[id];
};
