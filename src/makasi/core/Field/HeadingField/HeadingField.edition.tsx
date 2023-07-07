"use client";

import { TFieldProps } from "../Field.types";
import { FC, createElement, useState } from "react";
import {
  useFieldContext,
  useFieldEdition,
} from "../../fieldsContext/fieldsContext";

import { classNameModule } from "@/utils/className/className";
import styles from "./HeadingField.edition.module.scss";
const className = classNameModule(styles);

export const HeadingFieldEdition: FC<
  TFieldProps & { heading: 1 | 2 | 3 | 4 }
> = ({ name, heading }) => {
  const { value } = useFieldContext<string>(name);
  const { setValue } = useFieldEdition<string>(name);
  const [hasFocus, setFocus] = useState(false);

  return createElement(`h${heading}`, {
    ...className("HeadingFieldEdition", { hasFocus }),
    contentEditable: true,
    onKeyDown: (e: any) => {
      if (e.key === "Enter") e.preventDefault();
    },
    onFocus: () => {
      setFocus(true);
    },
    onBlur: (e: any) => {
      setFocus(false);
      setValue(e.target.textContent);
    },
    dangerouslySetInnerHTML: {
      __html: value,
    },
  });
};

export default HeadingFieldEdition;
