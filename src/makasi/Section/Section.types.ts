import { ComponentType } from "react";
import { TFieldData } from "../Field/Field.types";

export type TSectionData = {
  id: string;
  type: string;
  fieldsData: Record<string, TFieldData>;
  params: any;
};

export type TSectionDefinition = {
  name: string;
  Component: ComponentType<TSectionProps>;
};

export type TSectionProps = { params: any };
