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
  Component: ComponentType<TSectionProps<any, any>>;
  getData?: (params?: any) => Promise<any>;
};

export type TSectionProps<Params = unknown, Data = unknown> = {
  params: Params;
  data: Data;
};
