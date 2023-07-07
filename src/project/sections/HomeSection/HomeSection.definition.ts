import { TSectionDefinition } from "@/makasi/core/Section/Section.types";
import dynamic from "next/dynamic";

const Component = dynamic(() => import("./HomeSection"));

export const HomeSectionDefinition: TSectionDefinition = {
  name: "home-section",
  label: `Header de l'accueil`,
  imagePreview:
    "https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1688668287/alteria/header.svg",
  Component,
};
