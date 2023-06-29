import { Page } from "@/makasi";
import { mongodbConnector } from "@/makasi/connectors/mongodbConnector";
import { sections } from "@/sections/sections";
import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

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

  const footer = {
    structure: [
      { type: "brand" },
      {
        type: "columns",
        columns: { mobile: 1, tablet: 3, desktop: 3 },
        content: [
          {
            title: "NOS SOLUTIONS",
            items: [
              {
                type: "internal-link",
                pathname: "/nos-solutions/mutuelle-collective",
                label: "Mutuelle collective",
              },
            ],
          },
          {
            title: "NOS GUIDES",
            items: [
              {
                type: "internal-link",
                pathname: "/nos-solutions/mutuelle-collective",
                label: "Mutuelle collective",
              },
            ],
          },
          {
            title: "EN SAVOIR PLUS",
            items: [
              {
                type: "internal-link",
                pathname: "/nos-solutions/mutuelle-collective",
                label: "Mutuelle collective",
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
