"use client";

import dynamic from "next/dynamic";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { TFieldProps } from "../Field.types";
import { TextRender } from "@/makasi/TextEditor/TextRender/TextRender";
import { useFieldContext } from "../../fieldsContext/fieldsContext";
import { useEditionContext } from "../../contexts/EditionContext/EditionContext";

const TextEdition = dynamic(() => import("./TextField.edition"));

export const Text: FC<
  TFieldProps &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ name }) => {
  const { value } = useFieldContext<any>(name);

  const { edition } = useEditionContext();

  if (edition) {
    return <TextEdition name={name} />;
  }

  return <TextRender data={value} />;
};
