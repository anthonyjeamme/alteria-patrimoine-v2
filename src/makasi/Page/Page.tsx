import { FC } from "react";
import { TPageData } from "./Page.types";
import { Section } from "../Section/Section";
import { TSectionDefinition } from "../Section/Section.types";

interface IPageProps {
  pageData: TPageData;
  sectionDefinitions: TSectionDefinition[];
}

export const Page: FC<IPageProps> = ({ pageData, sectionDefinitions }) => {
  return (
    <div>
      {pageData.sections.map((sectionData) => {
        const sectionDefinition = sectionDefinitions.find(
          ({ name }) => sectionData.type === name
        );

        if (!sectionDefinition) return null;

        return (
          <Section key={sectionData.id} sectionData={sectionData}>
            <sectionDefinition.Component params={sectionData.params} />
          </Section>
        );
      })}
    </div>
  );
};
