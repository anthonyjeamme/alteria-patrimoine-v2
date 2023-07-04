"use client";

import { FC } from "react";
import { TPagePath } from "@/makasi/Page/Page.types";
import { classNameModule } from "@/utils/className/className";

import PageItem from "./PageItem/PageItem";
import PageGroup from "./PageGroup/PageGroup";
import { groupPages } from "./AdminPages.utils";

import styles from "./AdminPages.module.scss";
import {
  PageEditionModalContext,
  usePageEditionModal,
} from "./PageEditionModal/PageEditionModal";
const className = classNameModule(styles);

interface IAdminPagesProps {
  pagePaths: TPagePath[];
}

const AdminPages: FC<IAdminPagesProps> = ({ pagePaths }) => {
  const groups = groupPages(pagePaths);

  return (
    <PageEditionModalContext>
      <div {...className("AdminPages")}>
        <Header />
        <div {...className("list")}>
          {pagePaths
            .filter((page) => page.path.split("/").length === 2)
            .sort((a, b) => a.path.localeCompare(b.path))
            .map((page) => (
              <PageItem key={page.id} path={page.path} />
            ))}
        </div>

        {groups.map((group) => (
          <PageGroup key={group.name} group={group} />
        ))}
      </div>
    </PageEditionModalContext>
  );
};

export default AdminPages;

const Header = () => {
  const modal = usePageEditionModal();

  return (
    <header>
      <div></div>

      <div>
        <button
          onClick={() => {
            modal.open({
              create: true,
            });
          }}
        >
          Ajouter un page
        </button>
      </div>
    </header>
  );
};
