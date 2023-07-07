"use client";

import { FC } from "react";
import PageItem from "../PageItem/PageItem";
import { Plus } from "@phosphor-icons/react";
import { TGroupPage } from "../AdminPages.utils";
import { usePageEditionModal } from "../PageEditionModal/PageEditionModal";

import { classNameModule } from "@/utils/className/className";
import styles from "./PageGroup.module.scss";
const className = classNameModule(styles);

interface IPageGroupProps {
  group: TGroupPage;
}

const PageGroup: FC<IPageGroupProps> = ({ group }) => {
  const modal = usePageEditionModal();

  return (
    <div {...className("PageGroup")} key={group.name}>
      <header>
        <div {...className("name")}>
          <span>{group.name}/...</span>
        </div>

        <div>
          <button
            {...className("addPage")}
            onClick={() => {
              if (group.preset) {
                modal.open({
                  create: true,
                  presetName: group.preset.name,
                  pageData: {
                    slug: group.preset.slugPrefix || group.name,
                  },
                });
              } else {
                modal.open({
                  create: true,
                });
              }
            }}
          >
            <Plus /> Ajouter une page
          </button>
        </div>
      </header>

      {group.pages.length > 0 && (
        <div {...className("list")}>
          {group.pages
            .sort((a, b) => a.slug.localeCompare(b.slug))
            .map((page) => (
              <PageItem key={page.id} page={page} />
            ))}
        </div>
      )}
    </div>
  );
};

export default PageGroup;
