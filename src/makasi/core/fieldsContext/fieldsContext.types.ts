import { ReactNode } from "react";
import { TFieldsData } from "../types";

export type TFieldsContext = {
  data: TFieldsData;
  update?: (value: TFieldsData) => void;
};

export interface IFieldsContextProps {
  children: ReactNode;
  data: TFieldsData;
  update?: (data: TFieldsData) => void;
}

export type TUseFieldContextHook<
  TValue = unknown,
  TParams extends Record<string, unknown> = Record<string, unknown>
> = {
  value?: TValue;
  params?: TParams;
  getParam: <K extends keyof TParams>(key: K) => TParams[K];
};

export type TUseFieldEditionHook<
  TValue = unknown,
  TParams extends Record<string, unknown> = Record<string, unknown>
> = {
  setValue: (value: TValue) => void;
  setParam: <K extends keyof TParams>(key: K, value: TParams[K]) => void;
  updateParams: (params: Partial<TParams>) => void;
};
