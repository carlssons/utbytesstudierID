import React from "react";

export const getCoverContent = id => {
  const interviewCover = {
    cover: {
      backgroundImg: "heroImageInterviews",
      title: <p id="cover-title">INTERVJUER</p>,
      subtitle: (
        <p id="cover-subtitle">
          ID-studenter har varit på utbytesstudier vid olika partneruniversitet runt om i världen, via olika avtal. Här har vi samlat intervjuer med några av studenterna. Intervjuerna innehåller allt från inspiration och tips till praktisk information om saker man bör ta reda på innan avresa.
        </p>
      )
    }
  };

  const agreementsCover = {
    cover: {
      backgroundImg: "heroImageAgreements",
      title: <p id="cover-title">AVTAL</p>,
      subtitle: (
        <p id="cover-subtitle">
          När du  ansöker om att bli nominerad till ett partneruniversitet kan du ansöka via olika avtal. Här kan du läsa om de olika avtalen, vilka partneruniversitet  som ingår i dem och hur du går tillväga för att ansöka.
        </p>
      )
    }
  };

  const beforeTripCover = {
    cover: {
      backgroundImg: "heroImageBeforeTrip",
      title: <p id="cover-title">INFÖR RESAN</p>,
      subtitle: (
        <p id="cover-subtitle">
          Efter att du har blivit nominerad till ett partneruniversitet måste du förbereda dig inför din termin utomlands. På den här sidan finns det listat olika saker du bör tänka på och ordna med innan du åker iväg.
        </p>
      )
    }
  };

  const creditingCover = {
    cover: {
      backgroundImg: "heroImageCrediting",
      title: <p id="cover-title">TILLGODORÄKNANDE</p>,
      subtitle: (
        <p id="cover-subtitle">
          När du kommer tillbaka från dina utbytesstudier måste du tillgodoräkna dina kurser. Här får du information om hur du går tillväga. Du kan även se under vilka kategorier andra studenters kurser har blivit tillgodoräknade. 
        </p>
      )
    }
  };

  const faqCover = {
    cover: {
      backgroundImg: "heroImageFaq",
      title: <p id="cover-title">FAQ</p>,
      subtitle: (
        <p id="cover-subtitle">
          Här hittar du vanligt förekommande frågor bland studenter samt
          kontaktuppgifter till programansvariga och studievägledare.
        </p>
      )
    }
  };

  const content = {
    agreementsCover,
    interviewCover,
    beforeTripCover,
    creditingCover,
    faqCover
  };
  return content[id];
};
