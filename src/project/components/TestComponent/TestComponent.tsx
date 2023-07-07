import { FC } from "react";
import { TComponentProps } from "@/makasi/core/Component/Component.types";

import { classNameModule } from "@/utils/className/className";
import styles from "./TestComponent.module.scss";
const className = classNameModule(styles);

const TestComponent: FC<
  TComponentProps<{ title: string; subtitle: string }>
> = ({ data, params }) => {
  return (
    <div {...className("TestComponent")}>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
    </div>
  );
};

export default TestComponent;
