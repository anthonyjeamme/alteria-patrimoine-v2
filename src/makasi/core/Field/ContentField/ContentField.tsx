"use client";

import { FC } from "react";
import { TFieldProps } from "../Field.types";
import dynamic from "next/dynamic";

import DisplayContent from "../../Content/Content";
import { useFieldContext } from "../../fieldsContext/fieldsContext";
import { useEditionContext } from "../../contexts/EditionContext/EditionContext";

const ContentFieldEdition = dynamic(() => import("./ContentField.edition"));

export const Content: FC<TFieldProps> = ({ name }) => {
  const { value } = useFieldContext<any>(name);
  const { edition } = useEditionContext();

  if (edition) return <ContentFieldEdition name={name} />;

  return <DisplayContent nodes={value?.nodes || []} />;
};
