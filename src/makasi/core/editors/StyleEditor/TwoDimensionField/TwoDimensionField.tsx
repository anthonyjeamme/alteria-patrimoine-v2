import { FC, useState } from "react";

import { classNameModule } from "@/utils/className/className";
import styles from "./TwoDimensionField.module.scss";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
const className = classNameModule(styles);

interface ITwoDimensionFieldProps {
  label: string;
  value?: [number, number];
  onChange: (value: [number, number]) => void;
}

export const TwoDimensionField: FC<ITwoDimensionFieldProps> = ({
  label,
  value = [0, 0],
  onChange,
}) => {
  const [mode, setMode] = useState<"merged" | "detailed">("merged");

  return (
    <div {...className("TwoDimensionField")}>
      <div>
        <span>{label}</span>

        {mode === "detailed" ? (
          <>
            <input
              type="number"
              value={value[0]}
              onChange={(e) => {
                onChange([parseInt(e.target.value, 10), value[1]]);
              }}
            />
            <input
              type="number"
              value={value[1]}
              onChange={(e) => {
                onChange([value[0], parseInt(e.target.value, 10)]);
              }}
            />
          </>
        ) : (
          <>
            <input
              type="number"
              value={value[0]}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                onChange([value, value]);
              }}
            />
          </>
        )}
        <button
          onClick={() => {
            if (mode === "detailed") {
              onChange([value[0], value[0]]);
            }
            setMode(mode === "merged" ? "detailed" : "merged");
          }}
        >
          {mode === "merged" ? <CaretRight /> : <CaretLeft />}
        </button>
      </div>
    </div>
  );
};
