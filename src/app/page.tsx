import { Page } from "@/makasi";
import { mongodbConnector } from "@/makasi/connectors/mongodbConnector";
import { sections } from "@/sections/sections";
import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { TFooterData, TPageData } from "@/makasi/Page/Page.types";

export default async function Home() {
  // await mongodbConnector.setPage("/", data);

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
                  pathname: "/articles/6-points-a-connaitre-sur-lassurance-vie",
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
              style: {
                opacity: 0.4,
              },
              value:
                "Alteria Assurances et Patrimoine © - Tous droits réservés",
            },
          ],
        },
      ],
    },
  ],
};

const data: TPageData = {
  sections: [
    {
      id: "first",
      fieldsData: {
        title: {
          value: "Votre spécialiste de la protection sociale et de l’épargne",
          params: {},
        },
        subtitle: {
          value:
            "Courtier expert de l’épargne et de l’assurance de personnes, nous accompagnons les professions médicales et les gérants d’entreprise pour :",
          params: {},
        },
      },
      params: {
        backgroundImage: "/images/header-background.jpg",
        backgroundImageOld:
          "https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      },
      type: "header",
    },

    {
      type: "home-section",
      fieldsData: {
        title: {
          value: "Vous accompagner, pour vous <u>simplifier l’assurance</u>.",
          params: {},
        },
        content: {
          params: {},
          value: {
            nodes: [
              {
                type: "container",
                size: "small",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        value:
                          "Parce qu’en matière d’assurance, avec une multitude de compagnies et d’offres différentes, il est bien souvent difficile de s’y retrouver, et d’être sûr de faire le bon choix.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        value:
                          "En tant que courtier spécialiste des professions médicales, nous avons vocation à vous accompagner, en sélectionnant pour vous les meilleures solutions du marché, mais aussi en vous apportant le conseil et le suivi dont vous avez besoin, pour bien vous protéger.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        value:
                          "Vous pouvez ainsi vous concentrer sur votre activité, l’esprit tranquille.",
                      },
                    ],
                  },
                  {
                    type: "divider",
                  },
                  {
                    type: "columns",
                    columns: {
                      desktop: 3,
                      tablet: 3,
                      mobile: 1,
                    },
                    children: [
                      {
                        type: "box",
                        children: [
                          {
                            type: "text",
                            value: "Expertise",
                          },
                        ],
                      },
                      {
                        type: "box",
                        children: [
                          {
                            type: "text",
                            value: "Indépendance",
                          },
                        ],
                      },
                      {
                        type: "box",
                        children: [
                          {
                            type: "text",
                            value: "Simplicité",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
      id: "home-section",
      params: {
        topCurve: true,
        bottomCurve: true,
        style: {
          backgroundColor: "var(--light)",
        },
      },
    },
    {
      type: "home-section",
      fieldsData: {
        title: {
          value: "Ils nous font <u>confiance</u>",
          params: {},
        },
        content: {
          params: {},
          value: { nodes: [] },
        },
      },
      id: "home-section",
      params: {},
    },
    {
      type: "home-section",
      fieldsData: {
        title: {
          value: "Professions <u>Médicales & Paramédicales</u>",
          params: {},
        },
        content: {
          params: {},
          value: {
            nodes: [
              {
                type: "container",
                maxWidth: 650,
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        value:
                          "Chez Alteria Assurances, nous avons pour vocation d’accompagner les professionnels du monde médical, grâce à notre connaissance de vos métiers, et des solutions adaptées pour répondre précisément à vos besoins.",
                      },
                    ],
                  },
                  {
                    type: "box",
                    children: [
                      {
                        type: "list",
                        children: [
                          {
                            type: "list-item",
                            children: [
                              {
                                type: "text",
                                style: {
                                  fontWeight: 600,
                                },
                                value:
                                  "Nous vous accompagnons dès votre création ",
                              },
                              {
                                type: "text",
                                value:
                                  "d’activité, pour vous simplifier les démarches, et vous accompagner au fil de votre évolution.",
                              },
                            ],
                          },
                          {
                            type: "list-item",
                            children: [
                              {
                                type: "text",
                                value: "Nous connaissons les spécificités ",
                                style: {
                                  fontWeight: 600,
                                },
                              },
                              {
                                type: "text",
                                value:
                                  "de vos régimes obligatoires et nous sélectionnons pour vous les solutions les mieux adaptées à votre métier",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        style: {
                          fontWeight: 600,
                        },
                        value:
                          "Faites le choix d’un spécialiste. Et consacrez vous à votre activité, l’esprit tranquille.",
                      },
                    ],
                  },
                  {
                    type: "block",
                    children: [
                      {
                        type: "button",
                        theme: "primary",
                        action: {
                          type: "internal-link",
                          pathname: "/bla",
                        },
                        children: [
                          {
                            type: "text",
                            value: "Discutons-en !",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "block",
                    children: [
                      {
                        type: "button",
                        action: {
                          type: "internal-link",
                          pathname: "/bla",
                        },
                        children: [
                          {
                            type: "text",
                            value: "En savoir plus",
                          },
                        ],
                      },
                    ],
                  },
                ],
                size: "small",
              },
            ],
          },
        },
      },
      id: "home-section",
      params: {
        style: {
          backgroundColor: "var(--light)",
        },
      },
    },
    {
      type: "home-section",
      fieldsData: {
        title: {
          value: "Vos devis en <u>quelques clics</u> !",
          params: {},
        },
        content: {
          params: {},
          value: {
            nodes: [
              {
                type: "container",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        value:
                          "Vous souhaitez un devis de prévoyance, un comparatif de mutuelle, ou encore estimer votre possible réduction d’impôts grâce au PER ?",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        value:
                          "Demandez nous une étude gratuite, en quelques clics !",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        value:
                          "Nous vous ferons compte-rendu sur mesure pour répondre au mieux à vos besoins.",
                      },
                    ],
                  },
                ],
                size: "small",
              },
            ],
          },
        },
      },
      id: "home-section",
      params: {
        topCurve: true,
        bottomCurve: true,
        style: {
          backgroundColor: "var(--dark)",
          color: "white",
        },
      },
    },
    {
      type: "home-section",
      fieldsData: {
        title: {
          value: "Ils nous <u>accompagnent</u>",
          params: {},
        },
        content: {
          params: {},
          value: { nodes: [] },
        },
      },
      id: "home-section",
      params: {
        style: {
          backgroundColor: "var(--light)",
        },
      },
    },
    {
      type: "home-section",
      fieldsData: {
        title: {
          value: "Nos <u>partenaires</u> assureurs",
          params: {},
        },
        content: {
          params: {},
          value: {
            nodes: [
              {
                type: "container",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        value:
                          "Nos nombreux partenariats nous permettent de vous proposer les meilleures solutions du marché, En toute indépendance.",
                      },
                    ],
                  },
                ],
                size: "small",
              },
            ],
          },
        },
      },
      id: "home-section",
      params: {
        style: {
          backgroundColor: "var(--light)",
        },
      },
    },
    {
      type: "articles",
      fieldsData: {
        title: {
          value: "Retrouvez nos articles",
          params: {},
        },
        content: {
          params: {},
          value: { nodes: [] },
        },
      },
      id: "articles",
      params: {
        style: {
          backgroundColor: "var(--light)",
        },
      },
    },
  ],
  footer,
  navigationBar: {
    enabled: true,
  },
};
