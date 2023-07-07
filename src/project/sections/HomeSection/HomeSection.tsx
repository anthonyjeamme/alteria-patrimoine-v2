import { classNameModule } from "@/utils/className/className";
import styles from "./HomeSection.module.scss";
import { CSSProperties, FC } from "react";
import { TSectionProps } from "@/makasi/core/Section/Section.types";
import { Heading } from "@/makasi";
import Container from "@/components/common/Container/Container";
import { Content } from "@/makasi/core/Field/ContentField/ContentField";
const className = classNameModule(styles);

const HomeSection: FC<
  TSectionProps<{
    style: CSSProperties;
    topWave?: boolean;
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

      {params?.topWave && (
        <Wave color={params?.style.backgroundColor || "white"} />
      )}

      <Container>
        <Heading name="title" heading={2} />
      </Container>

      <Content name="content" />
    </div>
  );
};

export default HomeSection;

const Wave: FC<{ color: string }> = ({ color }) => (
  <svg
    {...className("Wave")}
    viewBox="0 -5 1400 45"
    height={20}
    width={"100%"}
    preserveAspectRatio="none"
  >
    <path
      d="M564.5 32.337C390 16.6305 201.5 -4.42482 0 27.173V51H1400V0C1151.5 45.816 739 48.0435 564.5 32.337Z"
      fill={color}
    />
  </svg>
);

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
