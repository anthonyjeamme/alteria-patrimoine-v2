import { ComponentType, FC } from "react";
import { TFooterData, TPageData } from "./Page.types";
import { Section } from "../Section/Section";
import { TSectionDefinition } from "../Section/Section.types";

interface IPageProps {
  pageData: TPageData;
  sectionDefinitions: TSectionDefinition[];
  FooterComponent?: ComponentType<{ data: TFooterData }>;
  NavigationBarComponent?: ComponentType<{ data: any }>;
}

export const Page: FC<IPageProps> = async ({
  pageData,
  sectionDefinitions,
  FooterComponent,
  NavigationBarComponent,
}) => {
  const sectionsData = await loadSectionData(pageData, sectionDefinitions);

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
            <sectionDefinition.Component
              params={sectionData.params}
              data={sectionsData[sectionData.id]}
            />
          </Section>
        );
      })}

      {pageData.footer && FooterComponent && (
        <FooterComponent data={pageData.footer} />
      )}
    </div>
  );
};

const loadSectionData = async (
  pageData: TPageData,
  sectionDefinitions: TSectionDefinition[]
) => {
  const data: Record<string, any> = {};

  for (const section of pageData.sections) {
    const definition = sectionDefinitions.find(
      ({ name }) => section.type === name
    );

    if (definition?.getData) {
      data[section.id] = await definition.getData(section.params);
    }
  }
  return data;
};
