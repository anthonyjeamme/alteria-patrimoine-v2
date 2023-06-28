import { FC, ReactNode } from "react";
import { TSectionData } from "./Section.types";
import { SectionContext } from "./Section.context";

interface ISectionProps {
  children: ReactNode;
  sectionData: TSectionData;
}

export const Section: FC<ISectionProps> = ({ sectionData, children }) => {
  return (
    <SectionContext edition={false} sectionData={sectionData}>
      {children}
    </SectionContext>
  );
};
