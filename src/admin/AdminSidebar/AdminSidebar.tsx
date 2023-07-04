"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { FC, ReactNode, useEffect, useRef } from "react";
import {
  BookOpenText,
  Cards,
  House,
  PresentationChart,
  SignOut,
} from "@phosphor-icons/react";

import { classNameModule } from "@/utils/className/className";
import styles from "./AdminSidebar.module.scss";
const className = classNameModule(styles);

const AdminSidebar = () => {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rootElement = rootRef.current;
    const hoverElement = hoverRef.current;
    if (!rootElement || !hoverElement) return;

    const itemElement = rootElement.querySelector(
      `#${pathname.replace(/\//g, "-")}`
    );

    if (!itemElement) return;

    const { top, height } = itemElement.getBoundingClientRect();
    const rootTop = rootElement.getBoundingClientRect().top;

    hoverElement.style.translate = `0 ${top - rootTop}px`;
    hoverElement.style.height = `${height}px`;
  }, [pathname]);

  return (
    <div {...className("AdminSidebar")}>
      <div ref={rootRef}>
        <div {...className("hover")} ref={hoverRef} />

        <NavigationItem href="/admin" Icon={House}>
          Général
        </NavigationItem>

        <NavigationItem href="/admin/statistics" Icon={PresentationChart}>
          Statistiques
        </NavigationItem>

        <NavigationItem href="/admin/pages" Icon={Cards}>
          Pages
        </NavigationItem>

        <NavigationItem href="/admin/articles" Icon={BookOpenText}>
          Articles
        </NavigationItem>
      </div>
      <div>
        <button>
          <SignOut />

          <span>Se déconnecter</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

interface INavigationItemProps {
  href: string;
  children: ReactNode;
  Icon: any;
}

const NavigationItem: FC<INavigationItemProps> = ({ href, children, Icon }) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <button
        {...className({ isActive: pathname === href })}
        id={href.replace(/\//g, "-")}
      >
        <Icon weight="duotone" />
        {children}
      </button>
    </Link>
  );
};
