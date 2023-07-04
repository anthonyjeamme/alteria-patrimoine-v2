import { Heading, Text } from "@/makasi";

import { classNameModule } from "@/utils/className/className";
import styles from "./HeaderSection.module.scss";
import { FC } from "react";
import { TSectionProps } from "@/makasi/Section/Section.types";
const className = classNameModule(styles);

const HeaderSection: FC<TSectionProps<{ backgroundImage: string }>> = ({
  params,
}) => {
  return (
    <div
      {...className("HeaderSection")}
      style={{
        backgroundImage: `url(${params.backgroundImage})`,
      }}
    >
      <div>
        <Heading field="title" heading={1} />
        <Text field="subtitle" {...className("subtitle")} />
      </div>
    </div>
  );
};

export default HeaderSection;
