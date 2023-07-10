import { FC, useState } from "react";

import { classNameModule } from "@/utils/className/className";
import styles from "./OneDimensionField.module.scss";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
const className = classNameModule(styles);

interface IOneDimensionFieldProps {
  label: string;
  value?: number;
  onChange: (value: number) => void;
}

export const OneDimensionField: FC<IOneDimensionFieldProps> = ({
  label,
  value = 0,
  onChange,
}) => {
  return (
    <div {...className("OneDimensionField")}>
      <div>
        <span>{label}</span>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            onChange(parseInt(e.target.value, 10));
          }}
        />
      </div>
    </div>
  );
};
