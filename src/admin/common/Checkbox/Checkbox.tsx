import { classNameModule } from "@/utils/className/className";
import styles from "./Checkbox.module.scss";
import { FC } from "react";
import { Check } from "@phosphor-icons/react";
const className = classNameModule(styles);

interface ICheckboxProps {
  checked: boolean;
}

const Checkbox: FC<ICheckboxProps> = ({ checked }) => {
  return (
    <div {...className("Checkbox", { checked })}>
      {checked && <Check weight="bold" />}
    </div>
  );
};

export default Checkbox;
