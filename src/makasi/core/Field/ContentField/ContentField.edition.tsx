"use client";

import { FC } from "react";
import { TFieldProps } from "../Field.types";

import DisplayContent from "../../Content/Content";
import {
  useFieldContext,
  useFieldEdition,
} from "../../fieldsContext/fieldsContext";

const ContentFieldEdition: FC<TFieldProps> = ({ name }) => {
  const { value } = useFieldContext<any>(name);
  const { setValue } = useFieldEdition(name);

  return (
    <DisplayContent
      nodes={value?.nodes || []}
      onChange={(nodes) => {
        setValue({
          ...value,
          nodes,
        });
      }}
    />
  );
};

export default ContentFieldEdition;
