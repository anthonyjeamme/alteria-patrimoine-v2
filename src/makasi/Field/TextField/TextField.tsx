import { FC } from "react";
import { TFieldProps } from "../Field.types";

export const TextField: FC<TFieldProps> = ({ name }) => {
  return <div>TextField {name}</div>;
};
