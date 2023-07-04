import { TSectionDefinition } from "@/makasi/Section/Section.types";
import dynamic from "next/dynamic";

const Component = dynamic(() => import("./LegalHeaderSection"));

export const LegalHeaderSectionDefinition: TSectionDefinition = {
  name: "legal-header",
  Component,
};
