import { FC, ReactNode } from "react";
import { TSectionData } from "./Section.types";
import { SectionContext } from "./Section.context";

interface ISectionProps {
  children: ReactNode;
  sectionData: TSectionData;
  handleUpdate: (data: TSectionData) => void;
}

export const SectionEdition: FC<ISectionProps> = ({
  sectionData,
  children,
  handleUpdate,
}) => (
  <SectionContext
    edition={true}
    sectionData={sectionData}
    handleUpdate={(data) => {
      handleUpdate(data);
    }}
  >
    {children}
  </SectionContext>
);
