import { ComponentType } from "react";
import { TFieldsData } from "../types";

export type TSectionData = {
  id: string;
  type: string;
  fieldsData: TFieldsData;
  params: any;
};

export type TSectionDefinition = {
  name: string;
  label: string;
  imagePreview: string;
  Component: ComponentType<TSectionProps<any, any>>;
  getData?: (params?: any) => Promise<any>;
  defaultData?: {
    fieldsData?: any;
    params?: any;
  };
};

export type TSectionProps<Params = unknown, Data = unknown> = {
  params: Params;
  data: Data;
};

export type TUseSectionParamsHook<
  TParams extends Record<string, unknown> = Record<string, unknown>
> = {
  params?: TParams;
  getParam: <K extends keyof TParams>(key: K) => TParams[K];
};

export type TUseSectionParamsEditionHook<
  TParams extends Record<string, unknown> = Record<string, unknown>
> = {
  setParam: <K extends keyof TParams>(key: K, value: TParams[K]) => void;
  updateParams: (params: Partial<TParams>) => void;
};
