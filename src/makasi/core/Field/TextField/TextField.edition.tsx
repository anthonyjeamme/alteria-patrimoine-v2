"use client";

import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { TFieldProps } from "../Field.types";

import dynamic from "next/dynamic";
import {
  useFieldContext,
  useFieldEdition,
} from "../../fieldsContext/fieldsContext";

const TextEditor = dynamic(() => import("@/makasi/TextEditor/TextEditor"), {
  ssr: false,
});

export const TextEdition: FC<
  TFieldProps &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ name, ...props }) => {
  const { value } = useFieldContext<string>(name);
  const { setValue } = useFieldEdition<string>(name);

  return (
    <TextEditor
      value={value}
      onChange={(data) => {
        setValue(data);
      }}
    />
  );
};

export default TextEdition;
