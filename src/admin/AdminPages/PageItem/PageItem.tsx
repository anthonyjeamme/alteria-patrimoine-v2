"use client";

import Link from "next/link";

import { classNameModule } from "@/utils/className/className";
import styles from "./PageItem.module.scss";
import { FC } from "react";
import { EyeSlash, Gear, Pencil } from "@phosphor-icons/react";

import { usePageEditionModal } from "../PageEditionModal/PageEditionModal";
import { TPagePath } from "@/makasi/core/Page/Page.types";
const className = classNameModule(styles);

interface IPageItemProps {
  page: Partial<TPagePath>;
}

const PageItem: FC<IPageItemProps> = ({ page }) => {
  const pageEditionModal = usePageEditionModal();
  return (
    <div {...className("PageItem", { hidden: !page.public })}>
      {!page.public && (
        <span {...className("hidden")}>
          <EyeSlash />
        </span>
      )}

      <div {...className("path")}>
        <span>{page.slug}</span>
      </div>
      <Link href={`/edition/${page.slug}`}>
        <button>
          <Pencil weight="duotone" />
        </button>
      </Link>
      <button
        onClick={() => {
          pageEditionModal.open({
            create: false,
            pageData: page,
          });
        }}
      >
        <Gear weight="duotone" />
      </button>
    </div>
  );
};

export default PageItem;
