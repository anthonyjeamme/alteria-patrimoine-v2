"use client";

import { FC } from "react";
import { TPageData, TPagePath } from "@/makasi/core/Page/Page.types";
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
  useAdminPagesContext,
  withAdminPagesContext,
} from "./AdminPagesContext/AdminPagesContext";
import { Plus } from "@phosphor-icons/react";
const className = classNameModule(styles);

interface IAdminPagesProps {
  pagePaths: TPagePath[];
}

const AdminPages: FC<{}> = ({}) => {
  const { pages: pagePaths } = useAdminPagesContext();

  const groups = groupPages(pagePaths, pagePresets);

  return (
    <PageEditionModalContext pagePresets={pagePresets} pagePaths={pagePaths}>
      <div {...className("AdminPages")}>
        <Header />
        <div {...className("list")}>
          {pagePaths
            .filter((page) => page.slug.split("/").length === 2)
            .filter(
              (page) =>
                !pagePresets.find((preset) => page.slug === preset.slugPrefix)
            )
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
          {...className("addPage")}
          onClick={() => {
            modal.open({
              create: true,
            });
          }}
        >
          <Plus />
          Ajouter un page
        </button>
      </div>
    </header>
  );
};

export type TPagePreset = {
  slugPrefix?: string;
  defaultPageData: Partial<TPageData>;
  name: string;
  label: string;
};

const pagePresets: TPagePreset[] = [
  {
    defaultPageData: {
      config: {
        lockSections: false,
        allowedSections: ["header", "text-section"],
      },
      sections: [],
    },
    name: "standard",
    label: "Standard",
  },
  {
    slugPrefix: "/nos-solutions",
    defaultPageData: {
      config: {
        lockSections: true,
        allowedSections: [],
      },
      sections: [
        {
          id: "text",
          type: "text",
          fieldsData: {},
          params: {},
        },
      ],
    },
    name: "solutions",
    label: "Nos Solutions",
  },
  {
    defaultPageData: {
      config: {
        lockSections: true,
        allowedSections: [],
      },
      sections: [
        {
          id: "a",
          type: "legal-header",
          fieldsData: {
            title: {
              value: "Titre",
              params: {},
            },
          },
          params: {},
        },

        {
          type: "text-section",
          id: "x",
          params: {},
          fieldsData: {
            text: {
              value: {
                root: {
                  type: "root",
                  children: [
                    {
                      type: "paragraph",
                      children: [
                        {
                          type: "text",
                          text: "Contenu",
                          style: "",
                          mode: "normal",
                          format: 0,
                          detail: 0,
                        },
                      ],
                    },
                  ],
                },
              },
              params: {},
            },
          },
        },
      ],
    },
    name: "legal",
    label: "Page Légale",
  },
];
