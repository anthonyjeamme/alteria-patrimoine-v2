import { classNameModule } from "@/utils/className/className";
import styles from "./Select.module.scss";
import { FC, useRef, useState } from "react";
import { useClickOutside } from "@/utils/hooks/useClickOutside/useClickOutside";
import { CaretDown } from "@phosphor-icons/react";
const className = classNameModule(styles);

interface ISelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select: FC<ISelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useClickOutside(isOpen, setIsOpen, rootRef);

  const label =
    options.find((option) => option.value === value)?.label || placeholder;

  return (
    <div {...className("Select")} ref={rootRef}>
      <button
        {...className({ isOpen })}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>{label}</span>
        <CaretDown />
      </button>

      {isOpen && (
        <div {...className("dropdown")}>
          <div>
            {options.map((option) => (
              <button
                {...className({ selected: option.value === value })}
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
