import { classNameModule } from "@/utils/className/className";
import styles from "./TextSection.module.scss";
import { CSSProperties, FC } from "react";
import { TSectionProps } from "@/makasi/core/Section/Section.types";
import { Text } from "@/makasi";
import Container from "@/components/common/Container/Container";
const className = classNameModule(styles);

const TextSection: FC<TSectionProps<{ style: CSSProperties }, {}>> = ({
  params,
}) => {
  return (
    <div {...className("TextSection")} style={params?.style}>
      <Container small>
        <Text name="text" />
      </Container>
    </div>
  );
};

export default TextSection;
