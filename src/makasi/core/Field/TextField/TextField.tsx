"use client";

import dynamic from "next/dynamic";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { TFieldProps } from "../Field.types";
import { useIsEdition } from "@/makasi/core/Section/Section.context";
import { TextRender } from "@/makasi/TextEditor/TextRender/TextRender";
import { useFieldContext } from "../../fieldsContext/fieldsContext";

const TextEdition = dynamic(() => import("./TextField.edition"));

export const Text: FC<
  TFieldProps &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ name, ...props }) => {
  const { value } = useFieldContext<any>(name);

  const isEdition = useIsEdition();

  if (isEdition) {
    return <TextEdition name={name} />;
  }

  return <TextRender data={value} />;
};
