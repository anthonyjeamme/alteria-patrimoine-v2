import { FC } from "react";
import { TComponentProps } from "@/makasi/core/Component/Component.types";

import { classNameModule } from "@/utils/className/className";
import styles from "./TestComponent.module.scss";
import { Heading, Text } from "@/makasi";
const className = classNameModule(styles);

const TestComponent: FC<
  TComponentProps<{ title: string; subtitle: string }>
> = ({ data, params }) => {
  return (
    <div {...className("TestComponent")}>
      <Heading name="title" heading={2} />
      <Text name="text" />
    </div>
  );
};

export default TestComponent;
