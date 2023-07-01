"use client";

import { FC, createElement } from "react";
import { TFieldProps } from "../Field.types";
import {
  useIsEdition,
  useSectionField,
} from "@/makasi/Section/Section.context";
import dynamic from "next/dynamic";

const HeadingFieldEdition = dynamic(() => import("./HeadingField.edition"));

export const Heading: FC<TFieldProps & { heading: 1 | 2 | 3 | 4 }> = ({
  field,
  heading,
}) => {
  const isEdition = useIsEdition();
  const fieldData = useSectionField(field);

  if (isEdition) {
    return <HeadingFieldEdition field={field} heading={heading} />;
  }

  return createElement(`h${heading}`, {
    dangerouslySetInnerHTML: { __html: fieldData.value },
  });
};
