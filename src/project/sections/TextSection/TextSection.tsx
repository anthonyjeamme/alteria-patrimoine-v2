import { classNameModule } from "@/utils/className/className";
import styles from "./TextSection.module.scss";
import { FC } from "react";
import { TSectionProps } from "@/makasi/core/Section/Section.types";
import { Text } from "@/makasi";
import Container from "@/components/common/Container/Container";
const className = classNameModule(styles);

const TextSection: FC<TSectionProps<{}>> = () => {
  return (
    <div {...className("TextSection")}>
      <Container small>
        <Text name="text" />
      </Container>
    </div>
  );
};

export default TextSection;
