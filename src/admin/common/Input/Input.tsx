import { classNameModule } from "@/utils/className/className";
import styles from "./Input.module.scss";
import { HTMLInputTypeAttribute } from "react";
const className = classNameModule(styles);

interface IInputProps<TValue> {
  value: TValue;
  onChange: (value: TValue) => void;
  type?: HTMLInputTypeAttribute;
}

function Input<TValue extends string | number | readonly string[] | undefined>({
  value,
  onChange,
  type,
}: IInputProps<TValue>) {
  return (
    <input
      {...className("Input")}
      type={type}
      value={value}
      onChange={(e) => {
        onChange(e.target.value as TValue);
      }}
    />
  );
}

export default Input;
