"use client";

import { classNameModule } from "@/utils/className/className";
import styles from "./PageGroup.module.scss";
import PageItem from "../PageItem/PageItem";
import { FC } from "react";
import { Plus } from "@phosphor-icons/react";
import { TGroupPage } from "../AdminPages.utils";
const className = classNameModule(styles);

interface IPageGroupProps {
  group: TGroupPage;
}

const PageGroup: FC<IPageGroupProps> = ({ group }) => {
  return (
    <div {...className("PageGroup")} key={group.name}>
      <header>
        <div {...className("name")}>
          <span>/{group.name}/...</span>
        </div>

        <div>
          <button>
            <Plus />
          </button>
        </div>
      </header>

      <div {...className("list")}>
        {group.pages
          .sort((a, b) => a.path.localeCompare(b.path))
          .map((page) => (
            <PageItem key={page.id} path={page.path} />
          ))}
      </div>
    </div>
  );
};

export default PageGroup;
