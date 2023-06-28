"use client";

import { FC, ReactNode } from "react";
import { TSectionData, TSectionDefinition } from "./Section.types";

interface ISectionProps {
  children: ReactNode;
  sectionData: TSectionData;
}

export const Section: FC<ISectionProps> = ({ sectionData, children }) => {
  return <section>{children}</section>;
};
