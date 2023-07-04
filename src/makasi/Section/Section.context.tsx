"use client";

import { FC, ReactNode, createContext, useContext } from "react";
import { TSectionData } from "./Section.types";

const sectionContext = createContext<
  TSectionData & { edition: boolean; handleUpdate?: (data: any) => void }
  // @ts-ignore
>({});

export const SectionContext: FC<{
  children: ReactNode;
  sectionData: TSectionData;
  edition?: boolean;
  handleUpdate?: (data: any) => void;
}> = ({ children, sectionData, edition = false, handleUpdate }) => {
  return (
    <sectionContext.Provider
      value={{
        ...sectionData,
        edition,
        handleUpdate,
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
    value: fieldData?.value,
    params: fieldData?.params || {},
  };
};

export const useSectionEdition = (field: string) => {
  const sectionData = useContext(sectionContext);
  const { handleUpdate } = useContext(sectionContext);

  return {
    update: (data: any) => {
      if (!handleUpdate) return;

      handleUpdate({
        ...sectionData,
        fieldsData: {
          ...sectionData.fieldsData,
          [field]: {
            params: {},
            value: data,
          },
        },
      });
    },
  };
};
