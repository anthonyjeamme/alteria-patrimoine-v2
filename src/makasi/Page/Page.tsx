import { ComponentType, FC } from "react";
import { TPageData } from "./Page.types";
import { Section } from "../Section/Section";
import { TSectionDefinition } from "../Section/Section.types";

interface IPageProps {
  pageData: TPageData;
  sectionDefinitions: TSectionDefinition[];
  FooterComponent?: ComponentType<{ data: any }>;
  NavigationBarComponent?: ComponentType<{ data: any }>;
}

export const Page: FC<IPageProps> = ({
  pageData,
  sectionDefinitions,
  FooterComponent,
  NavigationBarComponent,
}) => {
  return (
    <div>
      {pageData.navigationBar && NavigationBarComponent && (
        <NavigationBarComponent data={pageData.navigationBar} />
      )}

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

      {pageData.footer && FooterComponent && (
        <FooterComponent data={pageData.footer} />
      )}
    </div>
  );
};
