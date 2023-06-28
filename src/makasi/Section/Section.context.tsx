"use client";

import { FC, ReactNode, createContext, useContext } from "react";
import { TSectionData } from "./Section.types";

// @ts-ignore
const sectionContext = createContext<TSectionData & { edition: boolean }>({});

export const SectionContext: FC<{
  children: ReactNode;
  sectionData: TSectionData;
  edition?: boolean;
}> = ({ children, sectionData, edition = false }) => {
  return (
    <sectionContext.Provider
      value={{
        ...sectionData,
        edition,
      }}
    >
      {children}
    </sectionContext.Provider>
  );
};

export const useIsEdition = () => {
  const sectionData = useContext(sectionContext);

  return sectionData.edition || false;
};

export const useSectionField = (name: string) => {
  const sectionData = useContext(sectionContext);

  const fieldData = sectionData.fieldsData[name];

  return {
    value: fieldData.value,
    params: fieldData.params || {},
  };
};
