import { classNameModule } from "@/utils/className/className";
import styles from "./ArticleItem.module.scss";
import { FC } from "react";
const className = classNameModule(styles);

interface IArticleItemProps {
  id: string;
  miniature: string;
  title: string;
}

const ArticleItem: FC<IArticleItemProps> = ({ id, miniature, title }) => {
  return (
    <div {...className("ArticleItem")}>
      <div>
        <img src={miniature} />
      </div>

      <div {...className("text")}>{title}</div>
    </div>
  );
};

export default ArticleItem;
