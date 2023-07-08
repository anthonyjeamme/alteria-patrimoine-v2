import { FC, useState } from "react";
import { createPortal } from "react-dom";

import { TSectionDefinition } from "@/makasi/core/Section/Section.types";
import { classNameModule } from "@/utils/className/className";
import { X } from "@phosphor-icons/react";

import styles from "./SectionPicker.module.scss";
const className = classNameModule(styles);

export type TUseSectionHook = {
  isOpen: boolean;
  close: () => void;
  open: (index: number) => void;
  toggle: (index: number) => void;
  index: number;
};

export const useSectionPicker = (): TUseSectionHook => {
  const [state, setState] = useState({ isOpen: false, index: -1 });

  return {
    isOpen: state.isOpen,
    close: () => setState({ isOpen: false, index: -1 }),
    open: (index: number) => setState({ isOpen: true, index }),
    toggle: (index: number) => setState({ isOpen: !state.isOpen, index }),
    index: state.index,
  };
};

interface ISectionPickerProps {
  sectionDefinitions: TSectionDefinition[];
  handleSelectSection: (index: number, section: TSectionDefinition) => void;
  allowedSections?: string[];
}

const SectionPicker: FC<ISectionPickerProps & TUseSectionHook> = ({
  sectionDefinitions,
  isOpen,
  close,
  handleSelectSection,
  allowedSections,
  index,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div {...className("SectionPicker")}>
      <button {...className("CloseButton")} onClick={close}>
        <X weight="bold" />
      </button>

      <div>
        <h2>Nouvelle section</h2>
        <div>
          {sectionDefinitions
            .filter((sectionDefinition) =>
              !allowedSections || allowedSections.length === 0
                ? true
                : allowedSections.includes(sectionDefinition.name)
            )
            .map((sectionDefinition) => (
              <button
                key={sectionDefinition.name}
                onClick={() => {
                  handleSelectSection(index, sectionDefinition);
                  close();
                }}
              >
                <img src={sectionDefinition.imagePreview} />

                <div {...className("label")}>{sectionDefinition.label}</div>
              </button>
            ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SectionPicker;
