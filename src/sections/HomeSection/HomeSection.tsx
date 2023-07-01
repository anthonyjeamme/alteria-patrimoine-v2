import { classNameModule } from "@/utils/className/className";
import styles from "./HomeSection.module.scss";
import { CSSProperties, FC } from "react";
import { TSectionProps } from "@/makasi/Section/Section.types";
import { Heading } from "@/makasi";
import Container from "@/components/common/Container/Container";
import { Content } from "@/makasi/Field/ContentField/ContentField";
const className = classNameModule(styles);

const HomeSection: FC<
  TSectionProps<{
    style: CSSProperties;
    topCurve?: boolean;
    bottomCurve?: boolean;
  }>
> = ({ params }) => {
  return (
    <div {...className("HomeSection")} style={params?.style}>
      {params?.topCurve && (
        <Curve
          color={params?.style.backgroundColor || "white"}
          position="top"
        />
      )}
      {params?.bottomCurve && (
        <Curve
          color={params?.style.backgroundColor || "white"}
          position="bottom"
        />
      )}

      <Container>
        <Heading field="title" heading={2} />
      </Container>

      <Content field="content" />
    </div>
  );
};

export default HomeSection;

const Curve: FC<{ color: string; position: "top" | "bottom" }> = ({
  color,
  position,
}) => (
  <svg
    {...className("Curve", { position })}
    preserveAspectRatio="none"
    viewBox="0 0 1000 10"
    height={10}
  >
    <path
      d="M1000,10H0C155.42,3.54,323.94,0,500,0S844.58,3.54,1000,10Z"
      fill={color}
    />
  </svg>
);
