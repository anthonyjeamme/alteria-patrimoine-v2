import { TSectionDefinition } from "@/makasi/core/Section/Section.types";
import dynamic from "next/dynamic";

const Component = dynamic(() => import("./LegalHeaderSection"));

export const LegalHeaderSectionDefinition: TSectionDefinition = {
  name: "legal-header",
  label: `Header de page légale`,
  imagePreview:
    "https://res.cloudinary.com/anthony-jeamme-stuff/image/upload/v1688668287/alteria/header.svg",
  Component,
};
