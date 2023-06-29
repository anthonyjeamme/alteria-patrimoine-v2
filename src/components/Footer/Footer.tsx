import { classNameModule } from "@/utils/className/className";
import styles from "./Footer.module.scss";
import Content from "@/makasi/Content/Content";
import { FC } from "react";
import { TFooterData } from "@/makasi/Page/Page.types";
const className = classNameModule(styles);

interface IFooterProps {
  data: TFooterData;
}

const Footer: FC<IFooterProps> = ({ data }) => {
  return (
    <div {...className("Footer")}>
      <Content nodes={data.content} />
    </div>
  );
};

export default Footer;
