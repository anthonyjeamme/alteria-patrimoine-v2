import { classNameModule } from "@/utils/className/className";
import styles from "./ColorField.module.scss";
import { FC, useRef, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { useClickOutside } from "@/utils/hooks/useClickOutside/useClickOutside";
const className = classNameModule(styles);

interface IColorFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ColorField: FC<IColorFieldProps> = ({ label, value, onChange }) => {
  return (
    <div {...className("ColorField")}>
      <div>
        <span>{label}</span>
        <ColorSelector value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default ColorField;

interface IColorSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const ColorSelector: FC<IColorSelectorProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useClickOutside(isOpen, setIsOpen, rootRef);

  const valueLabel = value
    ? options.find((option) => option.value === value)?.label
    : undefined;

  return (
    <div {...className("ColorSelector")} ref={rootRef}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{valueLabel || "Select"}</span>
        <span {...className("caret")}>
          <CaretDown />
        </span>
      </button>

      {isOpen && (
        <div {...className("dropdown")}>
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                // @ts-ignore
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              <div>
                <div
                  {...className("color")}
                  style={{
                    backgroundColor: option.value,
                  }}
                ></div>
              </div>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const options = [
  {
    value: "white",
    label: "Blanc",
  },
  {
    value: "var(--light)",
    label: "Clair",
  },
  {
    value: "var(--dark)",
    label: "Foncé",
  },
  {
    value: "var(--primary)",
    label: "Couleur primaire",
  },
  {
    value: "var(--secondary)",
    label: "Couleur secondaire",
  },
  {
    value: "var(--danger)",
    label: "Rouge",
  },
  {
    value: "var(--success)",
    label: "Vert",
  },
  {
    value: undefined,
    label: "Vide",
  },
];
