import { HeadingField, TextField } from "@/makasi";

import { classNameModule } from "@/utils/className/className";
import styles from "./HeaderSection.module.scss";
const className = classNameModule(styles);

const HeaderSection = () => {
  return (
    <div {...className("HeaderSection")}>
      <div>
        <HeadingField name="title" heading={1} />
        <TextField name="subtitle" />
      </div>
    </div>
  );
};

export default HeaderSection;
