import { Page } from "@/makasi";
import { mongodbConnector } from "@/makasi/connectors/mongodbConnector";
import { sections } from "@/sections/sections";
import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { TFooterData } from "@/makasi/Page/Page.types";

export default async function Home() {
  // TODO fetch data !

  // await mongodbConnector.setPage("/", {
  //   sections: [
  //     {
  //       id: "first",
  //       fieldsData: {
  //         title: {
  //           value: "Votre spécialiste de la protection sociale et de l’épargne",
  //           params: {},
  //         },
  //         subtitle: {
  //           value:
  //             "Courtier expert de l’épargne et de l’assurance de personnes, nous accompagnons les professions médicales et les gérants d’entreprise pour :",
  //           params: {},
  //         },
  //       },
  //       params: {
  //         backgroundImage: "/images/header-background.jpg",
  //         backgroundImageOld:
  //           "https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  //       },
  //       type: "header",
  //     },
  //   ],
  //   footer: {
  //     enabled: true,
  //   },
  //   navigationBar: {
  //     enabled: true,
  //   },
  // });

  const footer: TFooterData = {
    content: [
      {
        type: "container",
        size: "medium",
        style: {
          marginBottom: 60,
        },
        children: [
          { type: "brand", style: { marginBottom: 20 } },
          {
            type: "columns",
            style: {
              lineHeight: 2,
            },
            columns: { mobile: 1, tablet: 1, desktop: 3 },
            children: [
              {
                type: "block",
                children: [
                  {
                    type: "text",
                    value: "NOS SOLUTIONS",
                    style: {
                      fontWeight: 500,
                      marginBottom: 5,
                    },
                  },

                  {
                    type: "internal-link",
                    pathname: "/nos-solutions/mutuelle-collective",
                    text: "La Mutuelle Collective",
                    style: {
                      opacity: 0.7,
                    },
                  },
                  {
                    type: "internal-link",
                    pathname: "/nos-solutions/prevoyance-",
                    text: "La Prévoyance ",
                    style: {
                      opacity: 0.7,
                    },
                  },
                  {
                    type: "internal-link",
                    pathname: "/nos-solutions/assurance-vie",
                    text: "L'assurance vie",
                    style: {
                      opacity: 0.7,
                    },
                  },
                  {
                    type: "internal-link",
                    pathname: "/nos-solutions/lassurance-emprunteur",
                    text: "L’Assurance Emprunteur",
                    style: {
                      opacity: 0.7,
                    },
                  },
                  {
                    type: "internal-link",
                    pathname: "/nos-solutions/mutuelle",
                    text: "La Mutuelle",
                    style: {
                      opacity: 0.7,
                    },
                  },
                  {
                    type: "internal-link",
                    pathname: "/nos-solutions/retraite-complementaire",
                    text: "La Retraite complémentaire",
                    style: {
                      opacity: 0.7,
                    },
                  },
                ],
              },
              {
                type: "block",
                children: [
                  {
                    type: "text",
                    value: "NOS GUIDES",
                    style: {
                      fontWeight: 500,
                      marginBottom: 5,
                    },
                  },

                  {
                    type: "internal-link",
                    pathname:
                      "/articles/prevoyance-ce-qui-a-change-le-1er-juillet-2021",
                    text: "Prévoyance : Ce qui a changé le 1er Juillet 2021",
                    style: {
                      opacity: 0.7,
                    },
                  },
                  {
                    type: "internal-link",
                    pathname:
                      "/articles/ce-quil-faut-savoir-sur-lisr-linvestissement-responsable",
                    text: "Ce qu’il faut savoir sur l’ISR : l’Investissement responsable",
                    style: {
                      opacity: 0.7,
                    },
                  },
                  {
                    type: "internal-link",
                    pathname:
                      "/articles/6-points-a-connaitre-sur-lassurance-vie",
                    text: "6 points pour comprendre l’Assurance Vie",
                    style: {
                      opacity: 0.7,
                    },
                  },
                  {
                    type: "internal-link",
                    pathname:
                      "/articles/per-le-meilleur-outil-pour-preparer-sa-retraite",
                    text: "PER: le meilleur outil pour préparer sa retraite ?",
                    style: {
                      opacity: 0.7,
                    },
                  },
                  {
                    type: "internal-link",
                    pathname: "/articles/7-points-bien-choisir-sa-prevoyance",
                    text: "7 points pour bien choisir sa prévoyance",
                    style: {
                      opacity: 0.7,
                    },
                  },
                  {
                    type: "internal-link",
                    pathname:
                      "/articles/pourquoi-vous-devez-changer-dassurance-emprunteur-des-aujourdhui",
                    text: "Pourquoi vous devez changer d’assurance emprunteur dès aujourd’hui",
                    style: {
                      opacity: 0.7,
                    },
                  },
                ],
              },
              {
                type: "block",
                children: [
                  {
                    type: "text",
                    value: "EN SAVOIR PLUS",
                    style: {
                      fontWeight: 500,
                      marginBottom: 5,
                    },
                  },

                  {
                    type: "internal-link",
                    pathname: "/qui-sommes-nous",
                    text: "Qui sommes-nous ?",
                    style: {
                      opacity: 0.7,
                    },
                  },
                  {
                    type: "text",
                    value: "Nous contacter",
                    style: {
                      opacity: 0.7,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "container",
        size: "large",
        children: [
          {
            type: "spread-block",
            children: [
              {
                type: "block",
                style: { display: "flex", gap: 20 },
                children: [
                  {
                    type: "internal-link",
                    pathname: "/mentions-legales",
                    text: "Mentions Légales",
                  },
                  {
                    type: "internal-link",
                    pathname: "/politique-confidentialite",
                    text: "Politique de Confidentialité",
                  },
                ],
              },
              {
                type: "text",
                value:
                  "Alteria Assurances et Patrimoine © - Tous droits réservés",
              },
            ],
          },
        ],
      },
    ],
  };

  const page = await mongodbConnector.getPage("/");

  return (
    <Page
      sectionDefinitions={sections}
      pageData={{ ...page, footer }}
      FooterComponent={Footer}
      NavigationBarComponent={NavigationBar}
    />
  );
}
