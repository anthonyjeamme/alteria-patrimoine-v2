import { classNameModule } from "@/utils/className/className";
import styles from "./Selector.module.scss";
import { FC, useRef, useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { useClickOutside } from "@/utils/hooks/useClickOutside/useClickOutside";
const className = classNameModule(styles);

interface ISelectorProps<TValue> {
  value: TValue;
  onChange: (value: TValue) => void;
  options: { label: string; value: TValue }[];
}

function Selector<TValue extends string>({
  value,
  onChange,
  options,
}: ISelectorProps<TValue>) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useClickOutside(isOpen, setIsOpen, rootRef);

  const valueLabel = value
    ? options.find((option) => option.value === value)?.label
    : undefined;

  return (
    <div {...className("Selector")} ref={rootRef}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{valueLabel || "Selectionner"}</span>
        <span {...className("caret")}>
          <CaretDown />
        </span>
      </button>
      {isOpen && (
        <div {...className("dropdown")}>
          {options.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => {
                onChange(value);
                setIsOpen(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Selector;
