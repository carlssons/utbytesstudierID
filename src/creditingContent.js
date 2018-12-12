import React from "react";

export const getCreditingContent = id => {
  const creditingInfo = {
    text: (
      <div className="info-crediting-text">
        <h2 className="h2-crediting">Översikt</h2>
        <p className="p-crediting">
          För att få ta ut en examen på ID måste du utöver den ”fasta”
          studieplanen också läsa ett antal kurser som du väljer själv
          (exempelvis kurserna du läser under utbytesstudierna). Dessa kurser
          måste läggas in under några specifika kategorier. Under rubriken
          "valbara kurser" via denna{" "}
          <a
            href="http://kurser.interaktion.nu/examen"
            target="blank_"
            className="info-body-link"
          >
            länk
          </a>{" "}
          kan du se de olika kategorierna som måste fyllas och vad som krävs för
          att kursen ska ingå i respektive kategori. <br />
          <br /> För att kurserna du läst under utlandsstudierna ska ingå i din
          examen måste du ansöka om tillgodoräknande via examensenheten. Detta
          görs först när du kommer hem från dina utlandsstudier. För att
          förhindra att ditt CSN blir påverkat bör det göras så fort som
          möjligt. Examensenheten gör en bedömning av innehåll och nivån av det
          kurser som lästs och tar sedan ett beslut om kursen ska få
          tillgodoräknas under den önskade kategorin eller inte. För att
          bedömningen ska bli så riktig som möjligt är det viktigt att du samlar
          på dig så mycket information som möjligt om kurserna i form av
          kursplaner, kurslitteratur, obligatoriska uppgifter och annat som kan
          vara relevant. <br />
          <br /> Vanligtvis läggs de kurser man läser utomlands in under kategorin ”Fria
          kurser”. Ett tips är dock att när du ansöker om tillgodoräknande
          försöka fylla andra kategorier än fria kurser. Om din ansökan blir
          nekad till att fylla en annan kategori kan du alltid ändra din ansökan
          och lägga den under fria kurser i slutändan ändå. Det går dock inte
          att göra tvärtom. Du kan alltså inte först få den tillgodoräknad som
          en fri kurs och sen försöka byta och få samma kurs tillgodoräknad som
          något annat. <br />
          <br /> Viktigt att veta är att om någon har fått en specifik kurs
          tillgodoräknad inom en speciell kategori tidigare kommer denna kurs
          alltid tillgodoräknas under samma kategori som tidigare beslutats. På
          den här sidan finns det en lista på kurser som andra från programmet
          har fått tillgodoräkna under en annan kategori än fria kurser.
        </p>
      </div>
    )
  };

  const categoryOne = {
    categoryName: (
      <h2 className="h2-crediting">
        Teknik för interaktion, yrkesförberedande{" "}
      </h2>
    ),
    university: [
      {
        name: (
          <h3 className="h3-crediting">
            Nanyang technological university, Singapore
          </h3>
        ),
        courses: [
          {
            course: (
              <p className="p-crediting">
                DM3005 Interactive Devices 7,5 hp, avancerad nivå
              </p>
            )
          },
          {
            course: (
              <p className="p-crediting">
                DD9009 Design Thinking, 5,6 hp, grundläggande nivå
              </p>
            )
          },
          {
            course: (
              <p className="p-crediting">
                DM3011 Sound for Interactive Media, 7,5 hp, grundläggande nivå
              </p>
            )
          }
        ]
      },
      {
        name: (
          <h3 className="h3-crediting">
            University of Colombo - School of Computing, Sri Lanka
          </h3>
        ),
        courses: [
          {
            course: (
              <p className="p-crediting">
                EN 3001 Industry Placement, 15 hp, avancerad nivå
              </p>
            )
          }
        ]
      }
    ]
  };

  const categoryTwo = {
    categoryName: (
      <h2 className="h2-crediting">Teknik för interaktion, fördjupning</h2>
    ),
    university: [
      {
        name: (
          <h3 className="h3-crediting">
            Nanyang technological university, Singapore
          </h3>
        ),
        courses: [
          {
            course: (
              <p className="p-crediting">
                DR2008 User Experience in Design, 5,6 hp, grundläggande nivå
              </p>
            )
          }
        ]
      },
      {
        name: (
          <h3 className="h3-crediting">
            Universitat Politècnica de Catalunya, Spanien
          </h3>
        ),
        courses: [
          {
            course: (
              <p className="p-crediting">
                CNANM Computer Network Architectures and Network Management, 6
                hp, avancerad nivå
              </p>
            )
          },
          {
            course: (
              <p className="p-crediting">
                FINE Future Internet Networks, 6hp, avancerad nivå
              </p>
            )
          },
          {
            course: (
              <p className="p-crediting">
                IAS Internet Applications and Security, 6hp, avancerad nivå
              </p>
            )
          }
        ]
      },
      {
        name: (
          <h3 className="h3-crediting">
            University of Colombo School of Computing, Sri Lanka
          </h3>
        ),
        courses: [
          {
            course: (
              <p className="p-crediting">
                MIT 3105 User Interface Design, 7,5 hp, avancerad nivå
              </p>
            )
          }
        ]
      }
    ]
  };

  const categoryThree = {
    categoryName: <h2 className="h2-crediting">Breddningskurser</h2>,
    university: [
      {
        name: <h3 className="h3-crediting">Hokkaido University, Japan</h3>,
        courses: [
          {
            course: (
              <p className="p-crediting">
                Field Seminar in Pop Cultural Event Planning and Management, 4
                hp, grundläggande nivå
              </p>
            )
          },
          {
            course: (
              <p className="p-crediting">
                Career Planning, 4 hp, grundläggande nivå
              </p>
            )
          }
        ]
      },
      {
        name: (
          <h3 className="h3-crediting">
            Nanyang technological university, Singapore
          </h3>
        ),
        courses: [
          {
            course: (
              <p className="p-crediting">
                DT2001 3D Production, 5,6 hp, grundläggande nivå
              </p>
            )
          }
        ]
      },
      {
        name: (
          <h3 className="h3-crediting">
            University of Colombo School of Computing, Sri Lanka
          </h3>
        ),
        courses: [
          {
            course: (
              <p className="p-crediting">
                IS 1007 Fundamentals of Economics, 4 hp, ekonomi, grundläggande
                nivå
              </p>
            )
          },
          {
            course: (
              <p className="p-crediting">
                IS 2003 Marketing, 4 hp, ekonomi, grundläggande nivå
              </p>
            )
          }
        ]
      },
      {
        name: <h3 className="h3-crediting">MacEwan University, Kanada</h3>,
        courses: [
          {
            course: (
              <p className="p-crediting">
                BCSC 102 Introduction to Visual Communication, 6hp,
                grundläggande nivå
              </p>
            )
          },
          {
            course: (
              <p className="p-crediting">
                PSYC 233 Personality, 6hp, grundläggande nivå
              </p>
            )
          }
        ]
      },
      {
        name: <h3 className="h3-crediting">Dalhousie University, Kanada</h3>,
        courses: [
          {
            course: (
              <p className="p-crediting">
                IENG D 2005 Engineering Economics, 6 hp, ekonomi, grundläggande
                nivå
              </p>
            )
          },
          {
            course: (
              <p className="p-crediting">
                NESC D 3670 Genes, Brain and Behavior, 6 hp, psykologi,
                grundläggande nivå
              </p>
            )
          }
        ]
      },
      {
        name: (
          <h3 className="h3-crediting">
            City University of Hong Kong, Hong Kong
          </h3>
        ),
        courses: [
          {
            course: (
              <p className="p-crediting">
                Interpersonal Skills and Positive Personal Development, 6 hp,
                psykologi, grundläggande nivå
              </p>
            )
          },
          {
            course: (
              <p className="p-crediting">
                Wearables, 6 hp, industridesign, grundläggande nivå
              </p>
            )
          },
          {
            course: (
              <p className="p-crediting">
                Rational Thinking and Creative Ideas, 7,5 hp, psykologi,
                grundläggande nivå
              </p>
            )
          }
        ]
      }
    ]
  };

  const categoryFour = {
    categoryName: <h2 className="h2-crediting">Datavetenskap</h2>,
    university: [
      {
        name: (
          <h3 className="h3-crediting">
            Nanyang technological university, Singapore
          </h3>
        ),
        courses: [
          {
            course: (
              <p className="p-crediting">
                CZ3003 Software Systems Analysis and Design, 5,7 hp, avancerad
                nivå
              </p>
            )
          },
          {
            course: (
              <p className="p-crediting">
                CZ2006 Software Engineering, 5,7 hp, grundläggande nivå
              </p>
            )
          }
        ]
      }
    ]
  };

  const categoryFive = {
    categoryName: <h2 className="h2-crediting">Allmänna ingenjörskurser</h2>,
    university: [
      {
        name: (
          <h3 className="h3-crediting">
            Nanyang technological university, Singapore
          </h3>
        ),
        courses: [
          {
            course: (
              <p className="p-crediting">
                DR0000 Sustainable Design, 5,65 hp, grundläggande nivå <br />
                <br />
                5,65 hp inom kursen 5EL240 Teknik för hållbar utveckling
                tillgodoräknas. För att hela kursen ska bli slutförd måste
                studenten genomföra kompletterande uppgifter. När dessa är
                genomförda och godkända kan hela kursen slutrapporteras
              </p>
            )
          }
        ]
      },
      {
        name: <h3 className="h3-crediting">Dalhousie University, Kanada</h3>,
        courses: [
          {
            course: (
              <p className="p-crediting">
                SUST D 1000 Intro Environment, Sustainability, Society 1, 12 hp
                (Innehåller 7,5 hp hållbar utveckling), grundläggande nivå
              </p>
            )
          }
        ]
      }
    ]
  };

  const content = {
    creditingInfo,
    categoryOne,
    categoryTwo,
    categoryThree,
    categoryFour,
    categoryFive
  };
  return content[id];
};
