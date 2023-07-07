import { classNameModule } from "@/utils/className/className";
import styles from "./SectionPicker.module.scss";
import { TSectionDefinition } from "@/makasi/core/Section/Section.types";
import { FC, useRef, useState } from "react";
import { useClickOutside } from "@/utils/hooks/useClickOutside/useClickOutside";
const className = classNameModule(styles);

type TUseSectionHook = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
  toggle: () => void;
};

export const useSectionPicker = (): TUseSectionHook => {
  const [state, setState] = useState({ isOpen: false });

  return {
    isOpen: state.isOpen,
    close: () => setState({ isOpen: false }),
    open: () => setState({ isOpen: true }),
    toggle: () => setState({ isOpen: !state.isOpen }),
  };
};

interface ISectionPickerProps {
  sectionDefinitions: TSectionDefinition[];
  handleSelectSection: (section: TSectionDefinition) => void;
  allowedSections?: string[];
}

const SectionPicker: FC<ISectionPickerProps & TUseSectionHook> = ({
  sectionDefinitions,
  isOpen,
  close,
  handleSelectSection,
  allowedSections,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useClickOutside(isOpen, close, rootRef);

  if (!isOpen) return null;

  return (
    <div {...className("SectionPicker")} ref={rootRef}>
      <div>
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
                  handleSelectSection(sectionDefinition);
                  close();
                }}
              >
                <img src={sectionDefinition.imagePreview} />

                <div {...className("label")}>{sectionDefinition.label}</div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionPicker;
