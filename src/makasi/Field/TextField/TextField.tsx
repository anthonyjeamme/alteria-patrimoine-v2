"use client";

import dynamic from "next/dynamic";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { TFieldProps } from "../Field.types";
import {
  useIsEdition,
  useSectionField,
} from "@/makasi/Section/Section.context";

const TextEdition = dynamic(() => import("./TextField.edition"));

export const Text: FC<
  TFieldProps &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ field, ...props }) => {
  const isEdition = useIsEdition();
  const fieldData = useSectionField(field);

  if (isEdition) {
    return <TextEdition field={field} />;
  }

  return (
    <div {...props}>
      <p>{fieldData.value}</p>
    </div>
  );
};
