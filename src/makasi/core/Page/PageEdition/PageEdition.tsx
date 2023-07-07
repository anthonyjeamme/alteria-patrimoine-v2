"use client";

import uniqid from "uniqid";
import { FC, Fragment } from "react";
import { TPageData } from "../Page.types";
import { SectionEdition } from "../../Section/Section.edition";
import { TSectionDefinition } from "../../Section/Section.types";
import { Plus, Trash } from "@phosphor-icons/react";

import { classNameModule } from "@/utils/className/className";
import styles from "./PageEdition.module.scss";
import SectionPicker, { useSectionPicker } from "./SectionPicker/SectionPicker";
const className = classNameModule(styles);

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
      {!pageData.config.lockSections && (
        <AddSection
          allowedSections={pageData.config.allowedSections}
          sectionDefinitions={sectionDefinitions}
          handleAddSection={(sectionDefinition) => {
            onChange({
              ...pageData,
              sections: [
                {
                  id: uniqid(),
                  type: sectionDefinition.name,
                  fieldsData: {
                    ...sectionDefinition.defaultData?.fieldsData,
                  },
                  params: {
                    ...sectionDefinition.defaultData?.params,
                  },
                },
                ...pageData.sections,
              ],
            });
          }}
        />
      )}
      {pageData.sections.map((sectionData, index) => {
        const sectionDefinition = sectionDefinitions.find(
          ({ name }) => sectionData.type === name
        );

        if (!sectionDefinition) return null;

        return (
          <div key={sectionData.id} style={{ position: "relative" }}>
            <SectionActions
              handleRemove={() => {
                onChange({
                  ...pageData,
                  sections: pageData.sections.filter(
                    (section) => section.id !== sectionData.id
                  ),
                });
              }}
            />

            {!pageData.config.lockSections && (
              <AddSection
                allowedSections={pageData.config.allowedSections}
                position="bottom"
                sectionDefinitions={sectionDefinitions}
                handleAddSection={(sectionDefinition) => {
                  onChange({
                    ...pageData,
                    sections: [
                      ...pageData.sections.slice(0, index + 1),

                      {
                        id: uniqid(),
                        type: sectionDefinition.name,
                        fieldsData: {
                          ...sectionDefinition.defaultData?.fieldsData,
                        },
                        params: {
                          ...sectionDefinition.defaultData?.params,
                        },
                      },
                      ...pageData.sections.slice(index + 1),
                    ],
                  });
                }}
              />
            )}
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
                data={null}
              />
            </SectionEdition>
          </div>
        );
      })}
    </>
  );
};

export default PageEdition;

interface ISectionActionsProps {
  handleRemove: () => void;
}

const SectionActions: FC<ISectionActionsProps> = ({ handleRemove }) => {
  return (
    <div {...className("SectionActions")}>
      <button onClick={handleRemove}>
        <Trash />
      </button>
    </div>
  );
};

const AddSection: FC<{
  sectionDefinitions: TSectionDefinition[];
  handleAddSection: (sectionDefinition: TSectionDefinition) => void;
  position?: "bottom";
  allowedSections?: string[];
}> = ({
  sectionDefinitions,
  handleAddSection,
  position = "top",
  allowedSections,
}) => {
  const sectionPicker = useSectionPicker();

  return (
    <div
      {...className("AddSection", { position })}
      style={
        position === "bottom"
          ? {
              bottom: 0,
              position: "absolute",
              left: 0,
              right: 0,
            }
          : {}
      }
    >
      <button
        onClick={() => {
          if (!sectionPicker.isOpen) sectionPicker.open();
        }}
      >
        <Plus weight="bold" />
      </button>

      <SectionPicker
        allowedSections={allowedSections}
        handleSelectSection={(section) => {
          handleAddSection(section);
        }}
        sectionDefinitions={sectionDefinitions}
        {...sectionPicker}
      />
    </div>
  );
};
