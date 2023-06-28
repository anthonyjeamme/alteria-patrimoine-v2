"use client";

import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { TFieldProps } from "../Field.types";
import { useSectionField } from "@/makasi/Section/Section.context";

export const TextEdition: FC<
  TFieldProps &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ field, ...props }) => {
  const fieldData = useSectionField(field);

  return (
    <div {...props} contentEditable>
      <p>{fieldData.value}</p>
    </div>
  );
};

export default TextEdition;
