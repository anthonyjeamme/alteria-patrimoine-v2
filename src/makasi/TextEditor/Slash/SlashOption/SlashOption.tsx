import { FC } from "react";
import { MentionTypeaheadOption } from "../Slash.types";

import { classNameModule } from "@/utils/className/className";
import styles from "./SlashOption.module.scss";
const className = classNameModule(styles);

export const SlashOption: FC<{
  option: MentionTypeaheadOption;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}> = ({ option, isSelected, onClick, onMouseEnter }) => {
  return (
    <button
      {...className("SlashOption", { isSelected })}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      tabIndex={-1}
    >
      <span {...className("icon")}>
        <option.Icon />
      </span>

      <span {...className("text")}>
        <span {...className("label")}>{option.label}</span>
        {option.description && (
          <span {...className("description")}>{option.description}</span>
        )}
      </span>
    </button>
  );
};
