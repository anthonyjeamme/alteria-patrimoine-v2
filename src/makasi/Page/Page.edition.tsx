"use client";

import { FC } from "react";
import { TPageData } from "./Page.types";
import { SectionEdition } from "../Section/Section.edition";
import { TSectionDefinition } from "../Section/Section.types";

interface IPageProps {
  pageData: TPageData;
  sectionDefinitions: TSectionDefinition[];
  onChange: (pageData: TPageData) => void;
}

export const PageEdition: FC<IPageProps> = ({
  pageData,
  sectionDefinitions,
  onChange,
}) => {
  return (
    <>
      {pageData.sections.map((sectionData) => {
        const sectionDefinition = sectionDefinitions.find(
          ({ name }) => sectionData.type === name
        );

        if (!sectionDefinition) return null;

        return (
          <SectionEdition
            key={sectionData.id}
            sectionData={sectionData}
            handleUpdate={(data) => {
              onChange({
                ...pageData,
                sections: pageData.sections.map((section) =>
                  section.id === data.id ? data : section
                ),
              });
            }}
          >
            <sectionDefinition.Component
              params={sectionData.params}
              data={null}
            />
          </SectionEdition>
        );
      })}
    </>
  );
};

export default PageEdition;
