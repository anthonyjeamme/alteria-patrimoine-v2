import { TSectionDefinition } from "@/makasi/Section/Section.types";
import dynamic from "next/dynamic";

const Component = dynamic(() => import("./HomeSection"));

export const HomeSectionDefinition: TSectionDefinition = {
  name: "home-section",
  Component,
};
