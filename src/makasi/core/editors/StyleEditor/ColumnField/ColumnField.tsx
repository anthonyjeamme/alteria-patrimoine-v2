import { classNameModule } from "@/utils/className/className";
import styles from "./ColumnField.module.scss";
import { FC, useRef, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { useClickOutside } from "@/utils/hooks/useClickOutside/useClickOutside";
const className = classNameModule(styles);

interface IColumnFieldProps {
  label: string;
  value?: [number, string];
  onChange: (value: [number, string]) => void;
}

const ColumnField: FC<IColumnFieldProps> = ({
  label,
  value = [1, "auto"],
  onChange,
}) => {
  return (
    <div {...className("ColumnField")}>
      <div>
        <span>{label}</span>

        <input
          type="number"
          value={value[0]}
          onChange={(e) => {
            onChange([parseInt(e.target.value, 10), value[1]]);
          }}
        />

        <ColumnSizingSelector
          value={value[1]}
          onChange={(sizing) => {
            onChange([value[0], sizing]);
          }}
        />
      </div>
    </div>
  );
};

export default ColumnField;

interface IColumnSizingSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const ColumnSizingSelector: FC<IColumnSizingSelectorProps> = ({
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useClickOutside(isOpen, setIsOpen, rootRef);

  return (
    <div {...className("ColumnSizingSelector")} ref={rootRef}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>
          {value === "auto"
            ? "Auto"
            : value === "1fr"
            ? "Fixé"
            : "Selectionner"}
        </span>
        <span {...className("caret")}>
          <CaretDown />
        </span>
      </button>

      {isOpen && (
        <div {...className("dropdown")}>
          <button
            onClick={() => {
              onChange("auto");
              setIsOpen(false);
            }}
          >
            Auto
          </button>
          <button
            onClick={() => {
              onChange("1fr");
              setIsOpen(false);
            }}
          >
            Fixé
          </button>
        </div>
      )}
    </div>
  );
};
