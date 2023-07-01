"use client";

import { FC } from "react";
import { TFieldProps } from "../Field.types";
import { useSectionField } from "@/makasi/Section/Section.context";

import DisplayContent from "../../Content/Content";

export const Content: FC<TFieldProps> = ({ field }) => {
  const fieldData = useSectionField(field);

  return <DisplayContent nodes={fieldData.value.nodes} />;
};
