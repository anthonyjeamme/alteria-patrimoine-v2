"use client";

import dynamic from "next/dynamic";
import { FC } from "react";

import { classNameModule } from "@/utils/className/className";
import styles from "./page.module.scss";
const className = classNameModule(styles);

const TextEditor = dynamic(
  () => import("@/makasi/TextEditor/TextEditor").then((mod) => mod.TextEditor),
  { ssr: false }
);

const page = () => {
  return (
    <div
      {...className("Page")}
      style={{
        minHeight: "100vh",
        paddingTop: 100,
        paddingBottom: 100,
        boxSizing: "border-box",
        width: 600,
        margin: "0 auto",
      }}
    >
      <TextEditor
        value={data}
        onChange={(value) => {
          console.log("ok");

          localStorage.setItem("value", JSON.stringify(value));
        }}
      />

      {/* <Content
        components={components}
        nodes={[
          {
            type: "text",
            value: "HELLO",
          },
          {
            type: "slider",
            children: [
              {
                type: "component",
                componentId: "test",
                componentData: {
                  title: "HELLO WORLD",
                  subtitle: "coucouc",
                },
                componentParams: {
                  message: "PARAMS",
                },
                children: [
                  {
                    type: "text",
                    value: "SOUUUUU",
                  },
                ],
              },
            ],
          },
        ]}
      /> */}
    </div>
  );
};

export default page;

interface IIconProps {
  background?: boolean;
  color?: string;
  weight?: "normal" | "bold";
  size?: number;
  monocolor?: boolean;
}

const Icon: FC<IIconProps> = ({
  background,
  color,
  size = 30,
  weight = "normal",
  monocolor,
}) => {
  const strokeWidth = (200 / size) * 2;

  const colorA = color || "var(--dark)";
  const colorB = monocolor ? colorA : "var(--primary)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      height={size}
      fill="none"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    >
      <rect width="200" height="200" />

      <path
        fill="var(--primary)"
        opacity={background ? 0.1 : 0}
        d="M158,94.5v44.74a9.76,9.76,0,0,1-9.76,9.76H115V118a13,13,0,0,0-13.63-13A13.23,13.23,0,0,0,89,118.37V149H56.76A9.76,9.76,0,0,1,47,139.24V94.5a11.12,11.12,0,0,1,4.36-8.84L94.13,52.91a13.76,13.76,0,0,1,16.73,0l42.77,32.75A11.13,11.13,0,0,1,158,94.5Z"
      />
      <path
        stroke={colorA}
        d="M114.67,148.63h33.24a9.76,9.76,0,0,0,9.76-9.76v-12.2"
      />
      <path
        stroke={colorA}
        d="M88.67,148.63H56.43a9.76,9.76,0,0,1-9.76-9.76V94.13A11.12,11.12,0,0,1,51,85.29L93.8,52.54a13.76,13.76,0,0,1,16.73,0L153.3,85.29a11.13,11.13,0,0,1,4.37,8.84v44.74a9.76,9.76,0,0,1-9.76,9.76H114.67"
      />

      <path
        stroke={colorB}
        d="M88.67,135.63V118A13.23,13.23,0,0,1,101,104.65a13,13,0,0,1,13.63,13v18"
      />
    </svg>
  );
};

