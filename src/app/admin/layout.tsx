import { classNameModule } from "@/utils/className/className";
import styles from "./layout.module.scss";
import { FC, ReactNode } from "react";
import AdminSidebar from "@/admin/AdminSidebar/AdminSidebar";

const className = classNameModule(styles);

const AdminLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main {...className("AdminLayout")}>
      <AdminSidebar />

      <div {...className("content")}>
        <div>{children}</div>
      </div>
    </main>
  );
};

export default AdminLayout;
