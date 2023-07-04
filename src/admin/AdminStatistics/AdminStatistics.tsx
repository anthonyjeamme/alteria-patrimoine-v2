"use client";

import { classNameModule } from "@/utils/className/className";
import styles from "./AdminStatistics.module.scss";
import { TPagePath } from "@/makasi/Page/Page.types";
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
          <StatisticItem key={page.id} path={page.path} value={10} />
        ))}
      </div>

      <h2>Acquisition</h2>
      <div {...className("pages")}>
        <StatisticItem path="Google" value={10} />
        <StatisticItem path="LinkedIn" value={10} />
        <StatisticItem path="Facebook" value={10} />
        <StatisticItem path="Lien Direct" value={10} />
      </div>
    </div>
  );
};

export default AdminStatistics;

interface IStatisticItemProps {
  path: string;
  value: number;
}

const StatisticItem: FC<IStatisticItemProps> = ({ path, value }) => {
  return (
    <div {...className("StatisticItem")}>
      <div {...className("path")}>
        <span>{path}</span>
      </div>

      <div {...className("value")}>{value} vues</div>
    </div>
  );
};
