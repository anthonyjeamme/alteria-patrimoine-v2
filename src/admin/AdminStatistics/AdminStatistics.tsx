"use client";

import { classNameModule } from "@/utils/className/className";
import styles from "./AdminStatistics.module.scss";
import { TPagePath } from "@/makasi/core/Page/Page.types";
import { FC } from "react";
const className = classNameModule(styles);

interface IAdminStatisticsProps {
  pagePaths: TPagePath[];
}

const AdminStatistics: FC<IAdminStatisticsProps> = ({ pagePaths }) => {
  return (
    <div {...className("AdminStatistics")}>
      <header>
        <div>
          <span {...className("value")}>100</span>
          sessions
        </div>
        <div>
          <span {...className("value")}>50</span> visiteurs uniques
        </div>
      </header>

      <h2>Vues par pages</h2>
      <div {...className("pages")}>
        {pagePaths.map((page) => (
          <StatisticItem
            key={page.id}
            name={page.slug}
            value={10}
            keyType="slug"
          />
        ))}
      </div>

      <h2>Acquisition</h2>
      <div {...className("pages")}>
        <StatisticItem name="Google" value={10} />
        <StatisticItem name="LinkedIn" value={10} />
        <StatisticItem name="Facebook" value={10} />
        <StatisticItem name="Lien Direct" value={10} />
      </div>
    </div>
  );
};

export default AdminStatistics;

interface IStatisticItemProps {
  name: string;
  value: number;
  keyType?: "slug" | "other";
}

const StatisticItem: FC<IStatisticItemProps> = ({
  name,
  value,
  keyType = "other",
}) => {
  return (
    <div {...className("StatisticItem", { keyType })}>
      <div {...className("path")}>
        <span>{name}</span>
      </div>

      <div {...className("value")}>{value} vues</div>
    </div>
  );
};
