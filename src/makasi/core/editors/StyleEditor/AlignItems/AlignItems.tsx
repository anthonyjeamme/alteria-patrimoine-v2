import { classNameModule } from "@/utils/className/className";
import styles from "./AlignItems.module.scss";
import { FC } from "react";
import Selector from "../common/Selector/Selector";
const className = classNameModule(styles);

interface IAlignItemsProps {
  value?: "flex-start" | "flex-end" | "center";
  onChange: (value: "flex-start" | "flex-end" | "center") => void;
}

const AlignItems: FC<IAlignItemsProps> = ({
  value = "flex-start",
  onChange,
}) => {
  return (
    <div {...className("AlignItems")}>
      <div>
        <span>Alignement</span>
        <Selector<"flex-start" | "flex-end" | "center">
          value={value}
          onChange={onChange}
          options={[
            {
              value: "flex-start",
              label: "Gauche",
            },
            {
              value: "center",
              label: "Centré",
            },
            {
              value: "flex-end",
              label: "Droite",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AlignItems;
