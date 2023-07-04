import { classNameModule } from "@/utils/className/className";
import styles from "./Input.module.scss";
import { FC } from "react";
const className = classNameModule(styles);

interface IInputProps {
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<IInputProps> = ({ value, onChange }) => {
  return (
    <input
      {...className("Input")}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default Input;
