"use client";

import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { TFieldProps } from "../Field.types";
import {
  useSectionEdition,
  useSectionField,
} from "@/makasi/Section/Section.context";
import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("@/makasi/TextEditor/TextEditor"), {
  ssr: false,
});

export const TextEdition: FC<
  TFieldProps &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ field, ...props }) => {
  const fieldData = useSectionField(field);
  const { update } = useSectionEdition(field);

  return (
    <TextEditor
      value={fieldData.value}
      onChange={(data) => {
        update(data);
      }}
    />
  );
};

export default TextEdition;
