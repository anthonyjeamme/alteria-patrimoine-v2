"use client";

import { FC } from "react";
import { TSectionData } from "./Section.types";

interface ISectionProps {
  sectionData: TSectionData;
}

const SectionEdition: FC<ISectionProps> = ({ sectionData }) => {
  return <section>Section edition {sectionData.id} !</section>;
};

export default SectionEdition;
