import { classNameModule } from "@/utils/className/className";
import styles from "./LegalHeaderSection.module.scss";
import { FC } from "react";
import { TSectionProps } from "@/makasi/core/Section/Section.types";
import { Heading } from "@/makasi";
import Container from "@/components/common/Container/Container";
const className = classNameModule(styles);

const LegalHeaderSection: FC<TSectionProps<{}>> = () => {
  return (
    <div {...className("LegalHeaderSection")}>
      <Container>
        <Heading name="title" heading={1} />
      </Container>

      <Curve color="var(--dark)" />
    </div>
  );
};

export default LegalHeaderSection;

const Curve: FC<{ color: string }> = ({ color }) => (
  <svg {...className("Curve")} preserveAspectRatio="none" viewBox="0 0 1000 10">
    <path
      d="M1000,10H0C155.42,3.54,323.94,0,500,0S844.58,3.54,1000,10Z"
      fill={color}
    />
  </svg>
);
