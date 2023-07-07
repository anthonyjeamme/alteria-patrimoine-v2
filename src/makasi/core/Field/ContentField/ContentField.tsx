"use client";

import { FC } from "react";
import { TFieldProps } from "../Field.types";

import DisplayContent from "../../Content/Content";
import { useFieldContext } from "../../fieldsContext/fieldsContext";

export const Content: FC<TFieldProps> = ({ name }) => {
  const { value } = useFieldContext<any>(name);

  return <DisplayContent nodes={value?.nodes || []} />;
};
