import { classNameModule } from "@/utils/className/className";
import styles from "./Container.module.scss";
import { FC, ReactNode } from "react";
const className = classNameModule(styles);

interface IContainerProps {
  children?: ReactNode;
  large?: boolean;
}

const Container: FC<IContainerProps> = ({ children, large = false }) => {
  return <div {...className("Container", { large })}>{children}</div>;
};

export default Container;
