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
import {
  AdminPagesContext,
  useAdminPagesContext,
  withAdminPagesContext,
} from "./AdminPagesContext/AdminPagesContext";
const className = classNameModule(styles);

interface IAdminPagesProps {
  pagePaths: TPagePath[];
}

const AdminPages: FC<{}> = ({}) => {
  const { pages: pagePaths } = useAdminPagesContext();
  const groups = groupPages(pagePaths);

  return (
    <PageEditionModalContext>
      <div {...className("AdminPages")}>
        <Header />
        <div {...className("list")}>
          {pagePaths
            .filter((page) => page.slug.split("/").length === 2)
            .sort((a, b) => a.slug.localeCompare(b.slug))
            .map((page) => (
              <PageItem key={page.id} page={page} />
            ))}
        </div>

        {groups.map((group) => (
          <PageGroup key={group.name} group={group} />
        ))}
      </div>
    </PageEditionModalContext>
  );
};

export default withAdminPagesContext(AdminPages);

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
