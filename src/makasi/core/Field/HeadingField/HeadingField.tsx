"use client";

import { FC, createElement } from "react";
import { TFieldProps } from "../Field.types";
import { useIsEdition } from "@/makasi/core/Section/Section.context";
import dynamic from "next/dynamic";
import { useFieldContext } from "../../fieldsContext/fieldsContext";

const HeadingFieldEdition = dynamic(() => import("./HeadingField.edition"));

export const Heading: FC<TFieldProps & { heading: 1 | 2 | 3 | 4 }> = ({
  name,
  heading,
}) => {
  const { value } = useFieldContext<string>(name);
  const isEdition = useIsEdition();

  if (isEdition) {
    return <HeadingFieldEdition name={name} heading={heading} />;
  }

  return createElement(`h${heading}`, {
    dangerouslySetInnerHTML: { __html: value },
  });
};
