import React from "react";

export const getBeforeTripContent = id => {
  const interviewCardsAfrica = {
    Text: [
      {
        text: {
          question: (
            <p className="beforeTrip-header">
              Vad var det bästa med att åka utomlands?
            </p>
          ),
          answer: (
            <p className="beforeTrip-info">
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
          question: (
            <p className="interview-question">
              Var det något som var mindre bra med att studera utomlands?
            </p>
          ),
          answer: (
            <p className="interview-answer">
              Kommer faktiskt inte på något. Det är klart man saknar alla
              människor man har hemma men man hamnar som i sin egen bubbla och
              glömmer lätt bort allt sånt.
            </p>
          )
        }
      }
    ]
  };

  const content = {
    interviewCardsAfrica
  };

  return content[id];
};
