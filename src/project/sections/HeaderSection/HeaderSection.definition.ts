import { TSectionDefinition } from "@/makasi/Section/Section.types";
import dynamic from "next/dynamic";

const Component = dynamic(() => import("./HeaderSection"));

export const HeaderSectionDefinition: TSectionDefinition = {
  name: "header",
  Component,
};
