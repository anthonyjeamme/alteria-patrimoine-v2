"use client";

import Link from "next/link";

import { classNameModule } from "@/utils/className/className";
import styles from "./PageItem.module.scss";
import { FC } from "react";
import { Gear, Pencil } from "@phosphor-icons/react";

import { usePageEditionModal } from "../PageEditionModal/PageEditionModal";
const className = classNameModule(styles);

interface IPageItemProps {
  path: string;
}

const PageItem: FC<IPageItemProps> = ({ path }) => {
  const pageEditionModal = usePageEditionModal();

  return (
    <div {...className("PageItem")}>
      <div {...className("path")}>
        <span>{path}</span>
      </div>
      <Link href={`/edition/${path}`}>
        <button>
          <Pencil weight="duotone" />
        </button>
      </Link>
      <button
        onClick={() => {
          pageEditionModal.open({
            create: false,
          });
        }}
      >
        <Gear weight="duotone" />
      </button>
    </div>
  );
};

export default PageItem;
