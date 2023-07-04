import { classNameModule } from "@/utils/className/className";
import styles from "./Container.module.scss";
import { FC, ReactNode } from "react";
const className = classNameModule(styles);

interface IContainerProps {
  children?: ReactNode;
  large?: boolean;
  small?: boolean;
}

const Container: FC<IContainerProps> = ({
  children,
  large = false,
  small = false,
}) => {
  return <div {...className("Container", { large, small })}>{children}</div>;
};

export default Container;
