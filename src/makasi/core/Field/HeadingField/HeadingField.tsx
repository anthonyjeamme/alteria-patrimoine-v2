"use client";

import { FC, createElement } from "react";
import { TFieldProps } from "../Field.types";
import dynamic from "next/dynamic";
import { useFieldContext } from "../../fieldsContext/fieldsContext";
import { useEditionContext } from "../../contexts/EditionContext/EditionContext";

const HeadingFieldEdition = dynamic(() => import("./HeadingField.edition"));

export const Heading: FC<TFieldProps & { heading: 1 | 2 | 3 | 4 }> = ({
  name,
  heading,
}) => {
  const { value } = useFieldContext<string>(name);
  const { edition } = useEditionContext();

  if (edition) {
    return <HeadingFieldEdition name={name} heading={heading} />;
  }

  return createElement(`h${heading}`, {
    dangerouslySetInnerHTML: { __html: value },
  });
};
