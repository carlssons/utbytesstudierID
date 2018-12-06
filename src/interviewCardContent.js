import React from "react";

export const getInterviewCardContent = id => {
  const interviewCardsAfrica = {
    interviewCard: [
      {
        id: "marc",
        avatar: "marc.jpg",
        title: <h4 className="card-h4">Stellenbosch Sydafrika</h4>,
        subtitle: <p className="card-p">Marc Coquand</p>,
        imgBanner: "marcBanner",
        school: (
          <p id="school" className="card-p">
            Stellenbosch university
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-17
          </p>
        ),
        link: "/intervjuer"
      }
    ]
  };

  const interviewCardsAsia = {
    interviewCard: [
      {
        id: "amine",
        avatar: "amine.jpg",
        title: <h4 className="card-h4">Seoul Sydkorea</h4>,
        subtitle: <p className="card-p">Amine Balta</p>,
        imgBanner: "amineBanner",
        school: (
          <p id="school" className="card-p">
            Sogang University
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-18
          </p>
        ),
        link: "/intervjuer"
      },
      {
        id: "alfred",
        avatar: "alfred.jpg",
        title: <h4 className="card-h4">Macau</h4>,
        subtitle: <p className="card-p">Alfred Ödling</p>,
        imgBanner: "alfredBanner",
        school: (
          <p id="school" className="card-p">
            University of Science and Technology
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-17
          </p>
        ),
        link: "/intervjuer"
      },
      {
        id: "charlotte",
        avatar: "charlotte.jpg",
        title: <h4 className="card-h4">Seoul Sydkorea</h4>,
        subtitle: <p className="card-p">Charlotte Ristiniemi</p>,
        imgBanner: "charlotteBanner",
        school: (
          <p id="school" className="card-p">
            Hanyang University
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-17
          </p>
        ),
        link: "/intervjuer"
      },
      {
        id: "david",
        avatar: "david.jpg",
        title: <h4 className="card-h4">Tokyo Japan</h4>,
        subtitle: <p className="card-p">David Hellman</p>,
        imgBanner: "davidBanner",
        school: (
          <p id="school" className="card-p">
            Metropolitan University
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-17
          </p>
        ),
        link: "/intervjuer"
      }
    ]
  };

  const interviewCardsAustralia = {
    interviewCard: [
      {
        id: "emma",
        avatar: "emma.jpg",
        title: <h4 className="card-h4">Wollongong Australien</h4>,
        subtitle: <p className="card-p">Emma Fahlman</p>,
        imgBanner: "emmaBanner",
        school: (
          <p id="school" className="card-p">
            University of Wollongong (UOW)
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            VT-17
          </p>
        ),
        link: "/intervjuer"
      }
    ]
  };

  const interviewCardsEurope = {
    interviewCard: [
      {
        id: "linus",
        avatar: "Linus.jpg",
        title: <h4 className="card-h4">Prag Tjeckien</h4>,
        subtitle: <p className="card-p">Linus Lagerhjelm</p>,
        imgBanner: "linusBanner",
        school: (
          <p id="school" className="card-p">
            Karlsuniversitetet
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-17
          </p>
        ),
        link: "/intervjuer"
      },
      {
        id: "magnus",
        avatar: "magnus.jpg",
        title: <h4 className="card-h4">München Tyskland</h4>,
        subtitle: <p className="card-p">Magnus Emanuelsson</p>,
        imgBanner: "magnusBanner",
        school: (
          <p id="school" className="card-p">
            Tekniska universitet i München (TUM)
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-18
          </p>
        ),
        link: "/intervjuer"
      },
      {
        id: "mans",
        avatar: "mans.jpg",
        title: <h4 className="card-h4">Twente Nederländerna</h4>,
        subtitle: <p className="card-p">Måns Hellgren</p>,
        imgBanner: "mansBanner",
        school: (
          <p id="school" className="card-p">
            University of Twente
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-18
          </p>
        ),
        link: "/intervjuer"
      },
      {
        id: "matilda",
        avatar: "matilda.jpg",
        title: <h4 className="card-h4">Barcelona Spanien</h4>,
        subtitle: <p className="card-p">Matilda Nilsson</p>,
        imgBanner: "matildaBanner",
        school: (
          <p id="school" className="card-p">
            Universitat Politècnica de Catalunya
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-17
          </p>
        ),
        link: "/intervjuer"
      },
      {
        id: "oskar",
        avatar: "oskar.jpg",
        title: <h4 className="card-h4">Köpenhamn Danmark</h4>,
        subtitle: <p className="card-p">Oskar Olausson</p>,
        imgBanner: "oskarBanner",
        school: (
          <p id="school" className="card-p">
            Technical University of Denmark
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-18
          </p>
        ),
        link: "/intervjuer"
      },
      {
        id: "simon",
        avatar: "simon.jpg",
        title: <h4 className="card-h4">Köpenhamn Danmark</h4>,
        subtitle: <p className="card-p">Simon Asp</p>,
        imgBanner: "simonBanner",
        school: (
          <p id="school" className="card-p">
            Köpenhamns Universitet
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-18
          </p>
        ),
        link: "/intervjuer"
      }
    ]
  };

  const interviewCardsNorthAmerica = {
    interviewCard: [
      {
        id: "aron",
        avatar: "aron.jpg",
        title: <h4 className="card-h4">Edmonton Kanada</h4>,
        subtitle: <p className="card-p">Aron Nisbel</p>,
        imgBanner: "aronBanner",
        school: (
          <p id="school" className="card-p">
            Grant MacEwan University
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-18
          </p>
        ),
        link: "/intervjuer"
      },
      {
        id: "tonje",
        avatar: "tonje.jpg",
        title: <h4 className="card-h4">London Kanada</h4>,
        subtitle: <p className="card-p">Tonje Lindmark</p>,
        imgBanner: "tonjeBanner",
        school: (
          <p id="school" className="card-p">
            Western University
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-17
          </p>
        ),
        link: "/intervjuer"
      },
      {
        id: "viktor",
        avatar: "Viktor.jpg",
        title: <h4 className="card-h4">Winnipeg Kanada</h4>,
        subtitle: <p className="card-p">Viktor Åhlund</p>,
        imgBanner: "viktorBanner",
        school: (
          <p id="school" className="card-p">
            University of Manitoba Winnipeg
          </p>
        ),
        semester: (
          <p id="semester" className="card-p">
            HT-17
          </p>
        ),
        link: "/intervju"
      }
    ]
  };

  const content = {
    interviewCardsAfrica,
    interviewCardsAsia,
    interviewCardsAustralia,
    interviewCardsEurope,
    interviewCardsNorthAmerica
  };

  return content[id];
};
