import { classNameModule } from "@/utils/className/className";
import styles from "./ArticlesSection.module.scss";
import { CSSProperties, FC } from "react";
import { TSectionProps } from "@/makasi/core/Section/Section.types";
import { Heading } from "@/makasi";
import Container from "@/components/common/Container/Container";
import { Icon } from "@/utils/Icon/Icon";
import Link from "next/link";

const className = classNameModule(styles);

export type TArticleItem = {
  id: string;
  title: string;
  slug: string;
  description: string;
  miniature: string;
};

const ArticlesSection: FC<
  TSectionProps<{ style: CSSProperties }, TArticleItem[]>
> = ({ params, data }) => {
  return (
    <div {...className("ArticlesSection")} style={params.style}>
      <Container>
        <Heading name="title" heading={2} />

        <div {...className("list")}>
          {data?.map((item) => (
            <ArticleItem key={item.id} item={item} />
          ))}
        </div>

        <div {...className("seeAll")}>
          <Link href={"/articles"}>
            <button>
              Tous les articles <Icon name="ArrowRight" />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ArticlesSection;

interface IArticleItemProps {
  item: TArticleItem;
}

const ArticleItem: FC<IArticleItemProps> = ({ item }) => {
  return (
    <Link {...className("ArticleItem")} href={`/articles/${item.slug}`}>
      <div {...className("miniature")}>
        <img src={item.miniature} alt={item.title} />
      </div>

      <div {...className("text")}>
        <div {...className("title")}>{item.title}</div>
        <div {...className("description")}>{item.description}</div>
      </div>
    </Link>
  );
};
