import { classNameModule } from "@/utils/className/className";
import styles from "./ContainerField.module.scss";
import Selector from "../common/Selector/Selector";
import { FC } from "react";
const className = classNameModule(styles);

interface IContainerFieldProps {
  label: string;
  value?: string;
  onChange: (data: string) => void;
}

const ContainerField: FC<IContainerFieldProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div {...className("ContainerField")}>
      <div>
        <div {...className("label")}>{label}</div>
        <Selector
          value={value || "medium"}
          onChange={(containerSize: any) => {
            onChange(containerSize);
          }}
          options={[
            {
              value: "small",
              label: "Petit",
            },
            {
              value: "medium",
              label: "Moyen",
            },
            {
              value: "large",
              label: "Large",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ContainerField;