const data = {
  root: {
    type: "root",
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site alteriapatrimoine.fr les présentes mentions légales. La connexion et la navigation sur le site (indiquer le nom du site) par l’Utilisateur implique l'acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "ARTICLE 1 : L’éditeur",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h2",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "L'édition du site alteriapatrimoine.fr est assurée par la Société SASU ALTERIA ASSURANCES ET PATRIMOINE au capital de 300 euros, immatriculée au RCS de SAINT ETIENNE sous le numéro 849083100 dont le siège social est situé au 11 Place Jacquard 42000 St Etienne, numéro de téléphone 0781934723, adresse e-mail : k.chaouch@alteriapatrimoine.fr N° de TVA intracommunautaire : FR18849083100 Le Directeur de la publication est KEVIN CHAOUCH, président de la société.",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "ARTICLE 2 : L’hébergeur",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h2",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "L'hébergeur du site alteriapatrimoine.fr est la Société Netlify Inc., dont le siège social est situé au 2343 3rd St 296, San Francisco, CA 94107, United States , avec le numéro de téléphone : +1 415-691-1573.",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "ARTICLE 3 : Accès au site",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h2",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance. En cas de modification, interruption ou suspension des services, le site alteriapatrimoine.fr ne saurait être tenu responsable.",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "ARTICLE 3.1 : Contenu du site",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h3",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Ce site a été élaboré avec rigueur dans un souci de qualité et d’éthique professionnelle. L’information présentée sur ce site est à titre indicatif et général. Elle ne saurait en aucun cas être considérée comme exhaustive et ne peut être assimilée à une offre commerciale ou à des conseils. ALTERIA ASSURANCES ET PATRIMOINE se réserve le droit de modifier le contenu de son site à tout instant et sans préavis. Malgré tout le sérieux et l’application apportés à la réalisation de ce site et à son actualisation régulière, certaines informations peuvent être erronées et ALTERIA ASSURANCES ET PATRIMOINE ne pourra en être tenu pour responsable. L’utilisateur est seul responsable de l’utilisation qu’il fait des informations accessibles, la responsabilité de ALTERIA ASSURANCES ET PATRIMOINE ne pouvant en aucun cas être recherchée à ce titre. ALTERIA ASSURANCES ET PATRIMOINE décline toute responsabilité pour tous dommages directs et indirects, quels qu’en soient les causes, origines, nature ou conséquence, en raison de l’accès à ce site ou de l’impossibilité d’y accéder, de même que de l’utilisation de ce site et/ou du crédit accordé à une quelconque information qui en est directement ou indirectement retirée.",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "ARTICLE 4 : Collecte des données",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h2",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. Le site est déclaré à la CNIL sous le numéro 147113193.",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "4.1 : Droits de l’utilisateur",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h3",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles. L'Utilisateur peut exercer ce droit par mail à l'adresse email hello@alteriapatrimoine.fr, par voie postale à l’adresse suivante : Alteria Assurances & Patrimoine, Service Juridique, 11 Place Jacquard 42000 Saint Etienne, ou par téléphone au 07 81 93 47 23.",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "4.2 : Utilisation des données",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h3",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "La société ALTERIA ASSURANCES ET PATRIMOINE s’engage à utiliser vos données uniquement dans des finalités légitimes et déterminées, en lien avec l’activité de courtage en assurance et les autres métiers de la société ALTERIA ASSURANCES ET PATRIMOINE.Vos donnés sont utilisées pour les finalités suivantes :",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "L’analyse de vos besoins en assurance",
                type: "text",
                version: 1,
              },
            ],
            type: "listitem",
            value: 1,
          },
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "La passation, la gestion et l’exécution de vos contrats d’assurance",
                type: "text",
                version: 1,
              },
            ],
            type: "listitem",
            value: 2,
          },
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "La lutte contre le blanchiment de capitaux et contre le financement du terrorisme",
                type: "text",
                version: 1,
              },
            ],
            type: "listitem",
            value: 3,
          },
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "La lutte contre la fraude à l’assurance",
                type: "text",
                version: 1,
              },
            ],
            type: "listitem",
            value: 4,
          },
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Le respect du devoir de conseil, des obligations légales et normes en vigueur propres à l’activité de courtage en assurances.",
                type: "text",
                version: 1,
              },
            ],
            type: "listitem",
            value: 5,
          },
        ],
        type: "list",
        listType: "bullet",
        start: 1,
        tag: "ul",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "4.3 : Destinataires des données",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h3",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Seules les personnes ayant besoin d’accéder à vos données dans le cadre de leurs missions y ont accès. Il s’agit notamment du personnel de la société ALTERIA ASSURANCES ET PATRIMOINE, ainsi que les partenaires assureurs de la société, dont la liste exhaustive pourra être obtenue sur simple demande. Ces données peuvent également être communiquées aux éventuels sous-traitants de la société ALTERIA ASSURANCES ET PATRIMOINE, si besoin",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "4.4 : Bases légales des traitements",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h3",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Le recueil et le traitement de vos données personnelles reposent essentiellement sur les bases juridiques suivantes : L’exécution du contrat, Le respect d’une obligation légale auquel ALTERIA ASSURANCES ET PATRIMOINE est soumis, Votre consentement. ALTERIA ASSURANCES ET PATRIMOINE est susceptible d’avoir recours à d’autres bases juridiques selon les traitements effectués.",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "4.5 : Durée de conservation des données personnelles",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h3",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "ALTERIA ASSURANCES ET PATRIMOINE s’engage à conserver vos données personnelles pour une durée n’excédant pas celle nécessaire aux finalités pour lesquelles elles sont traitées, conformément aux durées de conservation imposées par les lois applicables en vigueur. Si votre demande concerne un ou plusieurs contrats déjà souscrits par notre intermédiaire, vos données sont conservées de manière sécurisée pendant la durée de notre relation contractuelle et, après son terme, jusqu’à l’expiration du délai de prescription légale applicable. A défaut de contrat, vos données sont conservées pendant une durée de 3 ans à compter de notre dernier contact avec vous.",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "ARTICLE 5 : Cookies",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h2",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation. En naviguant sur le site, il les accepte. Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "ARTICLE 6 : Liens hypertextes",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h2",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Les liens qui seraient mis en place depuis ce site vers des sites extérieurs ne sauraient engager la responsabilité de ALTERIA ASSURANCES ET PATRIMOINE quant au contenu de ces sites. ALTERIA ASSURANCES ET PATRIMOINE précise que tous les sites tiers reliés au site www.predictis.com par des liens hypertextes sont soumis à leurs propres conditions d’utilisation et politiques de protection des données personnelles et décline toute responsabilité quant aux contenus publiés sur ces sites. ALTERIA ASSURANCES ET PATRIMOINE n’est pas responsable des liens susceptibles de pointer sur son site. Par ailleurs, la mise en place de tels liens est interdite sans accord préalable et écrit de ALTERIA ASSURANCES ET PATRIMOINE. ALTERIA ASSURANCES ET PATRIMOINE se réserve le droit à tout moment, sans préavis et sans avoir à motiver sa décision, d’interdire certains de ces liens. Le site concerné, après en avoir été informé, disposera de 2 jours ouvrés pour retirer le lien concerné.",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "ARTICLE 7 : Propriété intellectuelle",
            type: "text",
            version: 1,
          },
        ],
        type: "heading",
        tag: "h2",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "L’ensemble des contenus de tous types présents sur ce site est la propriété exclusive de la société ALTERIA ASSURANCES ET PATRIMOINE toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site alteriapatrimoine.fr, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.",
            type: "text",
            version: 1,
          },
        ],
        type: "paragraph",
      },
    ],
  },
};
