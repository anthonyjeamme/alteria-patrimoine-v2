import { Heading, Text } from "@/makasi";

import { classNameModule } from "@/utils/className/className";
import styles from "./HeaderSection.module.scss";
import { FC } from "react";
import { TSectionProps } from "@/makasi/core/Section/Section.types";
const className = classNameModule(styles);

const HeaderSection: FC<
  TSectionProps<{ backgroundImage: string; color: string }>
> = ({ params }) => {
  return (
    <div
      {...className("HeaderSection")}
      style={{
        color: params?.color,
        backgroundImage: `url(${params?.backgroundImage})`,
      }}
    >
      <div>
        <Heading name="title" heading={1} />
        <Text name="subtitle" {...className("subtitle")} />
      </div>
    </div>
  );
};

export default HeaderSection;
