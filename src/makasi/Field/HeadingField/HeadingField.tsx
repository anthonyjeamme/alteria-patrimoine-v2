import { FC } from "react";
import { TFieldProps } from "../Field.types";

export const HeadingField: FC<TFieldProps & { heading: 1 | 2 | 3 | 4 }> = ({
  name,
  heading,
}) => {
  return (
    <div>
      HeadingField {name} | {heading}
    </div>
  );
};
