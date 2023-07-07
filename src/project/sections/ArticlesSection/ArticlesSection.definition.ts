import { TSectionDefinition } from "@/makasi/core/Section/Section.types";
import dynamic from "next/dynamic";
import { TArticleItem } from "./ArticlesSection";

const Component = dynamic(() => import("./ArticlesSection"));

export const ArticlesSectionDefinition: TSectionDefinition = {
  name: "articles",
  label: "Liste des articles",
  imagePreview:
    "https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1688668287/alteria/articles.svg",
  Component,
  getData: async (): Promise<TArticleItem[]> => {
    return [
      {
        id: "A",
        slug: "ce-quil-faut-savoir-sur-lisr-linvestissement-responsable",
        title: "Ce qu’il faut savoir sur l’ISR : l’Investissement responsable",
        description:
          "Qu'es-ce que l'investissement socialement responsable ? Et est-ce un bon investissement",
        miniature:
          "https://res.cloudinary.com/alteria-patrimoine/image/upload/f_auto,q_95,w_200/upload/wymifanzrnghiktjpei2",
      },
      {
        id: "B",
        slug: "6-points-a-connaitre-sur-lassurance-vie",
        title: "6 points pour comprendre l’Assurance Vie",
        description:
          "6 points pour bien comprendre le placement préféré des français, son fonctionnement, et ses avantages.",
        miniature:
          "https://res.cloudinary.com/alteria-patrimoine/image/upload/f_auto,q_95,w_200/upload/oogktikxyapinkkpfzrm",
      },
      {
        id: "C",
        slug: "per-le-meilleur-outil-pour-preparer-sa-retraite",
        title: "PER: le meilleur outil pour préparer sa retraite ?",
        description:
          "Le PER est il aujourd'hui la meilleure solution pour se constituer une retraite ? ",
        miniature:
          "https://res.cloudinary.com/alteria-patrimoine/image/upload/f_auto,q_95,w_200/upload/muzj2uwuuxcj6u8dy1c8",
      },
      {
        id: "D",
        slug: "7-points-bien-choisir-sa-prevoyance",
        title: "7 points pour bien choisir sa prévoyance",
        description:
          "Qu’on soit chef d’entreprise, infirmier ou médecin, bien choisir sa prévoyance reste pour beaucoup un véritable casse-tête. Pourtant, il est aujourd’hui essentiel de bien comprendre ces solutions, pour faire les bons choix et se protéger efficacement à long terme.",
        miniature:
          "https://res.cloudinary.com/alteria-patrimoine/image/upload/f_auto,q_95,w_200/upload/dvvfstqk0k6zpmfvgqrr",
      },
    ];
  },
};
