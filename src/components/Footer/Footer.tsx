import { classNameModule } from "@/utils/className/className";
import styles from "./Footer.module.scss";
import Content from "@/makasi/core/Content/Content";
import { FC } from "react";
import { TFooterData } from "@/makasi/core/Page/Page.types";
const className = classNameModule(styles);

interface IFooterProps {
  data: TFooterData;
}

const Footer: FC<IFooterProps> = ({ data }) => {
  if (!data?.nodes) return null;

  return (
    <div {...className("Footer")}>
      <Content nodes={data.nodes} />
    </div>
  );
};

export default Footer;
