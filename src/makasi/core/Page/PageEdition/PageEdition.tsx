"use client";

import { FC, useEffect, useState } from "react";
import { TPageData } from "../Page.types";
import { SectionEdition } from "../../Section/Section.edition";
import { TSectionData, TSectionDefinition } from "../../Section/Section.types";

import SectionPicker, {
  TUseSectionHook,
  useSectionPicker,
} from "./SectionPicker/SectionPicker";
import SectionEditionWrapper from "./SectionEditionWrapper/SectionEditionWrapper";
import {
  generateDefaultSectionData,
  insertElement,
  moveElement,
} from "./PageEdition.utils";

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
  const sectionPicker = useSectionPicker();
  return (
    <>
      <SectionPicker
        allowedSections={pageData.config.allowedSections}
        handleSelectSection={(index, section) => {
          onChange({
            ...pageData,
            sections: insertElement(
              pageData.sections,
              generateDefaultSectionData(section),
              index
            ),
          });
        }}
        sectionDefinitions={sectionDefinitions}
        {...sectionPicker}
      />

      {pageData.sections.map((sectionData, index) => {
        const sectionDefinition = sectionDefinitions.find(
          ({ name }) => sectionData.type === name
        );

        if (!sectionDefinition) return null;

        return (
          <Section
            key={sectionData.id}
            index={index}
            onChange={onChange}
            pageData={pageData}
            sectionData={sectionData}
            sectionDefinition={sectionDefinition}
            sectionPicker={sectionPicker}
          />
        );
      })}
    </>
  );
};

export default PageEdition;

interface ISectionProps {
  index: number;
  pageData: TPageData;
  onChange: (pageData: TPageData) => void;
  sectionData: TSectionData;
  sectionPicker: TUseSectionHook;
  sectionDefinition: TSectionDefinition;
}

const Section: FC<ISectionProps> = ({
  index,
  pageData,
  onChange,
  sectionData,
  sectionPicker,
  sectionDefinition,
}) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (sectionDefinition.getData) {
      sectionDefinition.getData(sectionData.params).then(setData);
    }
  }, []);

  return (
    <div key={sectionData.id} style={{ position: "relative" }}>
      <SectionEditionWrapper
        index={index}
        pageConfig={pageData.config}
        handleAddSection={(targetIndex) => {
          sectionPicker.open(targetIndex);
        }}
        handleMoveSection={(targetIndex) => {
          onChange({
            ...pageData,
            sections: moveElement(pageData.sections, index, targetIndex),
          });
        }}
        handleRemove={() => {
          onChange({
            ...pageData,
            sections: pageData.sections.filter(
              (section) => section.id !== sectionData.id
            ),
          });
        }}
        handleUpdateParams={() => {}}
      >
        <SectionEdition
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
            data={data}
          />
        </SectionEdition>
      </SectionEditionWrapper>
    </div>
  );
};
