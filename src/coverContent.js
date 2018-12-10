import React from "react";

export const getCoverContent = id => {
  const interviewCover = {
    cover: {
      backgroundImg: "heroImageInterviews",
      title: <p id="cover-title">INTERVJUER</p>,
      subtitle: (
        <p id="cover-subtitle">
          ID-studenter har varit på utbytesstudier på flera olika
          partneruniversitet runt om i världen. Intervjuerna innehåller allt
          ifrån tips till praktiska grejer inför resan från några IDare som har
          varit iväg.
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
          Det finns olika avtal beroende på vilket land du vill studera i. De
          olika avtalen finns listade nedan. Det går att söka med hur många
          olika avtal man vill.
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
          Efter att du har blivit nominerad till ett partneruniversitet måste du
          förbereda dig för att åka. På den här sidan finns det listat olika
          saker du bör tänka på och ordna innan du åker iväg.
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
          De kurser som du läser utomlands behöver tillgodoräknas in i dina
          studier på ID-programmet. På den här sidan finner du en lista på
          kurser som ID-studenter har läst vid olika partneruniversitet under
          deras utlandsstudier. Du finner även information om vilka kategorier
          kurserna har tillgodoräknats i.
        </p>
      )
    }
  };

  const content = {
    agreementsCover,
    interviewCover,
    beforeTripCover,
    creditingCover
  };
  return content[id];
};
