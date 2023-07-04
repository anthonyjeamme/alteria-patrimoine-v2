import { classNameModule } from "@/utils/className/className";
import styles from "./AdminGeneral.module.scss";
const className = classNameModule(styles);

const AdminGeneral = () => {
  return <div {...className("AdminGeneral")}>AdminGeneral</div>;
};

export default AdminGeneral;
