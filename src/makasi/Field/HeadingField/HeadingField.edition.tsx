import { useSectionField } from "@/makasi/Section/Section.context";
import { TFieldProps } from "../Field.types";
import { FC, createElement } from "react";

export const HeadingFieldEdition: FC<
  TFieldProps & { heading: 1 | 2 | 3 | 4 }
> = ({ field, heading }) => {
  const fieldData = useSectionField(field);

  return createElement(
    `h${heading}`,
    { contentEditable: true },
    fieldData.value
  );
};

export default HeadingFieldEdition;
