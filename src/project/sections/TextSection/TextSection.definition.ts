import { TSectionDefinition } from "@/makasi/Section/Section.types";
import dynamic from "next/dynamic";

const Component = dynamic(() => import("./TextSection"));

export const TextSectionDefinition: TSectionDefinition = {
  name: "text-section",
  Component,
};
