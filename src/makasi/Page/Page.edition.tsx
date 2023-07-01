import { FC } from "react";
import { TPageData } from "./Page.types";
import { SectionEdition } from "../Section/Section.edition";
import { TSectionDefinition } from "../Section/Section.types";

interface IPageProps {
  pageData: TPageData;
  sectionDefinitions: TSectionDefinition[];
}

export const PageEdition: FC<IPageProps> = ({
  pageData,
  sectionDefinitions,
}) => {
  return (
    <div>
      {pageData.sections.map((sectionData) => {
        const sectionDefinition = sectionDefinitions.find(
          ({ name }) => sectionData.type === name
        );

        if (!sectionDefinition) return null;

        return (
          <SectionEdition key={sectionData.id} sectionData={sectionData}>
            <sectionDefinition.Component
              params={sectionData.params}
              data={null}
            />
          </SectionEdition>
        );
      })}
    </div>
  );
};
